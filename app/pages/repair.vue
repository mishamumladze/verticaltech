<template>
  <div>
    <HeroSection
      :title="t('services.repair.title')"
      :subtitle="t('services.repair.subtitle')"
      image="/hero/repair.webp"
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
          <StatCounter :value="14" compact />
          <p class="mt-1 text-xs text-ink/70 sm:text-sm">
            {{ t("home.stats.experience") }}
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
      </div>
    </section>

    <!-- Repair items: icon cards, modernization + inspection prominent -->
    <section class="md:flex mx-auto max-w-6xl px-4 pt-16 md:pt-20 gap-4">
      <div class="md:max-w-[50%] mb-4 md:mb-0">
        <img src="/pages/repair/main.webp" alt="test" class="rounded" />
      </div>
      <div class="md:max-w-[50%]">
        <p
          class="text-left font-display text-xs font-bold uppercase tracking-widest text-brand"
        >
          {{ t("services.repair.subtitle") }}
        </p>
        <h2 class="text-left mt-2 max-w-xl text-2xl font-bold md:text-3xl">
          {{ t("services.repair.includedTitle") }}
        </h2>
        <p class="text-left mt-3 max-w-2xl text-lg leading-relaxed text-ink/70">
          {{ t("services.repair.text") }}
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 pb-16 md:pb-20">
      <ul class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="item in repairCards"
          :key="item.key"
          :class="[
            'rounded-xl bg-white p-6 shadow-sm',
            item.wide ? 'col-span-2' : '',
          ]"
        >
          <component
            :is="item.icon"
            class="h-6 w-6 text-brand"
            aria-hidden="true"
          />
          <p class="mt-3 font-semibold leading-snug">
            {{ t(`services.repair.items.${item.key}`) }}
          </p>
        </li>
      </ul>
    </section>
    <!-- Modernization spotlight: highest-value path -->
    <section class="bg-white">
      <div
        class="mx-auto grid max-w-6xl items-center gap-6 px-4 py-16 md:grid-cols-2 md:py-20"
      >
        <div>
          <p
            class="font-display text-xs font-bold uppercase tracking-widest text-brand"
          >
            {{ t("services.repair.includedTitle") }}
          </p>
          <h2 class="mt-2 text-2xl font-bold md:text-3xl">
            {{ t("services.repair.items.modernization") }}
          </h2>
          <p class="mt-3 leading-relaxed text-ink/70">
            {{ t("services.repair.text") }}
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-4 md:justify-end">
          <a
            href="tel:+995595147878"
            class="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-brand px-7 py-3.5 text-lg font-semibold text-white hover:bg-brand-light"
          >
            <Phone class="h-5 w-5" aria-hidden="true" />
            {{ t("common.callNow") }}
          </a>
          <NuxtLink
            :to="localePath('/contact')"
            class="inline-flex min-h-[44px] items-center rounded-lg border border-brand px-6 py-3 font-semibold text-brand hover:bg-brand hover:text-white"
          >
            {{ t("common.getInTouch") }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Emergency band: panic → call -->
    <section class="bg-navy text-white">
      <div class="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 class="max-w-2xl text-2xl font-bold md:text-3xl">
          {{ t("home.ctaTitle") }}
        </h2>
        <p class="mt-3 max-w-2xl text-white/80">{{ t("home.ctaText") }}</p>
        <div class="mt-6 flex flex-wrap items-center gap-4">
          <a
            href="tel:+995595147878"
            class="inline-flex min-h-[48px] items-center rounded-lg bg-brand px-7 py-3.5 text-lg font-semibold text-white hover:bg-brand-light"
          >
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
import {
  Armchair,
  Cable,
  ClipboardCheck,
  Cog,
  DoorOpen,
  MoveVertical,
  Phone,
  Sparkles,
  Weight,
} from "lucide-vue-next";

const { t } = useI18n();
const localePath = useLocalePath();

const repairCards = [
  { key: "inspection", icon: ClipboardCheck, wide: true },
  { key: "counterweight", icon: Weight, wide: true },
  { key: "modernization", icon: Sparkles, wide: false },
  { key: "cabin", icon: Armchair, wide: false },
  { key: "cable", icon: Cable, wide: false },
  { key: "guides", icon: MoveVertical, wide: false },
  { key: "doors", icon: DoorOpen, wide: false },
  { key: "motor", icon: Cog, wide: false },
] as const;
</script>
