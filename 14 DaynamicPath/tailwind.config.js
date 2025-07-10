/** @type {import('tailwindcss').Config} */
module.exports = {
  // here we no need to [] in exiting path
  content: [
    "./views/**/*.ejs",
    "./views/**/*.html",
    "./public/**/*.html",
    "./public/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
