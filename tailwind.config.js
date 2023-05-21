/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            one: 'rgb(var(--color-one) / <alpha-value>)',
            two: 'rgb(var(--color-two) / <alpha-value>)',
            three: 'rgb(var(--color-three) / <alpha-value>)',
            four: 'rgb(var(--color-four) / <alpha-value>)',
            five: 'rgb(var(--color-five) / <alpha-value>)',
        },
    },
    plugins: [],
}
