<template>
  <div>
    <HeroSection
      :title="t('about.title')"
      :subtitle="t('about.subtitle')"
      :eyebrow="t('home.heroEyebrow')"
      :alt="t('home.aboutImageAlt')"
      image="/hero/about.webp"
    >
      <a href="tel:+995595147878" class="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-brand px-7 py-3.5 text-lg font-semibold text-white hover:bg-brand-light">
        <Phone class="h-5 w-5" aria-hidden="true" />
        {{ t('common.callNow') }}
      </a>
      <NuxtLink :to="localePath('/contact')" class="inline-flex min-h-[44px] items-center px-2 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline">
        {{ t('common.contactUs') }}
      </NuxtLink>
    </HeroSection>

    <!-- Stats band (same proof as home) -->
    <section class="relative overflow-hidden bg-navy text-white">
      <div class="relative mx-auto grid max-w-6xl grid-cols-3 gap-3 px-4 py-10 sm:gap-4 md:py-16">
        <div class="rounded-xl bg-white/5 p-3 text-center sm:p-6">
          <StatCounter :value="100" suffix="+" dark compact />
          <p class="mt-1 text-xs text-white/80 sm:text-sm">{{ t('home.stats.installed') }}</p>
        </div>
        <div class="rounded-xl bg-white/5 p-3 text-center sm:p-6">
          <StatCounter :value="600" suffix="+" dark compact />
          <p class="mt-1 text-xs text-white/80 sm:text-sm">{{ t('home.stats.maintained') }}</p>
        </div>
        <div class="rounded-xl bg-white/5 p-3 text-center sm:p-6">
          <StatCounter :value="14" dark compact />
          <p class="mt-1 text-xs text-white/80 sm:text-sm">{{ t('home.stats.experience') }}</p>
        </div>
      </div>
    </section>

    <!-- History: image + text -->
    <section class="bg-white">
      <div class="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-20">
        <div class="relative">
          <div class="absolute -left-3 -top-3 h-full w-full rounded-xl bg-navy" aria-hidden="true" />
          <img
            src="/pages/about/main.webp"
            :alt="t('home.aboutImageAlt')"
            class="relative aspect-[4/3] w-full rounded-xl object-cover shadow-sm"
            loading="lazy"
          />
          <p class="absolute -bottom-4 left-6 rounded-lg bg-brand px-4 py-2 text-sm font-bold text-white shadow-md">
            14 · {{ t('home.stats.experience') }}
          </p>
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-brand">{{ t('nav.about') }}</p>
          <h2 class="mt-2 text-2xl font-bold md:text-3xl">{{ t('about.historyTitle') }}</h2>
          <p class="mt-3 max-w-3xl leading-relaxed text-ink/80">{{ t('about.historyText') }}</p>
        </div>
      </div>
    </section>

    <!-- Values: icon cards -->
    <section class="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <p class="text-xs font-semibold uppercase tracking-widest text-brand">{{ t('home.heroEyebrow') }}</p>
      <h2 class="mt-2 text-2xl font-bold md:text-3xl">{{ t('about.valuesTitle') }}</h2>
      <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div class="h-full rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <ShieldCheck class="h-6 w-6 text-brand" aria-hidden="true" />
          <h3 class="mt-3 text-lg font-bold text-brand">{{ t('about.values.safety.title') }}</h3>
          <p class="mt-2 text-sm text-ink/80">{{ t('about.values.safety.text') }}</p>
        </div>
        <div class="h-full rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <Clock class="h-6 w-6 text-brand" aria-hidden="true" />
          <h3 class="mt-3 text-lg font-bold text-brand">{{ t('about.values.availability.title') }}</h3>
          <p class="mt-2 text-sm text-ink/80">{{ t('about.values.availability.text') }}</p>
        </div>
        <div class="h-full rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:col-span-2 lg:col-span-1">
          <Users class="h-6 w-6 text-brand" aria-hidden="true" />
          <h3 class="mt-3 text-lg font-bold text-brand">{{ t('about.values.team.title') }}</h3>
          <p class="mt-2 text-sm text-ink/80">{{ t('about.values.team.text') }}</p>
        </div>
      </div>
    </section>

    <!-- Partners: wordmark grid -->
    <section class="bg-white">
      <div class="mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
        <p class="text-xs font-semibold uppercase tracking-widest text-brand">{{ t('home.trustEyebrow') }}</p>
        <h2 class="mt-2 text-2xl font-bold md:text-3xl">{{ t('about.partnersTitle') }}</h2>
        <p class="mx-auto mt-3 max-w-xl text-ink/80">{{ t('about.partnersText') }}</p>
        <p class="mx-auto mt-6 grid max-w-3xl grid-cols-2 gap-x-5 gap-y-3 text-lg font-extrabold text-navy/70 sm:grid-cols-3 lg:grid-cols-6">
          <span>Kayatec</span><span>Kleemann</span><span>SRH</span><span>Fuji</span><span>Montanari</span><span>Wittur</span>
        </p>
      </div>
    </section>

    <!-- Zones: list + contact card -->
    <section class="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <div class="grid gap-8 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 class="text-2xl font-bold md:text-3xl">{{ t('about.zonesTitle') }}</h2>
          <p class="mt-3 max-w-2xl leading-relaxed text-ink/80">{{ t('about.values.availability.text') }}</p>
          <ul class="mt-6 flex flex-wrap gap-2">
            <li
              v-for="city in ['Tbilisi', 'Gori', 'Mtskheta', 'Kutaisi', 'Batumi', 'Gonio', 'Zugdidi']"
              :key="city"
              class="inline-flex min-h-[36px] items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-sm text-white"
            >
              <MapPin class="h-4 w-4 text-brand-light" aria-hidden="true" />
              {{ city }}
            </li>
          </ul>
        </div>
        <aside class="h-fit rounded-xl bg-white p-6 shadow-sm lg:sticky lg:top-20">
          <p class="text-xs font-semibold uppercase tracking-widest text-ink/50">{{ t('common.phone') }}</p>
          <a href="tel:+995595147878" class="mt-2 block text-xl font-extrabold text-navy hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light">
            +995 595 147 878
          </a>
          <NuxtLink :to="localePath('/contact')" class="mt-4 inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-light">
            {{ t('common.getInTouch') }}
          </NuxtLink>
        </aside>
      </div>
    </section>

    <!-- Closing CTA -->
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
  </div>
</template>

<script setup lang="ts">
import { Clock, MapPin, Phone, ShieldCheck, Users } from 'lucide-vue-next'
const { t } = useI18n()
const localePath = useLocalePath()
</script>
