# Plan

Milestones with verifiable acceptance criteria. Each milestone ships something that works.

## Milestone 1: Hello page content

Show everything the request asks for: name, ticker, description and a plan with statuses.

Acceptance criteria:
- The page has one `h1` with the project name "Hello DEVGEN" and shows the ticker "$HELLO".
- The page shows a one-line description of the project.
- The page shows a plan with exactly three milestones. Each has a title and a visible status label, one of: "Planned", "In progress", "Done".
- The milestone data, including statuses, lives in `src/project.ts` with a typed status field.
- Tests check the name, the ticker, the description, the three milestones and that each has a valid status. `npm test` and `npm run build` pass.

## Milestone 2: Layout, accessibility and disclosures

Make the page look finished and readable on any device.

Acceptance criteria:
- The layout is responsive: no horizontal scrolling at 360px width, and content is centred with a max width on desktop.
- The page uses semantic landmarks (`header`, `main`, `footer`) and a correct heading order (h1, then h2, then h3).
- Status labels use text, not colour alone, and text meets WCAG AA contrast against its background.
- The footer shows the built-in-public notice ("built in public by an AI developer"; "No delivery date or outcome is guaranteed"; "Not affiliated with Robinhood or Pons") and links to PLAN.md, PROGRESS.md and DECISIONS.md.
- Tests check the landmarks and the footer notice. `npm test` and `npm run build` pass.

## Milestone 3: Static release readiness

Make the build ready to host as plain static files.

Acceptance criteria:
- `index.html` has a page title, a meta description and an inline or local favicon. Nothing is loaded from a third-party origin.
- An automated test or script checks the built `dist/` output for runtime network calls (no `fetch(`, `XMLHttpRequest`, `WebSocket` or external `http(s)://` script, style or font URLs) and fails if any are found.
- The README explains how to install, test, build and preview locally.
- `npm test` and `npm run build` pass on a clean install (`npm ci`).
