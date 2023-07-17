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
        'darkBlue': '#023047'
      },
      gridTemplateColumns: {
        'intro': '1fr 2fr',
      },
      screens: {
        'a': {'max': '1635px'},
        // => @media (max-width: 1535px) { ... }
  
        'b': {'max': '1379px'},
        // => @media (max-width: 1279px) { ... }
  
        'c': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'd': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'e': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
};
