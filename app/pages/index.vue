<template>
  <div>
    <HeroSection
      :title="t('home.heroTitle')"
      :subtitle="t('home.heroSubtitle')"
      :eyebrow="t('home.heroEyebrow')"
      :alt="t('home.heroImageAlt')"
      image="/hero/home.webp"
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

    <!-- Trust strip -->
    <section class="border-b border-ink/5 bg-white">
      <div class="mx-auto max-w-6xl px-4 py-6 text-center">
        <p class="text-xs font-semibold uppercase tracking-widest text-ink/50">
          {{ t("home.trustEyebrow") }}
        </p>
        <div
          class="flex space-x-16 animate-loop-scroll min-w-full shrink-0 h-40 items-center justify-around group-hover:[animation-play-state:paused]"
        >
          <NuxtPicture
            v-for="(logo, index) in logos"
            :key="`track1-${index}`"
            :src="logo.src"
            :alt="logo.alt"
            format="avif,webp"
            width="200"
            height="200"
            :img-attrs="{
              class: 'max-w-none transition-all duration-300 cursor-pointer',
              loading: 'lazy',
              decoding: 'async',
            }"
          />
        </div>
        <p class="mt-3 text-sm text-ink/70">{{ t("home.trustZones") }}</p>
      </div>
    </section>
    <!-- Stats on navy with shaft-line motif -->
    <section class="relative overflow-hiddend bg-navy text-white">
      <div
        class="relative mx-auto grid max-w-6xl grid-cols-3 gap-3 px-4 py-10 sm:gap-4 md:py-16"
      >
        <div class="rounded-xl bg-white/5 p-3 text-center sm:p-6">
          <StatCounter :value="100" suffix="+" dark compact />
          <p class="mt-1 text-xs text-white/80 sm:text-sm">
            {{ t("home.stats.installed") }}
          </p>
        </div>
        <div class="rounded-xl bg-white/5 p-3 text-center sm:p-6">
          <StatCounter :value="600" suffix="+" dark compact />
          <p class="mt-1 text-xs text-white/80 sm:text-sm">
            {{ t("home.stats.maintained") }}
          </p>
        </div>
        <div class="rounded-xl bg-white/5 p-3 text-center sm:p-6">
          <LazyStatCounter :value="14" dark compact />
          <p class="mt-1 text-xs text-white/80 sm:text-sm">
            {{ t("home.stats.experience") }}
          </p>
        </div>
      </div>
    </section>

    <!-- Services with images -->
    <section
      id="services"
      class="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:py-20"
    >
      <p
        class="font-display text-xs font-bold uppercase tracking-widest text-brand"
      >
        {{ t("nav.service") }}
      </p>
      <h2 class="mt-2 max-w-xl text-2xl font-bold md:text-3xl">
        {{ t("home.servicesTitle") }}
      </h2>
      <div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          :title="t('home.services.installation.title')"
          :desc="t('home.services.installation.desc')"
          :to="localePath('/installation')"
          image="/pages/home/installation.webp"
        />
        <ServiceCard
          :title="t('home.services.service.title')"
          :desc="t('home.services.service.desc')"
          :to="localePath('/service')"
          image="/pages/home/service.webp"
        />
        <ServiceCard
          :title="t('home.services.repair.title')"
          :desc="t('home.services.repair.desc')"
          :to="localePath('/repair')"
          image="/pages/home/repair.webp"
        />
        <ServiceCard
          :title="t('home.services.products.title')"
          :desc="t('home.services.products.desc')"
          :to="localePath('/products')"
          image="/pages/home/products.webp"
        />
      </div>
    </section>

    <!-- About teaser -->
    <section id="about" class="scroll-mt-20 bg-white">
      <div
        class="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-20"
      >
        <div class="relative">
          <div
            class="absolute -left-3 -top-3 h-full w-full rounded-xl bg-navy"
            aria-hidden="true"
          />
          <NuxtPicture
            src="/pages/home/about.webp"
            :alt="t('home.aboutImageAlt')"
            format="avif,webp"
            width="1090"
            height="720"
            sizes="100vw md:50vw"
            :img-attrs="{
              class: 'relative aspect-[4/3] w-full rounded-xl object-cover shadow-sm',
              loading: 'lazy',
              decoding: 'async',
            }"
          />
          <p
            class="absolute -bottom-4 left-6 rounded-lg bg-brand px-4 py-2 text-sm font-bold text-white shadow-md"
          >
            14 · {{ t("home.stats.experience") }}
          </p>
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-brand">
            {{ t("home.aboutEyebrow") }}
          </p>
          <h2 class="mt-2 text-2xl font-bold">
            {{ t("home.aboutTeaserTitle") }}
          </h2>
          <p class="mt-3 leading-relaxed text-ink/80">
            {{ t("home.aboutTeaserText") }}
          </p>
          <NuxtLink
            :to="localePath('/about')"
            class="mt-5 inline-block rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-light"
          >
            {{ t("common.learnMore") }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Products teaser -->
    <!-- <section id="products" class="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-16 md:py-20">
      <div class="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-brand">{{ t('home.productsEyebrow') }}</p>
          <h2 class="mt-2 text-2xl font-bold">{{ t('home.productsTeaserTitle') }}</h2>
          <p class="mt-2 max-w-xl text-ink/80">{{ t('home.productsTeaserText') }}</p>
        </div>
        <NuxtLink :to="localePath('/products')" class="rounded-lg border border-brand px-5 py-2.5 text-sm font-semibold text-brand hover:bg-brand hover:text-white">
          {{ t('nav.products') }}
        </NuxtLink>
      </div>
      <div class="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <img
          src="https://picsum.photos/seed/tractionMotor/800/500"
          :alt="t('products.teaserImageAlt')"
          class="col-span-2 aspect-[8/5] w-full rounded-xl object-cover shadow-sm"
          loading="lazy"
        />
        <img
          v-for="seed in ['controlPanel', 'doorOperator']"
          :key="seed"
          :src="`https://picsum.photos/seed/${seed}/600/400`"
          :alt="t('products.teaserImageAlt')"
          class="aspect-[3/2] w-full rounded-xl object-cover shadow-sm"
          loading="lazy"
        />
      </div>
    </section> -->

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
  </div>
</template>

<script setup lang="ts">
import { Phone } from "lucide-vue-next";
const { t } = useI18n();
const localePath = useLocalePath();

const logos = [
  { src: "/partners/arkel.webp", alt: "arkel" },
  { src: "/partners/bsn.webp", alt: "bsn" },
  { src: "/partners/fuji.webp", alt: "fuji" },
  { src: "/partners/kayatec.webp", alt: "kayatec" },
  { src: "/partners/kleeman.webp", alt: "kleeman" },
  { src: "/partners/mekisan.webp", alt: "mekisan" },
  { src: "/partners/omsan.webp", alt: "omsan" },
  { src: "/partners/srh.webp", alt: "srh" },
];
</script>
