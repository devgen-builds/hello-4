# Decisions

One entry per decision: date, decision, why.

## 2026-10-07: The request fits the safety perimeter; no alternative needed

- **Decision:** Build the request as written: a one-page static hello site that shows the project name, the ticker, a one-line description and a three-milestone plan with statuses.
- **Why:** It is fully static. It has no backend, no wallet code, no runtime network calls, and no handling of funds or personal data. The ticker is shown only as a label. The page shows no price, no trading links and no investment claims, and later milestones must keep it that way.

## 2026-10-07: Starter stack and pinned major versions

- **Decision:** Vite 5, React 18, TypeScript 5, Tailwind CSS 3 (PostCSS), with Vitest 2, jsdom and Testing Library for tests. Vite `base: './'` so the build works from any static host path.
- **Why:** These are stable, well-known versions of the required starter stack, and the build output is plain static files.

## 2026-10-07: Page content lives in one data module

- **Decision:** The project name, description and milestones live in `src/project.ts`, and the page renders from it.
- **Why:** It keeps the page and PLAN.md easy to keep in sync, and tests can check the content without depending on markup.
