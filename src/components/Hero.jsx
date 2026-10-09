import { useContent } from '../settings'
import Reveal from './Reveal'

export default function Hero() {
  const { profile, stats, heroBadges, ui } = useContent()
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal as="p" className="hero-status"><i aria-hidden /> {profile.status}</Reveal>
          <Reveal as="h1" className="hero-title" delay={80}>{profile.headline}</Reveal>
          <Reveal as="p" className="hero-role" delay={120}>{profile.role}</Reveal>
          <Reveal as="p" className="hero-intro" delay={160}>{profile.intro}</Reveal>
          <Reveal className="hero-actions" delay={240}>
            <a href="#projects" className="btn btn-primary">{ui.viewWork}</a>
            <a href={profile.cv} className="btn btn-secondary" target="_blank" rel="noreferrer">{ui.downloadCv}</a>
            <a href="#contact" className="btn btn-link">{ui.getInTouch} <span aria-hidden>{ui.arrow}</span></a>
          </Reveal>
        </div>

        <Reveal className="hero-stage" delay={200}>
          <div className="hero-stage-bg" aria-hidden />
          <img src={profile.heroCutout} alt={profile.name} width="698" height="1068" />
          {heroBadges.map((b, i) => (
            <p key={b.label} className={`hero-chip hero-chip-${i + 1}`}>
              <strong>{b.value}</strong>
              <span>{b.label}</span>
            </p>
          ))}
        </Reveal>
      </div>

      <div className="container">
        <dl className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={i * 70}>
              <dt>{s.label}</dt>
              <dd><bdi dir="ltr">{s.value}<span>{s.suffix}</span></bdi></dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
