/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'pencil': ['Tilt Prism', "cursive"],
      'hero': ['Righteous']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primaryAccent: 'rgb(var(--primary-accent) / <alpha-value>)',
      secondaryAccent: 'rgb(var(--secondary-accent) / <alpha-value>)',
      backgroundPrimary: 'rgb(var(--background-primary) / <alpha-value>)',
      black: "rgb(0 0 0 / <alpha-value>)"
    }
  },
  plugins: [],
}
