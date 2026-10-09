// Company logo on a white tile (logos are drawn for light backgrounds, so the
// tile stays white in dark mode). Falls back to the company's short name.
export default function Logo({ src, name, className = '' }) {
  return (
    <span className={`logo-tile ${className}`}>
      {src ? <img src={src} alt={name} loading="lazy" decoding="async" /> : <b>{name.split(' ')[0]}</b>}
    </span>
  )
}
