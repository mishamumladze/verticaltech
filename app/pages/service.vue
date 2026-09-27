<template>
  <div>
    <HeroSection
      :title="t('services.service.title')"
      :subtitle="t('services.service.subtitle')"
      image="/hero/service.webp"
    >
      <a
        href="tel:+995595147878"
        class="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-brand px-7 py-3.5 text-lg font-semibold text-white hover:bg-brand-light"
      >
        <Phone class="h-5 w-5" aria-hidden="true" />
        {{ t("common.callNow") }}
      </a>
      <NuxtLink
        :to="localePath('/contact')"
        class="inline-flex min-h-[44px] items-center px-2 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
      >
        {{ t("common.contactUs") }}
      </NuxtLink>
    </HeroSection>

    <!-- Trust strip: compact 3-up, stays one row on mobile -->
    <section class="border-b border-ink/5 bg-white">
      <div
        class="mx-auto grid max-w-6xl grid-cols-3 gap-3 px-4 py-6 text-center sm:gap-4"
      >
        <div>
          <StatCounter :value="600" suffix="+" compact />
          <p class="mt-1 text-xs text-ink/70 sm:text-sm">
            {{ t("home.stats.maintained") }}
          </p>
        </div>
        <div>
          <p
            class="stat-numeral font-display text-4xl font-extrabold text-brand sm:text-5xl md:text-6xl"
          >
            24/7
          </p>
          <p class="mt-1 text-xs text-ink/70 sm:text-sm">
            {{ t("services.service.features.247") }}
          </p>
        </div>
        <div>
          <StatCounter :value="7" compact />
          <p class="mt-1 text-xs text-ink/70 sm:text-sm">
            {{ t("about.zonesTitle") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Features: 4 benefit cards with icons -->
    <section class="flex mx-auto max-w-6xl px-4 pt-16 md:pt-20 gap-4">
      <div class="max-w-[50%]">
        <NuxtPicture src="/hero/installation.webp" alt="test" format="avif,webp" width="2560" height="1920" sizes="100vw md:50vw" :img-attrs="{ loading: 'lazy', decoding: 'async' }" />
      </div>
      <div class="max-w-[50%]">
        <p
          class="font-display text-xs font-bold uppercase tracking-widest text-brand"
        >
          {{ t("services.service.subtitle") }}
        </p>
        <h2 class="mt-2 max-w-xl text-2xl font-bold md:text-3xl">
          {{ t("services.service.title") }}
        </h2>
        <p class="mt-3 max-w-2xl text-lg leading-relaxed text-ink/70">
          {{ t("services.service.text") }}
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 pb-16 md:pb-20">
      <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="item in featureCards"
          :key="item.key"
          class="rounded-xl bg-white p-6 shadow-sm"
        >
          <component
            :is="item.icon"
            class="h-6 w-6 text-brand"
            aria-hidden="true"
          />
          <p class="mt-3 font-semibold leading-snug">
            {{ t(`services.service.features.${item.key}`) }}
          </p>
        </li>
      </ul>
    </section>
    <!-- Emergency band: panic → call -->
    <section class="bg-navy text-white">
      <div
        class="mx-auto grid max-w-6xl items-center gap-6 px-4 py-14 md:grid-cols-2 md:py-20"
      >
        <div>
          <p
            class="font-display text-xs font-bold uppercase tracking-widest text-brand-light"
          >
            {{ t("services.service.features.emergency") }}
          </p>
          <h2 class="mt-2 text-2xl font-bold md:text-3xl">
            {{ t("home.ctaTitle") }}
          </h2>
          <p class="mt-3 text-white/80">{{ t("home.ctaText") }}</p>
        </div>
        <div class="flex flex-wrap items-center gap-4 md:justify-end">
          <a
            href="tel:+995595147878"
            class="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-brand px-7 py-3.5 text-lg font-semibold text-white hover:bg-brand-light"
          >
            <Phone class="h-5 w-5" aria-hidden="true" />
            +995 595 147 878
          </a>
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex min-h-[44px] items-center rounded-lg bg-white/10 px-6 py-3 font-semibold hover:bg-white/20"
          >
            {{ t("home.ctaButton") }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Zones: prove the zone-based claim -->
    <section class="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <p
        class="font-display text-xs font-bold uppercase tracking-widest text-brand"
      >
        {{ t("services.service.features.zones") }}
      </p>
      <h2 class="mt-2 max-w-xl text-2xl font-bold md:text-3xl">
        {{ t("about.zonesTitle") }}
      </h2>
      <ul class="mt-6 flex flex-wrap gap-2">
        <li
          v-for="city in [
            'Tbilisi',
            'Gori',
            'Mtskheta',
            'Kutaisi',
            'Batumi',
            'Gonio',
            'Zugdidi',
          ]"
          :key="city"
          class="inline-flex min-h-[44px] items-center gap-1.5 rounded-full bg-navy px-4 py-2.5 text-sm text-white"
        >
          <MapPin class="h-4 w-4 text-brand-light" aria-hidden="true" />
          {{ city }}
        </li>
      </ul>
    </section>

    <!-- Sticky call bar: mobile only, thumb reach -->
    <div
      class="sticky bottom-0 z-40 border-t border-white/10 bg-navy/95 px-4 py-3 backdrop-blur md:hidden"
      style="padding-bottom: max(0.75rem, env(safe-area-inset-bottom))"
    >
      <a
        href="tel:+995595147878"
        class="flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-brand font-semibold text-white"
      >
        <Phone class="h-5 w-5" aria-hidden="true" />
        {{ t("common.callNow") }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Clock, MapPin, Package, Phone, Siren } from "lucide-vue-next";

const { t } = useI18n();
const localePath = useLocalePath();

const featureCards = [
  { key: "247", icon: Clock },
  { key: "zones", icon: MapPin },
  { key: "parts", icon: Package },
  { key: "emergency", icon: Siren },
] as const;
</script>
