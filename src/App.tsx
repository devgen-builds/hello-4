import { plan, project } from './project'

export default function App() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 text-slate-800">
      <h1 className="text-4xl font-bold tracking-tight">{project.name}</h1>
      <p className="mt-4 text-lg text-slate-600">{project.summary}</p>

      <section className="mt-12" aria-labelledby="plan-heading">
        <h2 id="plan-heading" className="text-2xl font-semibold">
          Plan
        </h2>
        <ol className="mt-4 space-y-4">
          {plan.map((m, i) => (
            <li key={m.title} className="rounded-lg border border-slate-200 bg-white p-4">
              <h3 className="font-semibold">
                Milestone {i + 1}: {m.title}
              </h3>
              <p className="mt-1 text-slate-600">{m.summary}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  )
}
