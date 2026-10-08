import { useEffect, useMemo, useRef, useState } from 'react'
import { useContent } from '../settings'
import Media from './Media'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

function ProjectSheet({ project, onClose }) {
  const { ui } = useContent()
  const ref = useRef(null)

  useEffect(() => {
    const d = ref.current
    if (project && !d.open) {
      d.showModal()
      document.body.style.overflow = 'hidden'
    }
  }, [project])

  const close = () => {
    const d = ref.current
    d.classList.add('is-closing')
    setTimeout(() => {
      d.classList.remove('is-closing')
      d.close()
    }, 280)
  }

  return (
    <dialog
      ref={ref}
      className="sheet"
      onCancel={(e) => { e.preventDefault(); close() }}
      onClose={() => { document.body.style.overflow = ''; onClose() }}
      onClick={(e) => e.target === ref.current && close()}
    >
      {project && (
        <article className="sheet-card">
          <button className="sheet-close" onClick={close} aria-label={ui.close}>×</button>
          <Media src={project.image} alt="" className="sheet-media" />
          <div className="sheet-body">
            <p className="eyebrow">{project.category} · {project.year}</p>
            <h3>{project.title}</h3>
            <p className="sheet-summary">{project.summary}</p>
            <p className="sheet-outcome"><span>{ui.outcome}</span>{project.outcome}</p>
            <ul>{project.details.map((d) => <li key={d}>{d}</li>)}</ul>
          </div>
        </article>
      )}
    </dialog>
  )
}

export default function Projects() {
  const { projects, sections, ui } = useContent()
  const categories = useMemo(() => [...new Set(projects.map((p) => p.category))], [projects])
  // Filter and selection are held as positions so they survive a language switch.
  const [filter, setFilter] = useState(-1)
  const [selectedIndex, setSelected] = useState(null)
  const selected = selectedIndex === null ? null : projects[selectedIndex]
  const list = filter < 0 ? projects : projects.filter((p) => p.category === categories[filter])

  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead {...sections.projects} />
        <Reveal className="filters" role="tablist" aria-label={ui.filterProjects}>
          {[ui.all, ...categories].map((c, i) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === i - 1}
              className={filter === i - 1 ? 'is-active' : ''}
              onClick={() => setFilter(i - 1)}
            >
              {c}
            </button>
          ))}
        </Reveal>
        <div className="project-grid" key={filter}>
          {list.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 70}>
              <button className="project-card" onClick={() => setSelected(projects.indexOf(p))}>
                <Media src={p.image} alt="" className="project-media" />
                <div className="project-body">
                  <p className="eyebrow">{p.category} · {p.year}</p>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  <span className="project-outcome">{p.outcome}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <ProjectSheet project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
