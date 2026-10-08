import { useContent } from '../settings'
import Reveal from './Reveal'

export default function Testimonials() {
  const { testimonials, ui } = useContent()
  if (!testimonials.length) return null
  return (
    <section className="section testimonials" aria-label={ui.testimonials}>
      <div className="container quote-grid">
        {testimonials.map((t, i) => (
          <Reveal as="figure" key={i} className="quote" delay={i * 80}>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              <strong>{t.name}</strong>
              <span>{t.title}</span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
