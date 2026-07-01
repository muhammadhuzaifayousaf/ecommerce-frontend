/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1677FF',
        'primary-dark': '#0958D9',
        'primary-light': '#E6F0FF',
        success: '#00B517',
        danger: '#FF4747',
        warning: '#FA8900',
        'text-primary': '#1C1C1C',
        'text-secondary': '#606060',
        'text-muted': '#8B8B8B',
        'border-col': '#E3E3E3',
        'bg-light': '#F7F7F7',
        'bg-card': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 4px rgba(0,0,0,0.08)',
        'card-hover': '0 4px 16px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
