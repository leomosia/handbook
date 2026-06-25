import { execFileSync } from 'node:child_process'
import { mkdirSync, readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join, relative } from 'node:path'

const repoRoot = process.cwd()
const contentRoot = join(repoRoot, 'content', 'handbook')
const codeownersPath = join(repoRoot, '.github', 'CODEOWNERS')
const outputPath = join(repoRoot, 'data', 'generated', 'page_meta.json')
const repoUrl = 'https://github.com/leomosia/handbook'
const branch = process.env.HANDBOOK_BRANCH || currentBranch()

function currentBranch() {
  try {
    return execFileSync('git', ['branch', '--show-current'], { encoding: 'utf8' }).trim() || 'master'
  } catch {
    return 'master'
  }
}

function listMarkdownFiles(dir) {
  const entries = readdirSync(dir)
  const files = []

  for (const entry of entries) {
    const path = join(dir, entry)
    const stat = statSync(path)

    if (stat.isDirectory()) {
      files.push(...listMarkdownFiles(path))
    } else if (entry.endsWith('.md')) {
      files.push(path)
    }
  }

  return files
}

function parseCodeowners() {
  const lines = readFileSync(codeownersPath, 'utf8').split('\n')
  const rules = []

  for (const rawLine of lines) {
    const line = rawLine.trim()
    if (!line || line.startsWith('#') || line.startsWith('[')) continue

    const [pattern, ...owners] = line.split(/\s+/)
    if (!pattern || owners.length === 0) continue

    rules.push({ pattern, owners })
  }

  return rules
}

function ownersFor(filePath, rules) {
  const normalized = `/${filePath.replaceAll('\\', '/')}`
  let match = []

  for (const rule of rules) {
    const pattern = rule.pattern.endsWith('/') ? rule.pattern : rule.pattern.replace(/^\*/, '')

    if (rule.pattern === '*' || normalized === rule.pattern || normalized.startsWith(pattern)) {
      match = rule.owners
    }
  }

  return match
}

function git(args) {
  try {
    return execFileSync('git', args, { encoding: 'utf8' }).trim()
  } catch {
    return ''
  }
}

function gitDate(filePath) {
  return git(['log', '-1', '--follow', '--format=%cs', '--', filePath])
}

function gitAuthor(filePath) {
  return git(['log', '-1', '--follow', '--format=%an', '--', filePath])
}

function gitContributors(filePath) {
  const output = git(['log', '--follow', '--format=%an', '--', filePath])
  return [...new Set(output.split('\n').map((name) => name.trim()).filter(Boolean))]
}

function metaFor(filePath, rules) {
  const sourceUrl = `${repoUrl}/blob/${branch}/${filePath}`
  const editUrl = `${repoUrl}/edit/${branch}/${filePath}`
  const historyUrl = `${repoUrl}/commits/${branch}/${filePath}`

  return {
    path: filePath,
    owners: ownersFor(filePath, rules),
    lastUpdated: gitDate(filePath),
    lastAuthor: gitAuthor(filePath),
    contributors: gitContributors(filePath),
    sourceUrl,
    editUrl,
    historyUrl
  }
}

const rules = parseCodeowners()
const files = listMarkdownFiles(contentRoot)
const meta = {}

for (const absolutePath of files) {
  const filePath = relative(repoRoot, absolutePath).replaceAll('\\', '/')
  const hugoPath = relative(join(repoRoot, 'content'), absolutePath).replaceAll('\\', '/')
  meta[hugoPath] = metaFor(filePath, rules)
}

mkdirSync(dirname(outputPath), { recursive: true })
writeFileSync(outputPath, `${JSON.stringify(meta, null, 2)}\n`)
