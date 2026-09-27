<template>
  <footer class="bg-navy text-sm text-white/80">
    <div class="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
      <div>
        <p class="text-lg font-extrabold text-white">
          <img src="/logo.webp" alt="Vertical Technology logo" class="h-20" width="1813" height="558" loading="lazy" decoding="async">
        </p>
        <p class="mt-2">{{ t('footer.tagline') }}</p>
      </div>
      <div>
        <p class="font-semibold text-white">{{ t('footer.quickLinks') }}</p>
        <ul class="mt-2 space-y-1">
          <li v-for="link in links" :key="link.to">
            <NuxtLink :to="link.to" class="underline-offset-4 hover:text-brand-light hover:underline">{{ link.label }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <p class="font-semibold text-white">{{ t('footer.contacts') }}</p>
        <address class="mt-2 space-y-1 not-italic">
          <p><a href="tel:+995595147878" class="underline-offset-4 hover:text-brand-light hover:underline">+995 595 147 878</a></p>
          <p><a href="tel:0322121818" class="underline-offset-4 hover:text-brand-light hover:underline">0322 12 18 18</a></p>
          <p><a href="mailto:verticaltechnology2011@gmail.com" class="break-all underline-offset-4 hover:text-brand-light hover:underline">verticaltechnology2011@gmail.com</a></p>
        </address>
      </div>
    </div>
    <div class="border-t border-white/10 py-4 text-center text-xs">
      © {{ new Date().getFullYear() }} Vertical Technology. {{ t('footer.rights') }}
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()

const links = computed(() => [
  { to: localePath('/'), label: t('nav.home') },
  { to: localePath('/installation'), label: t('nav.installation') },
  { to: localePath('/service'), label: t('nav.service') },
  { to: localePath('/repair'), label: t('nav.repair') },
  { to: localePath('/products'), label: t('nav.products') },
  { to: localePath('/about'), label: t('nav.about') },
  { to: localePath('/contact'), label: t('nav.contact') },
])
</script>
