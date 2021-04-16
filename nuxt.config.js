import LOCALES from './i18n.config'
const DEFAULT_LOCALE = 'ru'
const BASE_URL = process.env.NUXT_ENV_BACKEND_URL
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
          'https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&family=Rubik:wght@400;500&display=swap',
        rel: 'preload',
        as: 'style',
        onload: 'this.rel="stylesheet"',
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css/normalize.css', '@/assets/css/main.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/click-outside.js',
    {
      src: '@/plugins/vue-awesome-swiper.js',
      mode: 'client',
    },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module', // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],
  modules: [
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n',
    'nuxt-lazy-load',
    'vue-scrollto/nuxt',
    [
      '@nuxtjs/prismic',
      {
        endpoint: 'https://teeple.cdn.prismic.io/api/v2',
      },
    ],
    ['nuxt-sm'],
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
  },
  i18n: {
    baseUrl: BASE_URL,
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
    fallback: true, // routes: dynamicRoutes,
  },
  // server: {
  //   host: '192.168.0.101',
  // },
}
