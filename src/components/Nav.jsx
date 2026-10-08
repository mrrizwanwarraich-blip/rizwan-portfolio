import { useEffect, useState } from 'react'
import { useContent, useSettings } from '../settings'

const Sun = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
  </svg>
)
const Moon = () => (
  <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
  </svg>
)

export default function Nav() {
  const { nav, profile, ui } = useContent()
  const { lang, theme, toggleLang, toggleTheme } = useSettings()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = nav.map((n) => document.getElementById(n.id)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [nav])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-brand-full">{profile.name}</span>
          <span className="nav-brand-short">{profile.shortName}</span>
        </a>
        <nav className="nav-links" aria-label={ui.primaryNav}>
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'is-active' : ''} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="nav-tools">
          <button className="nav-lang" lang={lang === 'ar' ? 'en' : 'ar'} aria-label={ui.switchLangAria} onClick={toggleLang}>
            {ui.switchLang}
          </button>
          <button className="nav-theme" aria-label={theme === 'dark' ? ui.toLight : ui.toDark} onClick={toggleTheme}>
            {theme === 'dark' ? <Sun /> : <Moon />}
          </button>
        </div>
        <a href={profile.cv} className="nav-cta" target="_blank" rel="noreferrer">{ui.downloadCv}</a>
        <button
          className="nav-toggle"
          aria-label={open ? ui.closeMenu : ui.openMenu}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </div>
    </header>
  )
}
