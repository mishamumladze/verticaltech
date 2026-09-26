<template>
  <p ref="el" :class="numeralClass">{{ display }}{{ suffix }}</p>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{ value: number; suffix?: string; dark?: boolean; compact?: boolean }>(),
  { suffix: '', dark: false, compact: false },
)
const numeralClass = computed(() => {
  const size = props.compact ? 'text-4xl sm:text-5xl md:text-6xl' : 'text-5xl md:text-6xl'
  const color = props.dark ? 'text-white' : 'text-brand'
  return `stat-numeral font-display ${size} font-extrabold ${color}`
})

// SSR renders the final value (SEO/no-JS); client counts up on first visibility.
const display = ref(props.value)
const el = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!el.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  display.value = 0
  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return
    io.disconnect()
    const t0 = performance.now()
    const dur = 1200
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1)
      display.value = Math.round(props.value * (1 - Math.pow(1 - p, 3)))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, { threshold: 0.5 })
  io.observe(el.value)
  onUnmounted(() => io.disconnect())
})
</script>
