<template>
  <NuxtLink
    :to="to"
    class="block overflow-hidden rounded-xl bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:shadow-sm motion-reduce:transition-none motion-reduce:hover:translate-y-0"
  >
    <NuxtPicture
      v-if="image"
      :src="image"
      :alt="title"
      format="avif,webp"
      sizes="100vw sm:50vw lg:25vw"
      :img-attrs="{
        class: 'aspect-[16/9] w-full object-cover',
        loading: 'lazy',
        decoding: 'async',
      }"
    />
    <div class="p-6">
      <h3 class="text-lg font-bold text-brand">{{ title }}</h3>
      <p class="mt-2 text-sm text-ink/70">{{ desc }}</p>
      <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
        {{ t('common.learnMore') }}
        <ArrowRight class="h-4 w-4" aria-hidden="true" />
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
const { t } = useI18n()
defineProps<{ title: string; desc: string; to: string; image?: string }>()
</script>
