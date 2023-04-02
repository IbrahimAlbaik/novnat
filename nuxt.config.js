export default {
  // mode: 'universal',
  target: 'static',
  generate: {
    fallback: true
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        type: 'image/x-icon',
        href: '/assets/images/resources/logo_novnat.png'
      },
      {
        rel: 'icon',
        sizes: '32x32',
        type: 'image/png',
        href: '/assets/images/resources/logo_novnat.png'
      },
      {
        rel: 'icon',
        sizes: '16x16',
        type: 'image/png',
        href: '/assets/images/resources/logo_novnat.png'
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Barlow:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600&display=swap'
      },
      { rel: 'stylesheet', href: '/assets/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/assets/css/bootstrap-datepicker.min.css' },
      { rel: 'stylesheet', href: '/assets/css/vegas.min.css' },
      { rel: 'stylesheet', href: '/assets/css/animate.min.css' },
      {
        rel: 'stylesheet',
        href: '/assets/plugins/glightbox/glightbox.min.css'
      },
      { rel: 'stylesheet', href: '/assets/css/fontawesome-all.min.css' },
      { rel: 'stylesheet', href: '/assets/css/agrikol_iconl.css' },
      { rel: 'stylesheet', href: '/assets/css/style.css' },
      { rel: 'stylesheet', href: '/assets/css/responsive.css' }
    ],

    script: [
      { src: '/assets/plugins/glightbox/glightbox.min.js', body: true },
      { src: '/assets/plugins/accordion/accordion.min.js', body: true }
    ]
  },
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: to.hash == '#services' || to.hash == '#uniqueness' ? el.offsetTop - 100 : el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#eddd5e', height: '4px' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/owl.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */

  /*
   ** Build configuration
   */
  build: {
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  }
};
