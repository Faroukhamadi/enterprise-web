/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				slideUpFirst: 'slideUpFirst ease-in-out 1s forwards',
				slideUpSecond: 'slideUpSecond ease-in-out 2.5s forwards',
				slideUpThird: 'slideUpThird ease-in-out 3.5s forwards',
			},
			keyframes: {
				slideUpFirst: {
					'0%': { transform: 'translateY(200%)', opacity: 0 },
					'100%': { transform: 'translateY(0)', opacity: 1 },
				},
				slideUpSecond: {
					'0%': { transform: 'translateY(200%)', opacity: 0 },
					'100%': { transform: 'translateY(0)', opacity: 1 },
				},
				slideUpThird: {
					'0%': { transform: 'translateY(200%)', opacity: 0 },
					'100%': { transform: 'translateY(0)', opacity: 1 },
				},
			},
		},
	},
	daisyui: {
		themes: ['corporate'],
	},
	plugins: [require('daisyui')],
};
