import { useContent } from '../settings'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

function CredList({ title, items }) {
  return (
    <div className="cred">
      <h3>{title}</h3>
      <ul>
        {items.map((it) => (
          <li key={it.title}>
            <span className="cred-title">{it.title}</span>
            <span className="cred-meta">{[it.place, it.year].filter(Boolean).join(' · ')}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function About() {
  const { about, profile, sections, ui } = useContent()
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionHead {...sections.about} />
        <div className="about-grid">
          <Reveal className="about-portrait">
            <div className="portrait">
              <img src={profile.portrait} alt={profile.name} width="240" height="539" loading="lazy" decoding="async" />
            </div>
            <p className="about-caption">
              <strong>{profile.name}</strong>
              <span>{profile.location}</span>
              <span>{about.languages.join(' · ')}</span>
              <span className="status"><i aria-hidden /> {profile.status}</span>
            </p>
          </Reveal>
          <div className="about-body">
            {about.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} className={i === 0 ? 'about-lede' : ''} delay={i * 60}>{p}</Reveal>
            ))}
            <Reveal className="competencies" delay={120}>
              <h3>{ui.competencies}</h3>
              <ul>{about.competencies.map((c) => <li key={c}>{c}</li>)}</ul>
            </Reveal>
            <Reveal className="creds" delay={160}>
              <CredList title={ui.education} items={about.education} />
              <CredList title={ui.certifications} items={about.certifications} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
