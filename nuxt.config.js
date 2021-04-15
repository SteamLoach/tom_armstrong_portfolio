import {version} from './package.json'

const IS_DRAFT = process.env.CONTENT_VERSION === 'draft';

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  generate: {
    fallback: IS_DRAFT,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'tom_armstrong_portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      IS_DRAFT ? {name: 'robots', content: 'noindex,nofollow'} : {},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16'
      },
    ]
  },

  publicRuntimeConfig: {
    contentVersion: process.env.CONTENT_VERSION,
    buildVersion: version,
  },
  privateRuntimeConfig: {},


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/base.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/globalComponents.js',
    '~/plugins/toolkit.js',
    '~/plugins/numbers.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components/_wrappers',
    '~/components/cards',
    '~/components/content',
    '~/components/controls',
    '~/components/forms',
    '~/components/layout',
    '~/components/media',
    '~/components/navigation',
    '~/components/utils',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
    "@nuxtjs/svg"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-lazy-load',
    [
      'storyblok-nuxt',
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        cacheProvider: 'memory'
      }
    ],
  ],

  styleResources: {
    scss: [
      '@/assets/scss/lib.scss'
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
