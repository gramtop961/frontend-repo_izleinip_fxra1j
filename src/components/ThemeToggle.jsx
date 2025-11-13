import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

function getSystemPref() {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const initial = saved || getSystemPref()
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
    >
      {theme === 'dark' ? (
        <>
          <Sun size={16} />
          <span>Light</span>
        </>
      ) : (
        <>
          <Moon size={16} />
          <span>Dark</span>
        </>
      )}
    </button>
  )
}
