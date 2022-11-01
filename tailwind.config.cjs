/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				slideUp: 'slideUp ease .5s forwards',
			},
			keyframes: {
				slideUp: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-40px)', opacity: '1' },
				},
			},
		},
	},
	daisyui: {
		themes: ['corporate'],
	},
	plugins: [require('daisyui')],
};
