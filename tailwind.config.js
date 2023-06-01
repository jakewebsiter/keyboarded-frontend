export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0802b3',
        primaryhover: '#050094',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child-div', '& > div');
    },
  ],
};
