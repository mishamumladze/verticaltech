<template>
  <section class="relative overflow-hidden bg-navy text-white">
    <NuxtPicture
      :src="image"
      :alt="alt || title"
      format="avif,webp"
      sizes="100vw"
      :img-attrs="{
        class: 'hero-img absolute inset-0 h-full w-full object-cover',
        loading: 'eager',
        fetchpriority: 'high',
        decoding: 'async',
      }"
    />
    <div class="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
      <p v-if="eyebrow" class="lift-in font-display text-xs font-bold uppercase tracking-widest text-brand-light">{{ eyebrow }}</p>
      <h1 class="lift-in max-w-2xl font-display text-[1.7rem] font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">{{ title }}</h1>
      <p class="lift-in lift-in-1 mt-4 max-w-xl text-[0.95rem] leading-relaxed text-white/80 sm:text-lg">{{ subtitle }}</p>
      <div v-if="$slots.default" class="lift-in lift-in-2 mt-8 flex flex-wrap items-center gap-3">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ title: string; subtitle?: string; image?: string; eyebrow?: string; alt?: string }>()
</script>
