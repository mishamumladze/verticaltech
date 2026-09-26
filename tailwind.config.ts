import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#2B7A8A', light: '#4FA5B8' },
        ink: '#1A1A1A',
        mist: '#F5F5F5',
        navy: '#0D1B2A',
      },
      animation: {
        'loop-scroll': 'loop-scroll 35s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Georgian', 'system-ui', 'sans-serif'],
        display: ['Archivo', 'Noto Sans Georgian', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
}
