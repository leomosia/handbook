# Contributing to the Leo Mosia Handbook

Thank you for improving the Leo Mosia Handbook.

The handbook is changed through pull requests. A pull request is not just a file edit. It is a proposal to improve how the Leo Mosia ecosystem describes itself, operates, publishes, builds, and preserves knowledge.

The handbook is part of the operating system. Every contribution should make it clearer, stronger, easier to use, and easier to maintain.

Contributors are expected to work like Leo Mosia operators: with care, focus, ownership, and respect for the source of truth.

Outside contributors are welcome. If you see something that can be corrected, clarified, improved, or strengthened, you may open a pull request. Good outside contributions are reviewed seriously and treated with respect.

## Operator Standard

A Leo Mosia operator does not contribute noise.

A good operator contribution should:

- improve the system
- clarify the work
- reduce confusion
- preserve useful knowledge
- respect existing structure
- make future work easier
- help future operators understand what belongs where

The goal is not to add more content. The goal is to make the handbook more useful.

## Contribution Flow

1. Find the page that is the best single source of truth.
2. Read the surrounding content before editing.
3. Edit the Markdown file.
4. Keep the change focused.
5. Explain why the change is needed.
6. Run the local checks when possible.
7. Open a pull request.
8. Request review from the relevant `CODEOWNERS`.

## Content Rules

- Put information where it belongs by function and result.
- Link to existing source material instead of duplicating it.
- Include the reason behind a process when the reason helps future readers.
- Move content in one pull request; rewrite or expand it in a separate pull request.
- Prefer clear headings over long pages with hidden structure.
- Keep language clear, direct, and useful.
- Avoid adding content that does not improve understanding or operation.
- Do not create a new source of truth when one already exists.
- Make the page easier for the next operator to use.

## Pull Request Rules

A pull request should be focused and reviewable.

Before opening a pull request, ask:

- What problem does this change solve?
- Is this the right place for the change?
- Does this duplicate another page?
- Is this clear enough for someone new to understand?
- Does this improve how Leo Mosia operates?
- Would this still make sense later?

Large changes should be broken into smaller pull requests when possible.

## Ownership

Maintainers are assigned through `.github/CODEOWNERS`.

Ownership belongs in the repository structure, not hidden inside page content.

If a page has the wrong maintainer, update `CODEOWNERS` instead of adding maintainers inside the page content.

Owners are responsible for protecting the clarity, structure, and usefulness of the pages they maintain.

## Review

Review is part of the operating discipline.

Reviewers should check whether the change:

- belongs in the selected location
- improves the handbook
- respects the source of truth
- avoids unnecessary duplication
- uses clear language
- fits the Leo Mosia way of working
- makes the handbook easier to operate from

Approval should not be automatic. A pull request should leave the handbook better than it found it.

## Local Checks

Run local checks before opening a pull request.

```bash
docker compose build
docker compose run --rm handbook npm run check
```

If checks fail, fix the issue before requesting review where possible.

## Final Standard

The Leo Mosia Handbook should become more useful with every contribution.

Do not contribute for activity. Contribute to create clarity, preserve knowledge, improve operations, and strengthen the system.
