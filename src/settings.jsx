import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import * as en from './data/content'
import * as ar from './data/content.ar'

const content = { en, ar }
const Settings = createContext(null)

// Storage can throw (private windows, blocked site data); the site works without it.
const read = (key) => { try { return localStorage.getItem(key) } catch { return null } }
const write = (key, value) => { try { localStorage.setItem(key, value) } catch { /* ignore */ } }

// Light is the default; dark only applies once the visitor picks it.
const initialTheme = () => (read('theme') === 'dark' ? 'dark' : 'light')

// Language (en / ar, with RTL) and colour theme. Defaults are English and
// light; a choice is remembered once the visitor uses a switch.
export function SettingsProvider({ children }) {
  const [lang, setLang] = useState(() => (read('lang') === 'ar' ? 'ar' : 'en'))
  const [theme, setTheme] = useState(initialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = lang === 'ar' ? 'rtl' : 'ltr'
    const { profile } = content[lang]
    document.title = `${profile.name} — ${profile.role}`
  }, [lang])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
      m.content = theme === 'dark' ? '#000000' : '#fbfbfd'
    })
  }, [theme])

  const value = useMemo(() => ({
    lang,
    theme,
    content: content[lang],
    toggleLang: () => setLang((l) => { const next = l === 'ar' ? 'en' : 'ar'; write('lang', next); return next }),
    toggleTheme: () => setTheme((t) => { const next = t === 'dark' ? 'light' : 'dark'; write('theme', next); return next }),
  }), [lang, theme])

  return <Settings.Provider value={value}>{children}</Settings.Provider>
}

export const useSettings = () => useContext(Settings)
export const useContent = () => useContext(Settings).content
