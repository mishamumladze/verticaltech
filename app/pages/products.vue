<template>
  <div>
    <HeroSection
      :title="t('products.title')"
      :subtitle="t('products.subtitle')"
      image="/hero/products.webp"
    />
    <section class="mx-auto max-w-6xl px-4 py-12">
      <div class="sticky top-14 z-30 -mx-4 bg-mist/95 px-4 py-3 backdrop-blur">
        <div class="flex gap-2 overflow-x-auto" role="group" :aria-label="t('products.title')">
          <button
            v-for="c in cats"
            :key="c"
            type="button"
            :aria-pressed="active === c"
            class="min-h-[44px] shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition-colors"
            :class="active === c ? 'bg-brand text-white' : 'bg-white text-ink/70 shadow-sm hover:text-brand'"
            @click="active = c"
          >
            {{ c === 'all' ? t('products.filterAll') : t(`products.categories.${c}`) }}
          </button>
        </div>
      </div>
      <div class="mt-6 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        <NuxtLink
          v-for="item in filtered"
          :key="item.key"
          :to="{ path: localePath('/contact'), query: { part: item.key } }"
          class="block overflow-hidden rounded-xl bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:shadow-sm motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <div class="relative">
            <img
              :src="`https://picsum.photos/seed/${item.key}/600/400`"
              :alt="t(`products.items.${item.key}`)"
              class="aspect-[16/10] w-full object-cover"
              loading="lazy"
            />
            <span class="absolute left-3 top-3 rounded-md bg-brand px-2 py-1 text-xs font-semibold text-white">
              {{ t(`products.categories.${item.cat}`) }}
            </span>
          </div>
          <div class="p-6">
            <h3 class="text-lg font-bold text-brand">{{ t(`products.items.${item.key}`) }}</h3>
            <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
              {{ t('products.askAbout') }}
              <ArrowRight class="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </NuxtLink>
      </div>
      <p class="mt-8 text-center text-sm text-ink/70">{{ t('home.trustZones') }}</p>
    </section>

    <section class="bg-navy text-white">
      <div class="mx-auto max-w-6xl px-4 py-14">
        <h2 class="max-w-2xl text-2xl font-bold md:text-3xl">{{ t('home.ctaTitle') }}</h2>
        <p class="mt-3 max-w-2xl text-white/80">{{ t('home.ctaText') }}</p>
        <div class="mt-6 flex flex-wrap items-center gap-4">
          <a href="tel:+995595147878" class="inline-flex min-h-[48px] items-center rounded-lg bg-brand px-7 py-3.5 text-lg font-semibold text-white hover:bg-brand-light">
            +995 595 147 878
          </a>
          <NuxtLink :to="localePath('/contact')" class="inline-flex min-h-[44px] items-center rounded-lg bg-white/10 px-6 py-3 font-semibold hover:bg-white/20">
            {{ t('home.ctaButton') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
const { t } = useI18n()
const localePath = useLocalePath()
const items = [
  { key: 'tractionMotor', cat: 'motors' },
  { key: 'doorOperator', cat: 'doors' },
  { key: 'controlPanel', cat: 'electronics' },
  { key: 'guideRails', cat: 'mechanics' },
  { key: 'wireRopes', cat: 'cables' },
  { key: 'counterweight', cat: 'mechanics' },
  { key: 'cabinFan', cat: 'cabin' },
  { key: 'pushButtons', cat: 'electronics' },
  { key: 'inverter', cat: 'electronics' },
  { key: 'buffers', cat: 'mechanics' },
  { key: 'pulleys', cat: 'mechanics' },
  { key: 'brakes', cat: 'motors' },
]
const cats = ['all', 'motors', 'doors', 'electronics', 'mechanics', 'cables', 'cabin']
const active = ref('all')
const filtered = computed(() => active.value === 'all' ? items : items.filter(i => i.cat === active.value))
</script>
