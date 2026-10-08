import { useContent } from '../settings'

export default function Footer() {
  const { contact, nav, profile, ui } = useContent()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}. {ui.rights}</p>
        <nav aria-label={ui.footerNav}>
          {nav.map((n) => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}
          {contact.linkedin && <a href={contact.linkedin} target="_blank" rel="noreferrer">{ui.linkedin}</a>}
        </nav>
      </div>
    </footer>
  )
}
