/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'BMprimary': 'var(--BM-primary)',
        'BMprimary100': 'var(--BM-primary-100)',
        'BMblack': 'var(--BM-black)',
        'BMsecondary': 'var(--BM-secondary)',
        'BMtertiary': 'var(--BM-tertiary)',
        'BMwarning': 'var(--BM-warning)',
        'BMwhite': 'var(--BM-white)',
        'BMgray500': 'var(--BM-gray500)',
        'BMgray400': 'var(--BM-gray400)',
        'BMgray200': 'var(--BM-gray200)',
        'BMline': 'var(--BM-line)',
        'BMrealblack': 'var(--BM-realblack)',
      },
      fontFamily: {
        'hanna' : ['BMHANNAPro'],
        'Pretendard': ['Pretendard'],
      },
      screens:{
        '3xl' : '1920px',
      },
      container: {
        padding: '2rem',
      },
    },    
  },
  plugins: [],
}
