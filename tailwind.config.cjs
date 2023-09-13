/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'blue-dark': '#0D263B',
				'blue-light': '#0061DF'
			}
		}
	},
	plugins: [require('tailwind-scrollbar')]
};
