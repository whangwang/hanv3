// Build per-page meta tags + Open Graph + Twitter Card configs for vue-meta.
// Usage:
//   import { pageMeta, projectCover } from '@/utils/pageMeta'
//   useMeta(pageMeta({ title: 'Foo', description: 'Bar', path: '/foo', image: projectCover('auth') }))

const SITE_URL = 'https://hanwang.design'
const SITE_NAME = 'Han Wang'
const DEFAULT_OG_IMAGE = `${SITE_URL}/ogimage.jpg`

/**
 * Compose full <title> + <meta> tags for a page, including OG and Twitter cards.
 *
 * @param {Object}  opts
 * @param {string}  opts.title         Page title (without site name)
 * @param {string}  opts.description   Page description (used as og:description and twitter:description)
 * @param {string}  [opts.path='']     Route path (e.g. '/work/authux') — used to build the canonical OG URL
 * @param {string}  [opts.image]       Absolute URL for OG image. Defaults to the site-wide ogimage.jpg
 * @param {string}  [opts.type='website'] og:type
 */
export function pageMeta({ title, description, path = '', image, type = 'website' }) {
  const fullTitle = title ? `${title} — ${SITE_NAME}` : SITE_NAME
  const url = `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`.replace(/\/$/, '') || SITE_URL
  const ogImage = image || DEFAULT_OG_IMAGE

  return {
    title: fullTitle,
    meta: [
      { name: 'description', content: description },

      // Open Graph
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: SITE_NAME },
      { property: 'og:url', content: url },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: url },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
    ],
  }
}

/**
 * Resolve a project's cover@2x.jpg into an absolute URL suitable for og:image.
 * Falls back to the default site OG image if the cover can't be found.
 *
 * @param {string} projectName  Folder name under src/assets/images/projects/
 * @returns {string} Absolute URL
 */
export function projectCover(projectName) {
  try {
    // Webpack resolves this dynamic require at build time and returns a hashed
    // public path (e.g. /img/cover@2x.abc123.jpg).
    const path = require(`@/assets/images/projects/${projectName}/cover@2x.jpg`)
    return `${SITE_URL}${path}`
  } catch (e) {
    return DEFAULT_OG_IMAGE
  }
}
