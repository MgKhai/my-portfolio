/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
            },
            keyframes: {
                moveGradient: {
                    '0%': { 'background-position': '0% 50%' },
                    '100%': { 'background-position': '200% 50%' },
                },
            },
            animation: {
                'gradient-move': 'moveGradient 4s linear infinite',
            },
            fontSize: {
                'tiny': '4px',
                'xxl': '1.7rem',
            },
        },
    },
    plugins: [],
}