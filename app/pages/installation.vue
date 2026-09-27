<template>
  <div>
    <HeroSection
      :title="t('services.installation.title')"
      :subtitle="t('services.installation.subtitle')"
      image="/hero/installation.webp"
    >
      <a href="tel:+995595147878" class="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-brand px-7 py-3.5 text-lg font-semibold text-white hover:bg-brand-light">
        <Phone class="h-5 w-5" aria-hidden="true" />
        {{ t('common.callNow') }}
      </a>
      <NuxtLink :to="localePath('/contact')" class="inline-flex min-h-[44px] items-center px-2 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline">
        {{ t('common.contactUs') }}
      </NuxtLink>
    </HeroSection>

    <!-- Trust strip: compact 3-up, stays one row on mobile -->
    <section class="border-b border-ink/5 bg-white">
      <div class="mx-auto grid max-w-6xl grid-cols-3 gap-3 px-4 py-6 text-center sm:gap-4">
        <div>
          <StatCounter :value="100" suffix="+" compact />
          <p class="mt-1 text-xs text-ink/70 sm:text-sm">{{ t('home.stats.installed') }}</p>
        </div>
        <div>
          <StatCounter :value="14" compact />
          <p class="mt-1 text-xs text-ink/70 sm:text-sm">{{ t('home.stats.experience') }}</p>
        </div>
        <div>
          <p class="stat-numeral font-display text-4xl font-extrabold text-brand sm:text-5xl md:text-6xl">24/7</p>
          <p class="mt-1 text-xs text-ink/70 sm:text-sm">{{ t('services.service.features.247') }}</p>
        </div>
      </div>
    </section>

    <!-- Process: 4 included items as numbered steps -->
    <section class="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <p class="font-display text-xs font-bold uppercase tracking-widest text-brand">{{ t('services.installation.subtitle') }}</p>
      <h2 class="mt-2 max-w-xl text-2xl font-bold md:text-3xl">{{ t('services.installation.includedTitle') }}</h2>
      <p class="mt-3 max-w-2xl text-lg leading-relaxed text-ink/70">{{ t('services.installation.text') }}</p>
      <ol class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(key, i) in (['consulting', 'design', 'quality', 'custom'] as const)"
          :key="key"
          class="rounded-xl bg-white p-6 shadow-sm"
        >
          <component :is="stepIcons[i]" class="h-6 w-6 text-brand" aria-hidden="true" />
          <p class="stat-numeral mt-3 font-display text-sm font-extrabold text-ink/30">0{{ i + 1 }}</p>
          <p class="mt-1 font-semibold leading-snug">{{ t(`services.installation.included.${key}`) }}</p>
        </li>
      </ol>
    </section>

    <!-- Lift types: icon cards, snap-scroll on mobile, grid on desktop -->
    <section class="bg-white">
      <div class="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <p class="font-display text-xs font-bold uppercase tracking-widest text-brand">{{ t('services.title') }}</p>
        <h2 class="mt-2 max-w-xl text-2xl font-bold md:text-3xl">{{ t('services.installation.typesTitle') }}</h2>
        <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li
            v-for="item in typeCards"
            :key="item.key"
            class="grid min-h-[44px] items-start gap-3 rounded-xl bg-mist p-5"
          >
            <NuxtPicture :src="item.image" :alt="item.alt" format="avif,webp" sizes="100vw sm:50vw lg:33vw" :img-attrs="{ class: 'rounded', loading: 'lazy', decoding: 'async' }" />
            <div class="flex">
              <component :is="item.icon" class="mt-0.5 h-6 w-6 mr-4 shrink-0 text-brand" aria-hidden="true" />
              <span class="font-semibold leading-snug">{{ t(`services.installation.types.${item.key}`) }}</span>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- CTA band: no dead end -->
    <section class="bg-navy text-white">
      <div class="mx-auto max-w-6xl px-4 py-14 md:py-20">
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

    <!-- Sticky call bar: mobile only, thumb reach -->
    <div class="sticky bottom-0 z-40 border-t border-white/10 bg-navy/95 px-4 py-3 backdrop-blur md:hidden" style="padding-bottom: max(0.75rem, env(safe-area-inset-bottom))">
      <a href="tel:+995595147878" class="flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-brand font-semibold text-white">
        <Phone class="h-5 w-5" aria-hidden="true" />
        {{ t('common.callNow') }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Accessibility, Box, Eye, HeartPulse, KeyRound, Palette, Phone, Ruler, Sparkles, Users, UtensilsCrossed, Wrench } from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()

const stepIcons = [Ruler, Palette, Wrench, KeyRound]
const typeCards = [
  { key: 'passenger', icon: Users, image: "/pages/home/about.webp", alt: 'test'},
  { key: 'freight', icon: Box, image: "/pages/installation/freight.webp", alt: 'test'},
  { key: 'wheelchair', icon: Accessibility, image: "/pages/installation/wheelchair.webp", alt: 'test'},
  { key: 'kitchen', icon: UtensilsCrossed, image: "/pages/installation/kitchen.webp", alt: 'test'},
  { key: 'hospital', icon: HeartPulse, image: "/pages/installation/hospital.webp", alt: 'test'},
  { key: 'panoramic', icon: Eye, image: "/pages/installation/panoramic.webp", alt: 'test'},
  { key: 'special', icon: Sparkles, image: "/pages/installation/special.webp", alt: 'test'},
] as const
</script>
