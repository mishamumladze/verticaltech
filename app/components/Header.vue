<template>
  <header class="sticky top-0 z-50 bg-navy text-white shadow">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <NuxtLink :to="localePath('/')" class="text-lg font-extrabold tracking-tight">
        <span class="text-brand-light">Vertical</span> Technology
      </NuxtLink>

      <button
        class="rounded p-2 hover:bg-white/10 md:hidden"
        :aria-label="open ? 'Close menu' : 'Open menu'"
        :aria-expanded="open"
        @click="open = !open"
      >
        <Menu v-if="!open" class="h-6 w-6" aria-hidden="true" />
        <X v-else class="h-6 w-6" aria-hidden="true" />
      </button>

      <ul class="hidden items-center gap-5 text-sm font-medium md:flex">
        <li v-for="link in links" :key="link.to">
          <NuxtLink :to="link.to" class="underline-offset-4 hover:text-brand-light hover:underline" active-class="text-brand-light">
            {{ link.label }}
          </NuxtLink>
        </li>
        <li>
          <LangSwitcher />
        </li>
      </ul>
    </nav>

    <Transition name="menu-expand">
      <div v-if="open" class="grid md:hidden">
        <ul class="space-y-1 overflow-hidden border-t border-white/10 px-4 py-3 text-sm font-medium">
      <li v-for="link in links" :key="link.to">
        <NuxtLink
          :to="link.to"
          class="block rounded px-2 py-2 hover:bg-white/10"
          active-class="text-brand-light"
          @click="open = false"
        >
          {{ link.label }}
        </NuxtLink>
      </li>
      <li class="px-2 py-2">
        <LangSwitcher />
      </li>
      </ul>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
const { t, locale } = useI18n()
const localePath = useLocalePath()
const open = ref(false)

// Recompute labels on locale switch
const links = computed(() => [
  { to: localePath('/'), label: t('nav.home') },
  { to: localePath('/installation'), label: t('nav.installation') },
  { to: localePath('/service'), label: t('nav.service') },
  { to: localePath('/repair'), label: t('nav.repair') },
  { to: localePath('/products'), label: t('nav.products') },
  { to: localePath('/about'), label: t('nav.about') },
  { to: localePath('/contact'), label: t('nav.contact') },
])

// Close mobile menu when switching locale
watch(locale, () => { open.value = false })
</script>
