import { useState } from 'react'
import { useContent } from '../settings'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

export default function Contact() {
  const { contact, sections, ui } = useContent()
  const [sent, setSent] = useState(false)

  // No backend yet: opens the visitor's mail app with the message prefilled.
  // Swap for EmailJS / Formspree / an API route when going live.
  const onSubmit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`${ui.enquiryFrom} ${f.get('name')}${f.get('company') ? ` (${f.get('company')})` : ''}`)
    const body = encodeURIComponent(`${f.get('message')}\n\n— ${f.get('name')}\n${f.get('email')}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const rows = [
    { label: ui.email, value: contact.email, href: `mailto:${contact.email}` },
    { label: ui.phone, value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    contact.linkedin && { label: ui.linkedin, value: ui.viewProfile, href: contact.linkedin, text: true },
    { label: ui.location, value: contact.location },
  ].filter(Boolean)

  return (
    <section className="section" id="contact">
      <div className="container">
        <SectionHead {...sections.contact} />
        <div className="contact-grid">
          <Reveal as="ul" className="contact-list">
            {rows.map((r) => (
              <li key={r.label}>
                <span>{r.label}</span>
                {r.href ? (
                  <a href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{r.text ? r.value : <bdi dir="ltr">{r.value}</bdi>}</a>
                ) : (
                  <strong>{r.value}</strong>
                )}
              </li>
            ))}
          </Reveal>
          <Reveal as="form" className="contact-form" onSubmit={onSubmit} delay={80}>
            <div className="field-row">
              <label className="field"><span>{ui.formName}</span><input name="name" required autoComplete="name" /></label>
              <label className="field"><span>{ui.formEmail}</span><input name="email" type="email" required autoComplete="email" /></label>
            </div>
            <label className="field"><span>{ui.formCompany} <em>{ui.optional}</em></span><input name="company" autoComplete="organization" /></label>
            <label className="field"><span>{ui.formMessage}</span><textarea name="message" rows="5" required /></label>
            <button className="btn btn-primary" type="submit">{ui.send}</button>
            <p className={`form-note ${sent ? 'is-visible' : ''}`} role="status">
              {sent ? ui.sentNote : ''}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
