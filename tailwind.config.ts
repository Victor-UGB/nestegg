import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '128': '32rem',
        '132': '38rem',
        '90vh': '90vh',
        '85vh': '85vh',
        '100dvh': '100dvh'
      },
      width: {
        '128': '32rem',
        '132': '38rem',
        '90vw': '90vw',
        '85vw': '85vw',
        '75vw': '75vw',
        '70vw': '70vw'
      },
      animation:{
        'bounce-short': 'bounce 1s ease-in-out 1',
        'fade-out': 'fadeOut 1s ease-in-out 1',
        'step-down': 'stepDown .8s ease-in-out',
        'step-down2' : 'stepDown 1s ease-in-out',
        'scale-up' : 'scaleUp 3s ease-in-out',
        'step-up' : 'stepUp .3s ease-out',
        'slide-right' : 'slideRight .5s ease-in-out',
        'slide-left' : 'slideLeft .5s ease-in-out',
        'slide-out-left' : 'slideOutLeft 0.5s ease-in-out'

      },
      keyframes: {
        fadeOut: {
          '0%': {opacity : '0'},
          '100%' : {opacity: "100"}
        },
        stepDown: {
          '0%': {
              transform: 'translateY(-100%)',
              opacity: '0'
          },
          '50%' :{
              transform: 'translateY(-50%)',
              opacity: '0'
          },
          '98%': {
              opacity: '.8'
          },
          '100%': {
              transform: 'translateY(0%)',
              opacity: '1'
          }
        },
        stepUp: {
          '0%':{
            transform: 'translateY(100%)',
            opacity: '1'
          },
          "100%": {
            transform: 'translateY(0%)',
            opacity: '1'
          }
        },
        scaleUp: {
          '0%' : {
            scale : "0"
          },
          '50%' : {
            scale : "50"
          },
          '100%' : {
            scale : "100"
          }
        },
        slideRight: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '50%' :{
              transform: 'translateX(-50%)',
              opacity: '0'
          },
          '98%': {
              opacity: '.8'
          },
          '100%': {
              transform: 'translateX(0%)',
              opacity: '1'
          }
        },
        slideLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '50%' :{
              transform: 'translateX(-50%)',
              opacity: '0'
          },
          '98%': {
              opacity: '.8'
          },
          '100%': {
              transform: 'translateX(0%)',
              opacity: '1'
          }
        },
        slideOutLeft: {
          '0%': {
            transform: 'translateX(0%)',
            opacity: '1'
          },
          '50%' :{
              transform: 'translateX(-50%)',
              opacity: '0.8'
          },
          '98%': {
              opacity: '0'
          },
          '100%': {
              transform: 'translateX(-100%)',
              opacity: '0',
          }
        }
      }
    },
  },
  plugins: [],
}
export default config
