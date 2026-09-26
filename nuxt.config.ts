// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
  app: { pageTransition: { name: 'page', mode: 'out-in' } },
  routeRules: {
    '/services': { redirect: '/' },
    '/services/installation': { redirect: '/installation' },
    '/services/service': { redirect: '/service' },
    '/services/repair': { redirect: '/repair' },
    '/en/services': { redirect: '/en' },
    '/en/services/installation': { redirect: '/en/installation' },
    '/en/services/service': { redirect: '/en/service' },
    '/en/services/repair': { redirect: '/en/repair' },
    '/ru/services': { redirect: '/ru' },
    '/ru/services/installation': { redirect: '/ru/installation' },
    '/ru/services/service': { redirect: '/ru/service' },
    '/ru/services/repair': { redirect: '/ru/repair' },
  },
  i18n: {
    locales: [
      { code: 'ka', file: 'ka.json' },
      { code: 'en', file: 'en.json' },
      { code: 'ru', file: 'ru.json' },
    ],
    defaultLocale: 'ka',
    // messages/ is owned by scripts/translate.mjs; i18n dir defaults to <root>/i18n so step out
    langDir: '../messages',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
  },
})
