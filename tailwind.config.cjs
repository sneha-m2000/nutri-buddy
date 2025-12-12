/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Playfair Display SC', 'serif'],
                body: ['Playfair Display', 'serif'],
                name: ['Caveat', 'cursive'],
                cursive: ['Great Vibes', 'cursive'],
                Caveat: ['Caveat', 'cursive'],
            },
        },
    },
    plugins: [],
};
