export default function Projects() {
  const projects = [
    {
      title: 'Realtime Chat',
      desc: 'WebSocket powered chat app with rooms, presence, and message reactions.',
      tags: ['TypeScript', 'React', 'WebSocket'],
      link: '#'
    },
    {
      title: 'E‑commerce Starter',
      desc: 'Headless storefront with Stripe payments, product search, and CMS sync.',
      tags: ['Next.js', 'Tailwind', 'Stripe'],
      link: '#'
    },
    {
      title: 'Design System',
      desc: 'Composable UI kit with accessibility first components and tokens.',
      tags: ['Storybook', 'Radix', 'TS'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Selected Projects</h2>
      <p className="mt-2 text-zinc-700 dark:text-zinc-300">A snapshot of things I loved building recently.</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a key={p.title} href={p.link} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">{p.title}</h3>
              <span className="text-xs rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-500/20 px-2 py-1">Case Study</span>
            </div>
            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 px-2 py-1 text-zinc-700 dark:text-zinc-300">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
