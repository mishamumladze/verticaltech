<template>
  <div>
    <h3 class="text-xl font-bold">{{ t('contact.form.heading') }}</h3>
    <p class="mt-1 text-sm text-ink/70">{{ t('contact.form.subheading') }}</p>
    <form class="mt-5 space-y-4" novalidate @submit.prevent="submit">
      <div>
        <label class="mb-1 block text-sm font-medium" for="name">{{ t('contact.form.name') }}</label>
        <input
          id="name" v-model="form.name" type="text" autocomplete="name"
          class="min-h-[44px] w-full rounded-lg border px-4 py-3 focus:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
          :class="{ 'border-red-500': errors.name }"
          :aria-invalid="!!errors.name || undefined"
          :aria-describedby="errors.name ? 'name-error' : undefined"
        />
        <p v-if="errors.name" id="name-error" role="alert" class="mt-1 text-xs text-red-600">{{ errors.name }}</p>
      </div>
      <div class="grid gap-4 md:grid-cols-2">
        <div>
          <label class="mb-1 block text-sm font-medium" for="email">{{ t('contact.form.email') }}</label>
          <input
            id="email" v-model="form.email" type="email" autocomplete="email"
            class="min-h-[44px] w-full rounded-lg border px-4 py-3 focus:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
            :class="{ 'border-red-500': errors.email }"
            :aria-invalid="!!errors.email || undefined"
            :aria-describedby="errors.email ? 'email-error' : undefined"
          />
          <p v-if="errors.email" id="email-error" role="alert" class="mt-1 text-xs text-red-600">{{ errors.email }}</p>
        </div>
        <div>
          <label class="mb-1 block text-sm font-medium" for="phone">{{ t('contact.form.phone') }}</label>
          <input
            id="phone" v-model="form.phone" type="tel" autocomplete="tel" inputmode="tel"
            class="min-h-[44px] w-full rounded-lg border px-4 py-3 focus:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
            :class="{ 'border-red-500': errors.phone }"
            :aria-invalid="!!errors.phone || undefined"
            :aria-describedby="errors.phone ? 'phone-error' : undefined"
          />
          <p v-if="errors.phone" id="phone-error" role="alert" class="mt-1 text-xs text-red-600">{{ errors.phone }}</p>
        </div>
      </div>
      <div>
        <label class="mb-1 block text-sm font-medium" for="topic">{{ t('contact.form.topic') }}</label>
        <select
          id="topic" v-model="form.topic"
          class="min-h-[44px] w-full rounded-lg border bg-white px-4 py-3 focus:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
        >
          <option value="" disabled>{{ t('contact.form.topicPlaceholder') }}</option>
          <option v-for="key in topics" :key="key" :value="key">{{ t(`contact.form.topics.${key}`) }}</option>
        </select>
      </div>
      <div>
        <label class="mb-1 block text-sm font-medium" for="message">{{ t('contact.form.message') }}</label>
        <textarea
          id="message" v-model="form.message" rows="5"
          class="w-full rounded-lg border px-4 py-3 focus:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light"
          :class="{ 'border-red-500': errors.message }"
          :aria-invalid="!!errors.message || undefined"
          :aria-describedby="errors.message ? 'message-error' : undefined"
        />
        <p v-if="errors.message" id="message-error" role="alert" class="mt-1 text-xs text-red-600">{{ errors.message }}</p>
      </div>
      <button type="submit" class="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-brand px-6 py-3 font-semibold text-white transition-colors duration-150 hover:bg-brand-light active:scale-[0.98] sm:w-auto">
        {{ t('contact.form.submit') }}
      </button>
      <p class="text-xs text-ink/70">{{ t('contact.form.hint') }}</p>
      <p v-if="sent" role="status" class="fade-in rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
        {{ t('contact.form.success') }}
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const topics = ['installation', 'service', 'repair', 'parts', 'other'] as const
const form = reactive({ name: '', email: '', phone: '', topic: '', message: '' })
const errors = reactive<Record<string, string>>({})
const sent = ref(false)

function submit() {
  Object.keys(errors).forEach(k => delete errors[k])
  if (!form.name.trim()) errors.name = t('contact.form.errors.required')
  if (!form.email.trim()) errors.email = t('contact.form.errors.required')
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = t('contact.form.errors.email')
  if (!form.phone.trim()) errors.phone = t('contact.form.errors.required')
  // ponytail: accepts intl formats loosely; add libphonenumber when real backend lands
  else if (!/^[+\d][\d\s\-()]{5,}$/.test(form.phone)) errors.phone = t('contact.form.errors.phone')
  if (!form.message.trim()) errors.message = t('contact.form.errors.required')
  if (Object.keys(errors).length) return

  // Frontend-only (option A): hand off to the visitor's mail app
  const topicLabel = form.topic ? t(`contact.form.topics.${form.topic}`) : ''
  const subject = encodeURIComponent(`Website inquiry from ${form.name}${topicLabel ? ` — ${topicLabel}` : ''}`)
  const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}\n${form.phone}`)
  window.location.href = `mailto:verticaltechnology2011@gmail.com?subject=${subject}&body=${body}`
  sent.value = true
}
</script>
