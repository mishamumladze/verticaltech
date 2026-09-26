<template>
  <div class="flex gap-1 text-xs font-semibold">
    <button
      v-for="code in ['ka', 'en', 'ru']"
      :key="code"
      :class="[
        'rounded px-2 py-1 uppercase',
        locale === code ? 'bg-brand text-white' : 'bg-white/10 hover:bg-white/20',
      ]"
      @click="setLocale(code as 'ka' | 'en' | 'ru')"
    >
      {{ code }}
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>
