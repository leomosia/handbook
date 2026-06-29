# Leo Mosia Handbook

Source repository for the Leo Mosia Handbook, published at `handbook.leomosia.com`.

The Leo Mosia Handbook is the operating manual for how we think, work, build, decide, and improve inside the Leo Mosia ecosystem.

It documents our ways, principles, philosophies, systems, practices, standards, and working agreements. It is not just a public knowledge base. It is the source of how Leo Mosia operates.

The handbook is Git-based, written in Markdown, reviewed through pull requests, owned through `CODEOWNERS`, and published as a static Hugo/Docsy website.

This repository is primarily maintained by Leo Mosia operators: people who contribute to the work, systems, projects, companies, platforms, and operating culture of Leo Mosia.

Outside contributors are welcome. If you notice something that can be improved, clarified, corrected, or extended, you are welcome to open a pull request.

## Purpose

The handbook exists to make Leo Mosia more clear, consistent, durable, and scalable.

It helps us:

- document how we operate
- turn repeated knowledge into reusable systems
- preserve institutional memory
- clarify standards before work becomes chaotic
- help operators understand the way we work
- reduce unnecessary meetings, scattered notes, and repeated explanations
- build in a way that can compound over time

The handbook is where durable operating knowledge belongs.

## Principles

- **Handbook first:** If knowledge is useful, repeated, or important to how we operate, it should live here before it is buried in meetings, chat, slides, or private notes.
- **Operate with structure:** We use documentation to create clarity, reduce confusion, and make better work possible.
- **Git owned:** History, authorship, ownership, maintainers, and contributions should come from the repository wherever possible.
- **Small changes:** Focused pull requests are easier to review, discuss, improve, and maintain.
- **Public where useful:** Operating knowledge that can be shared openly belongs here. Private, sensitive, or internal-only material should live in the appropriate private handbook or repository.
- **Operator mindset:** Contributors are expected to think like operators: improve the system, clarify the work, reduce friction, and leave things better than they found them.
- **Depth before exposure:** We prefer useful, grounded, and durable documentation over shallow public performance.
- **Structure before scale:** We document and refine the way we work before trying to scale the work.

## Requirements

- Docker & Docker Compose

## Local Development

```bash
docker compose up -d
```

Open <http://localhost:1313>.

If you are running Docker inside WSL2 and need to access the site from a
Windows browser, use `localhost` (not `127.0.0.1`).

## Useful Commands

```bash
docker compose build          # Rebuild the image after dependency changes
docker compose run --rm handbook npm run check   # Lint + build (what CI runs)
docker compose run --rm handbook npm run lint:md # Markdown lint only
docker compose run --rm handbook npm run build   # Build only
```

## Vercel Deployment

This repository is ready to deploy as a static Hugo site on Vercel.

- Build command: `npm run build`
- Output directory: `public`
- `vercel.json` defines the Hugo framework preset and required build settings.
- The repository bundles Hugo through `hugo-extended`, so Vercel does not require a preinstalled Hugo binary.
- `HUGO_BASEURL` is automatically read by Hugo `0.158.0+` and overrides the configured `baseURL`, so no manual environment variable mapping is required.

## Repository Structure

```text
content/handbook/       Handbook content
config/_default/        Hugo and Docsy configuration
layouts/                Leo Mosia overrides and shortcodes
assets/                 Theme assets and additions
data/                   Generated and hand-maintained data
scripts/                Repository automation
.github/CODEOWNERS      Path ownership and maintainers
```

## Contributing

Start with `CONTRIBUTING.md`, then read the handbook usage, editing, style, and maintenance guides under:

```text
content/handbook/about/
```

Contributions should improve clarity, usefulness, structure, and maintainability.

Leo Mosia operators should treat this handbook as part of the work, not separate from the work. If something is unclear, repeated, or important, improve the handbook.

Outside contributors are welcome to open pull requests where they can add value. Good contributions may include corrections, clearer wording, improved structure, broken link fixes, or useful suggestions that strengthen the handbook.

## Inspiration

This handbook is inspired by the GitLab Handbook and its handbook-first approach to documenting how an organization works.

We admire the discipline of making operating knowledge visible, maintainable, and contributable. The Leo Mosia Handbook follows that spirit while developing its own way of working, language, philosophy, and operating culture.
