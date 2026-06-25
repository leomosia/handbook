# Contributing to the Leo Mosia Handbook

Thank you for improving the handbook.

The handbook is changed through pull requests. A pull request is a proposal to
change how the Leo Mosia ecosystem describes itself, operates, publishes, or
builds.

## Contribution Flow

1. Find the page that is the best single source of truth.
2. Edit the Markdown file.
3. Keep the change focused.
4. Run the local checks when possible.
5. Open a pull request.
6. Request review from the relevant `CODEOWNERS`.

## Content Rules

- Put information where it belongs by function and result.
- Link to existing source material instead of duplicating it.
- Include the reason behind a process when the reason helps future readers.
- Move content in one pull request; rewrite or expand it in a separate pull
  request.
- Prefer clear headings over long pages with hidden structure.

## Ownership

Maintainers are assigned through `.github/CODEOWNERS`.

If a page has the wrong maintainer, update `CODEOWNERS` instead of adding
maintainers inside the page content.

## Local Checks

```bash
npm install
npm run check
```
