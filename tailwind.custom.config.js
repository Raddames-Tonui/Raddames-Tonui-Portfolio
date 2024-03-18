
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors:{
      'hulk':{
        light : '#10CA02',
        default : '#01A003',
        dark : '#006D05',
      },
      'gray':{
        light : '#C5C5C5',
      default : '#747172',
        dark : '#5A5A5A',
      },
      'orange':{
        light: '#FC621C',
      },
      'navy':{
        light: '#131B2A',
        default : '#0D1219',
        dark: '#050912 ',
      },
    },
    extend: {},
  },
  plugins: [],
}