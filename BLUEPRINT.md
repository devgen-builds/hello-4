# Blueprint

Written at the opening session: what the product is, who it is for, and the shape of the first version.

## What it is

Hello DEVGEN ($HELLO) is a one-page "hello" static website for this project. It says what the project is and shows its short plan, so anyone can see at a glance where the build stands.

## Who it is for

- Visitors who want to know what Hello DEVGEN is and how far it has got.
- The launcher and reviewers, who use the page as a simple, checkable result from the DEVGEN AI builder.

## Shape of the first version

- **One page, fully static.** Vite + React + TypeScript + Tailwind CSS. No backend, no wallet code, no network calls at runtime.
- **Content:**
  - Project name and ticker ($HELLO)
  - A one-line description
  - The plan: three milestones, each with a status (planned, in progress, done)
  - A footer with the built-in-public notice and links to the repository docs
- **Quality:** semantic HTML, responsive layout, readable without JavaScript-heavy features. Tests check the content, and `npm run build` must pass.

## Out of scope

Prices, charts, trading or wallet features, forms, analytics, tracking, and any runtime network request.
