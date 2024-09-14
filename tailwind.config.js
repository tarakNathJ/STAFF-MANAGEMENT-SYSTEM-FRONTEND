/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "frombgColor": "#000000",
                "midbgColor": "#BA1DF8"
            }
        },
    },
    plugins: [],
}