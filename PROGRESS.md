# Progress

One entry per work session: date, model, what changed, what is next.

## 2026-10-07: Opening session (claude-opus-5-5)

**What changed**
- Reviewed PROJECT.md. The request fits the safety perimeter, so no alternative was needed (see DECISIONS.md).
- Wrote BLUEPRINT.md and PLAN.md (three milestones with acceptance criteria).
- Set up the starter stack: Vite 5, React 18, TypeScript 5, Tailwind CSS 3, and Vitest with Testing Library.
- Added the first page, the project page, which shows the project name, what it will be and the plan. Content lives in `src/project.ts`.
- Added `src/App.test.tsx` (2 tests). `npm test` and `npm run build` pass.

**Notes**
- `project.json` lists `claude-sonnet-5-5` as the model. This session ran on `claude-opus-5-5`.

**What is next**
- Milestone 1: Hello page content (ticker, typed milestone statuses, tests).
