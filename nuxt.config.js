import prismic from '@prismicio/client'
import LOCALES, { DEFAULT_LOCALE } from './i18n.config'

const API_URL = process.env.NUXT_ENV_API_URL
const FRONT_URL = process.env.NUXT_ENV_FRONT
const dev = process.env.NODE_ENV !== 'production'
const DEV_HOST = 'http://localhost:3000'

// TODO The pageSize option defines the maximum number of documents that the API will return for your query. Default is 20, max is 100.

const dynamicRoutes = async () => {
  try {
    const api = await prismic.getApi(API_URL)

    const posts = await api.query(
      prismic.predicates.at('document.type', 'posts'),
      { pageSize: 100 }
    )

    const stories = await api.query(
      prismic.predicates.at('document.type', 'story'),
      { pageSize: 100 }
    )

    const pages = await api.query(
      prismic.predicates.at('document.type', 'simple_page'),
      { pageSize: 100 }
    )

    const products = await api.query(
      prismic.predicates.at('document.type', 'products'),
      { pageSize: 100 }
    )

    const type = {
      posts: 'blog',
      story: 'examples',
      simple_page: 'company',
      products: 'products',
    }

    return [
      ...posts.results,
      ...stories.results,
      ...pages.results,
      ...products.results,
    ].reduce((acc, item) => {
      const route = `/${type[item.type]}/${item.uid}`
      const temp = LOCALES.map((lang) =>
        lang.code === DEFAULT_LOCALE ? route : `/${lang.code}${route}`
      )
      return [...temp, ...acc]
    }, [])
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error', error)
    return []
  }
}

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tojoin',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700;800&family=Rubik:wght@400;500&display=swap',
        rel: 'stylesheet',
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css/normalize.css', '~/assets/scss/index'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/click-outside.js',
    '~/plugins/filters.js',
    {
      src: '@/plugins/vue-awesome-swiper.js',
      mode: 'client',
    },
    { src: '@/plugins/vue-gtag', mode: 'client' },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/axios',
    // '@nuxtjs/google-analytics',
  ],
  modules: [
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n',
    'vue-scrollto/nuxt',
    'portal-vue/nuxt',
    [
      '@nuxtjs/prismic',
      {
        endpoint: API_URL,
        linkResolver: '@/plugins/link-resolver',
      },
    ],
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  axios: {
    proxy: true,
    https: true,
  },
  proxy: {
    '/.netlify': FRONT_URL,
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: dev ? DEV_HOST : FRONT_URL,
    },
  },

  build: {
    extend(config, ctx) {},
  },
  i18n: {
    baseUrl: '/',
    locales: LOCALES,
    defaultLocale: DEFAULT_LOCALE,
    parsePages: false,
    encodePaths: false,
    seo: false,
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: DEFAULT_LOCALE,
      locales: LOCALES,
    },
  },
  generate: {
    crawler: false,
    fallback: true,
    routes: dynamicRoutes,
  },
  router: {
    trailingSlash: true,
  },
  // googleAnalytics: {
  //   id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
  // },
  // server: {
  //   host: '192.168.0.101',
  // },
}
