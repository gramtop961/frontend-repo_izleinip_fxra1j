export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-12 text-sm text-zinc-600 dark:text-zinc-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Your Name — All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-200">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-200">LinkedIn</a>
          <a href="mailto:you@example.com" className="hover:text-zinc-900 dark:hover:text-zinc-200">Email</a>
        </div>
      </div>
    </footer>
  )
}
