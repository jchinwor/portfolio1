module.exports = {
  
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        "home-img":"url('/img/homebg.png')",
         'hp':
          "linear-gradient(to right bottom, rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9)), url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eAFxNBriFW8k0jCNOTCe6gHaHs%26pid%3DApi&f=1')",
      },
      colors:{
        secondary:"#101010"
      }
    },
    fontFamily:{
      Orbitron:['Orbitron,sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
