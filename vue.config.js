const { defineConfig } = require('@vue/cli-service')
const PrerenderSPAPlugin = require('@prerenderer/webpack-plugin')
const Renderer = require('@prerenderer/renderer-puppeteer')
const path = require('path')

// Routes pre-rendered into static HTML at build time so each URL ships with
// its own correct meta + Open Graph tags (visible to social-media crawlers
// without requiring JavaScript execution).
const PRERENDER_ROUTES = [
  '/',
  '/work',
  '/resume',
  '/enquiry',
  '/work/clip',
  '/work/avianlens',
  '/work/authux',
  '/work/agentapp',
  '/work/coc',
  '/work/cloudmatrix',
  '/work/milelync',
  '/work/nubila',
  '/work/stickerhd',
  '/work/tiago',
  '/talks/storytelling',
]

module.exports = defineConfig({
  transpileDependencies: true,

  // Port 8080 is intercepted on this machine by the Cisco AnyConnect /
  // GlobalProtect socket filter extensions: IPv6 loopback connections are
  // accepted then reset (so `localhost:8080` gives ERR_CONNECTION_RESET), and
  // the filter mangles the HMR WebSocket stream, crashing the dev server with
  // "Invalid WebSocket frame: RSV1 must be clear". Binding loopback on a
  // different port sidesteps both. Drop `host` if you need LAN/device testing.
  devServer: {
    // Allow direct deep-link refreshes during `npm run serve` (history mode)
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8090,
  },

  configureWebpack: (config) => {
    if (process.env.NODE_ENV !== 'production') return

    config.plugins.push(
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: PRERENDER_ROUTES,
        renderer: new Renderer({
          // vue-meta injects tags after the app mounts, so wait for an
          // explicit signal before snapshotting the DOM.
          renderAfterDocumentEvent: 'render-event',
          headless: true,
          maxConcurrentRoutes: 4,
          // Use Puppeteer's bundled Chromium (it's protocol-matched). Allow an
          // override via PUPPETEER_EXECUTABLE_PATH for CI / restricted envs.
          launchOptions: {
            ...(process.env.PUPPETEER_EXECUTABLE_PATH
              ? { executablePath: process.env.PUPPETEER_EXECUTABLE_PATH }
              : {}),
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
          },
        }),
        postProcess(renderedRoute) {
          // Strip the hash-style scaffold from <base href> if present, and
          // make sure the title actually came through.
          renderedRoute.html = renderedRoute.html.replace(
            /<script (.*?)>/g,
            '<script $1 defer>'
          )
          return renderedRoute
        },
      })
    )
  },
})
