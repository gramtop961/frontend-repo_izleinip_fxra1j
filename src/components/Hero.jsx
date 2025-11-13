import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-28 lg:pt-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur px-3 py-1 ring-1 ring-zinc-200 dark:ring-zinc-700">
            <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2" />
            <span className="text-xs text-zinc-700 dark:text-zinc-300">Available for freelance & full‑time</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Building delightful software with TypeScript, React, and modern tooling.
          </h1>
          <p className="mt-4 text-zinc-700 dark:text-zinc-300 max-w-xl">
            I’m a full‑stack engineer focused on crafting fast, accessible experiences. Explore projects, skills, and get in touch.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="rounded-full bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 px-5 py-2.5 font-medium shadow hover:opacity-90 transition">View Projects</a>
            <a href="#contact" className="rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2.5 font-medium text-zinc-900 dark:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">Contact</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white dark:from-zinc-950" />
    </section>
  )
}
