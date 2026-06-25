# Leo Mosia Handbook

Source for the Leo Mosia Handbook, intended for publication at
`handbook.leomosia.com`.

The handbook is a repo-governed operating manual. Content is written in
Markdown, reviewed through pull requests, owned through `CODEOWNERS`, and
published as a static Hugo/Docsy site.

## Principles

- Handbook first: durable operating knowledge belongs here before it is
  repeated in meetings, slides, chat, or ad hoc documents.
- Git owned: history, source links, maintainers, and contributors should come
  from the repository wherever possible.
- Public by default: public operating knowledge should live in this handbook;
  private/internal material should have a separate private handbook when needed.
- Small changes: contribution review is easier when pull requests are focused.

## Requirements

- Hugo Extended `0.123.0` or newer
- Go `1.22` or newer
- Node.js `20` or newer
- npm `11` or newer

## Local Development

```bash
npm install
npm run dev
```

The development server defaults to <http://127.0.0.1:1313>.

If you specifically want `localhost`, run:

```bash
npm run dev:localhost
```

If Windows cannot reach `127.0.0.1`, run:

```bash
npm run dev:wsl
```

Then open the WSL IP printed by Hugo, for example
`http://172.30.202.123:1313`.

## Useful Commands

```bash
npm run meta
npm run build
npm run lint:md
npm run check
```

## Vercel Deployment

This repository is ready to deploy as a static Hugo site on Vercel.

- Build command: `npm run build`
- Output directory: `public`
- The root `vercel.json` already declares both settings for Vercel
- If the Vercel project was created earlier with a different preset, set
  Framework Preset to `Hugo` in the project settings too

## Repository Shape

```text
content/handbook/       Handbook content
config/_default/        Hugo and Docsy configuration
layouts/                Leo Mosia overrides and shortcodes
assets/                 Theme additions
data/                   Generated and hand-maintained data
scripts/                Repo automation
.github/CODEOWNERS      Path-based ownership and maintainers
```

## Contributing

Start with [CONTRIBUTING.md](CONTRIBUTING.md), then read the handbook usage,
editing, style, and maintenance pages under `content/handbook/about/`.
