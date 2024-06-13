/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./constants.{js,ts}",
        "./components/**/*.{js,vue,ts}",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}"
    ],
    theme: {
        fontFamily: {
            sans: ['"Inter"', '"Segoe UI"', 'sans-serif'],
        },
        extend: {
            colors: {},
        }
    },
    plugins: [],
}