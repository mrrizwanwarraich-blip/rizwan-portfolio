import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { profile } from './src/data/content.js'

// Writes the page title, description and link-preview tags into index.html from
// content.js, so they never drift from the site. The preview image itself is
// drawn on request by api/og.js.
const seoFromContent = () => ({
  name: 'seo-from-content',
  transformIndexHtml(html) {
    const { seoTitle: title, seoDescription: description, shareDescription: share } = profile
    for (const [name, text, max] of [['seoTitle', title, 60], ['seoDescription', description, 160], ['shareDescription', share, 125]]) {
      if (text.length > max) this.warn?.(`profile.${name} is ${text.length} characters (limit ${max}); previews may cut it off`)
    }
    const image = `${profile.site}/api/og`
    const meta = (key, name, content) => ({ tag: 'meta', attrs: { [key]: name, content }, injectTo: 'head' })
    return {
      html: html.replace(/<title>.*?<\/title>/, `<title>${title.replace(/&/g, '&amp;')}</title>`),
      tags: [
        meta('name', 'description', description),
        { tag: 'link', attrs: { rel: 'canonical', href: `${profile.site}/` }, injectTo: 'head' },
        meta('property', 'og:type', 'profile'),
        meta('property', 'og:site_name', profile.name),
        meta('property', 'og:url', `${profile.site}/`),
        meta('property', 'og:title', title),
        meta('property', 'og:description', share),
        meta('property', 'og:image', image),
        meta('property', 'og:image:type', 'image/png'),
        meta('property', 'og:image:width', '1200'),
        meta('property', 'og:image:height', '630'),
        meta('property', 'og:image:alt', `Business card: ${profile.name}, ${profile.role}, ${profile.status}`),
        meta('property', 'og:locale', 'en_GB'),
        meta('property', 'og:locale:alternate', 'ar_SA'),
        meta('name', 'twitter:card', 'summary_large_image'),
        meta('name', 'twitter:title', title),
        meta('name', 'twitter:description', share),
        meta('name', 'twitter:image', image),
      ],
    }
  },
})

export default defineConfig({
  plugins: [react(), seoFromContent()],
})
