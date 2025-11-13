import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 flex items-center justify-between rounded-full bg-white/70 dark:bg-zinc-900/70 backdrop-blur ring-1 ring-zinc-200 dark:ring-zinc-700 px-4 py-2.5">
          <a href="#" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">dev.portfolio</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-700 dark:text-zinc-300">
            <a href="#about" className="hover:text-zinc-950 dark:hover:text-white">About</a>
            <a href="#projects" className="hover:text-zinc-950 dark:hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-zinc-950 dark:hover:text-white">Skills</a>
            <a href="#contact" className="hover:text-zinc-950 dark:hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
