<template>
  <div class="flex min-h-screen flex-col bg-mist font-sans text-ink">
    <Header />
    <main class="flex-1 pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <NuxtPage />
    </main>
    <Footer />
    <nav class="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden" :aria-label="t('common.callNow')">
      <div class="grid grid-cols-2">
        <a href="tel:+995595147878" class="flex min-h-[56px] items-center justify-center gap-2 text-sm font-semibold text-white active:bg-white/10">
          <Phone class="h-5 w-5 text-brand-light" aria-hidden="true" />
          {{ t('common.callNow') }}
        </a>
        <NuxtLink :to="localePath('/contact')" class="flex min-h-[56px] items-center justify-center text-sm font-semibold text-white active:bg-white/10">
          {{ t('common.contactUs') }}
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Phone } from 'lucide-vue-next'
const { locale, t } = useI18n()
const localePath = useLocalePath()

useHead(() => ({
  htmlAttrs: { lang: locale.value },
  title: t('site.title'),
  meta: [
    { name: 'description', content: t('site.description') },
    { property: 'og:title', content: t('site.title') },
    { property: 'og:description', content: t('site.description') },
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@700;800&family=Inter:wght@400;500;600;700;800&family=Noto+Sans+Georgian:wght@400;500;600;700;800&display=swap',
    },
  ],
}))
</script>
