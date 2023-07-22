/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        'half': '50%',
      },
      height: {
        'heightUp': '110vh',
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'turquoise': '#50A8BB',
        'darkBlue': '#023047',
        'serviceCard': '#79BDCA',
        'serviceModal': '#77E9E2',
      },
      gridTemplateColumns: {
        'intro': '1fr 2fr',
        'about': '2fr 1fr',
        'services': 'minmax(150px, 576px) minmax(150px, 576px) minmax(150px, 576px)',
        'servicesMedium': 'repeat(2, minmax(150px, 300px))',
        'serviesSmall': 'repeat(2, minmax(50px, 300px))',
        'serviceModal': '1fr 1fr 1fr',
      },
      screens: {
        'a': {'max': '1635px'},
        // => @media (max-width: 1535px) { ... }
  
        'b': {'max': '1379px'},
        // => @media (max-width: 1279px) { ... }
  
        'c': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'd': {'max': '800px'},
        // => @media (max-width: 767px) { ... }
  
        'e': {'max': '660px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
};
