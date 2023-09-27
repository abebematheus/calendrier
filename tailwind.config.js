/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // Aqui, dentro de extend, adicione sua classe personalizada
      extend: {
        theme: {
          extend: {
            // Classe personalizada 'button-day'
            
          },
        },
      },
    },
  },
  plugins: [],
}
