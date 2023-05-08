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
        'BMblack': 'var(--BM-black)',
        'BMsecondary': 'var(--BM-secondary)',
        'BMtertiary': 'var(--BM-tertiary)',
        'BMwarning': 'var(--BM-warning)',
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
