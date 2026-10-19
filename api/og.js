// Link-preview image (Open Graph), drawn on request as a business card.
// Everything on it comes from src/data/content.js, so it follows the site:
// change the name, role, phone, email or hero photo there and the card changes too.
import { ImageResponse } from '@vercel/og'
import { profile, contact, experience } from '../src/data/content.js'

const el = (type, style, ...children) => ({
  type,
  props: { style, children: children.length === 1 ? children[0] : children.filter(Boolean) },
})

const INK = '#1d1d1f'
const GREY = '#6e6e73'

export async function GET(request) {
  const origin = new URL(request.url).origin
  // The experience list is newest first, so the card always shows the current employer.
  const { company, location: place } = experience[0]

  const row = (label, value) =>
    el('div', { display: 'flex', alignItems: 'center', marginTop: 16 },
      el('div', { width: 128, fontSize: 15, fontWeight: 700, letterSpacing: 1.4, color: '#86868b' }, label.toUpperCase()),
      el('div', { fontSize: 26, color: INK }, value),
    )

  const card = el('div',
    { display: 'flex', width: 1200, height: 630, padding: 36, background: '#eef0f4', fontFamily: 'sans-serif' },
    el('div',
      {
        display: 'flex', width: 1128, height: 558, borderRadius: 40, overflow: 'hidden',
        background: '#fff', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 12px 36px rgba(0,0,0,0.14)',
      },
      // identity
      el('div', { display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 724, padding: '0 54px 0 60px' },
        el('div', { display: 'flex', alignItems: 'center' },
          el('div',
            {
              display: 'flex', alignItems: 'center', justifyContent: 'center', width: 60, height: 60,
              borderRadius: 15, background: INK, color: '#fff', fontSize: 25, fontWeight: 700,
            },
            profile.initials),
          el('div', { display: 'flex', flexDirection: 'column', marginLeft: 18 },
            el('div', { fontSize: 22, fontWeight: 700, color: INK }, company),
            el('div', { fontSize: 19, color: GREY }, [place, profile.location].filter(Boolean).join(', ')),
          ),
        ),
        el('div', { marginTop: 36, fontSize: profile.name.length > 22 ? 42 : 50, letterSpacing: -1.4, lineHeight: 1.1, color: INK }, profile.name),
        el('div', { marginTop: 12, fontSize: 28, fontWeight: 700, color: '#0071e3' }, profile.role),
        el('div', { display: 'flex', height: 1, marginTop: 26, marginBottom: 8, background: 'rgba(0,0,0,0.1)' }, ''),
        row('Phone', contact.phone),
        contact.whatsapp ? row('WhatsApp', contact.whatsapp) : null,
        row('Email', contact.email),
        // call to action
        el('div', { display: 'flex', alignItems: 'center', marginTop: 26 },
          el('div',
            { display: 'flex', padding: '13px 28px', borderRadius: 999, background: '#0071e3', color: '#fff', fontSize: 26 },
            'Get in touch'),
          el('div', { marginLeft: 20, fontSize: 24, color: INK }, `Visit ${profile.site.replace(/^https?:\/\//, '')}`),
        ),
      ),
      // photo
      el('div',
        {
          display: 'flex', alignItems: 'flex-end', justifyContent: 'center', width: 404, height: 558,
          background: 'linear-gradient(180deg, #dbe7fb 0%, #eceef3 55%, #e9e4dd 100%)',
        },
        { type: 'img', props: { src: origin + profile.heroCutout, width: 353, height: 540, style: { objectFit: 'contain', objectPosition: 'bottom' } } },
      ),
    ),
  )

  const image = new ImageResponse(card, { width: 1200, height: 630 })
  // The library's default is a one-year immutable cache; keep it short so content edits show up.
  image.headers.set('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400')
  return image
}
