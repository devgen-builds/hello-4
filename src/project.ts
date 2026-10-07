// Static project content for the project page. Keep in sync with PLAN.md.

export const project = {
  name: 'Hello DEVGEN',
  summary:
    'A one-page "hello" static website that shows the project name, its ticker, a one-line description and a short plan with milestone statuses.',
}

export const plan: { title: string; summary: string }[] = [
  {
    title: 'Hello page content',
    summary:
      'Show the project name, ticker and one-line description, plus the three milestones, each with a status.',
  },
  {
    title: 'Layout, accessibility and disclosures',
    summary:
      'Responsive layout, semantic landmarks, readable status labels, and a footer with the built-in-public notice and links.',
  },
  {
    title: 'Static release readiness',
    summary:
      'Page metadata and favicon, a check that the build makes no runtime network calls, and README build instructions.',
  },
]
