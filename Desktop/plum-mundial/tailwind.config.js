/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          orange:  '#FF6B00',
          tangerine: '#FFB347',
          violet:  '#6B21A8',
          ciruela: '#4C1D95',
          light:   '#F3E8FF',
          dark:    '#1E0A3C',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        body:    ['var(--font-body)',    'system-ui'],
      },
      animation: {
        'float':      'float 4s ease-in-out infinite',
        'float-slow': 'float 7s ease-in-out infinite',
        'slide-up':   'slideUp 0.4s ease-out',
        'fade-in':    'fadeIn 0.5s ease-out',
        'pop':        'pop 0.3s cubic-bezier(0.68,-0.55,0.265,1.55)',
        'spin-slow':  'spin 8s linear infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'shimmer':    'shimmer 2s linear infinite',
        'score-in':   'scoreIn 0.4s cubic-bezier(0.34,1.56,0.64,1)',
      },
      keyframes: {
        float:      { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        slideUp:    { '0%': { transform: 'translateY(24px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        fadeIn:     { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        pop:        { '0%': { transform: 'scale(0.85)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
        pulseSoft:  { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.6' } },
        shimmer:    { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } },
        scoreIn:    { '0%': { transform: 'scale(0.5) rotate(-10deg)', opacity: '0' }, '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' } },
      },
      backgroundImage: {
        'plum-gradient':   'linear-gradient(135deg, #FF6B00 0%, #C2185B 50%, #6B21A8 100%)',
        'field-gradient':  'linear-gradient(180deg, #1a5c1a 0%, #2d8c2d 50%, #1a5c1a 100%)',
        'card-gradient':   'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
    },
  },
  plugins: [],
}
