<template>
  <div>
    <HeroSection
      :eyebrow="t('contact.eyebrow')"
      :title="t('contact.title')"
      :subtitle="t('contact.subtitle')"
      image="/hero/contact.webp"
    >
      <a href="tel:+995595147878" class="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-brand px-7 py-3.5 text-lg font-semibold text-white hover:bg-brand-light">
        <Phone class="h-5 w-5" aria-hidden="true" />
        {{ t('contact.heroCta.call') }}
      </a>
      <a :href="directionsUrl" target="_blank" rel="noopener" class="inline-flex min-h-[44px] items-center rounded-lg bg-white/10 px-6 py-3 font-semibold hover:bg-white/20">
        {{ t('contact.heroCta.directions') }}
      </a>
    </HeroSection>

    <section class="mx-auto grid max-w-6xl gap-6 px-4 py-12 md:py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
      <div>
        <p class="font-display text-xs font-bold uppercase tracking-widest text-brand">{{ t('contact.infoEyebrow') }}</p>
        <h2 class="mt-2 text-2xl font-bold md:text-3xl">{{ t('contact.infoTitle') }}</h2>
        <ul class="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <li class="rounded-xl bg-white p-5 shadow-sm">
            <p class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand">
              <Phone class="h-4 w-4" aria-hidden="true" />
              {{ t('contact.cards.emergencyLabel') }}
            </p>
            <a href="tel:+995595147878" class="mt-2 flex min-h-[48px] items-center text-lg font-bold hover:text-brand">+995 595 147 878</a>
            <p class="mt-1 text-sm text-ink/70">
              {{ t('contact.cards.officeLabel') }}:
              <a href="tel:0322121818" class="inline-flex min-h-[44px] items-center font-semibold underline-offset-4 hover:text-brand hover:underline">0322 12 18 18</a>
            </p>
          </li>
          <li class="rounded-xl bg-white p-5 shadow-sm">
            <p class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand">
              <Mail class="h-4 w-4" aria-hidden="true" />
              {{ t('contact.cards.emailLabel') }}
            </p>
            <a :href="`mailto:${email}`" class="mt-2 flex min-h-[48px] items-center break-all text-sm font-semibold underline-offset-4 hover:text-brand hover:underline">{{ email }}</a>
            <button type="button" class="mt-1 inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-brand underline-offset-4 hover:underline" @click="copyEmail">
              <Check v-if="copied" class="h-4 w-4" aria-hidden="true" />
              <Copy v-else class="h-4 w-4" aria-hidden="true" />
              {{ copied ? t('contact.cards.copied') : t('contact.cards.copy') }}
            </button>
            <span role="status" class="sr-only">{{ copied ? t('contact.cards.copied') : '' }}</span>
          </li>
          <li class="rounded-xl bg-white p-5 shadow-sm">
            <p class="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand">
              <MapPin class="h-4 w-4" aria-hidden="true" />
              {{ t('contact.cards.addressLabel') }}
            </p>
            <p class="mt-2 text-sm leading-relaxed">{{ t('contact.address') }}</p>
            <a :href="directionsUrl" target="_blank" rel="noopener" class="mt-1 inline-flex min-h-[44px] items-center text-sm font-semibold text-brand underline-offset-4 hover:underline">
              {{ t('contact.cards.directions') }}
            </a>
          </li>
        </ul>
      </div>
      <div class="self-start rounded-xl bg-white p-6 shadow-sm md:p-8 lg:sticky lg:top-24">
        <ContactForm />
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
      <div class="overflow-hidden rounded-xl bg-white shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-2 px-5 py-4">
          <h2 class="font-bold">{{ t('contact.mapTitle') }}</h2>
          <a :href="directionsUrl" target="_blank" rel="noopener" class="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-brand underline-offset-4 hover:underline">
            <ExternalLink class="h-4 w-4" aria-hidden="true" />
            {{ t('contact.mapAction') }}
          </a>
        </div>
        <iframe
          title="Vertical Technology location map"
          src="https://www.google.com/maps?q=Hualing+Tbilisi+Plaza+Tbilisi&output=embed"
          class="h-64 w-full border-0 md:h-80"
          loading="lazy"
        />
      </div>
      <p class="mt-6 text-center text-sm text-ink/70">{{ t('contact.trustLine') }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Check, Copy, ExternalLink, Mail, MapPin, Phone } from 'lucide-vue-next'

const { t } = useI18n()

const email = 'verticaltechnology2011@gmail.com'
const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Hualing+Tbilisi+Plaza+Tbilisi'
const copied = ref(false)
let timer: ReturnType<typeof setTimeout> | undefined

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(email)
  } catch {
    // ponytail: clipboard API needs secure context; fall back to selection hack
    const ta = document.createElement('textarea')
    ta.value = email
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    ta.remove()
  }
  copied.value = true
  clearTimeout(timer)
  timer = setTimeout(() => { copied.value = false }, 2000)
}
</script>
