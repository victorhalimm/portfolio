/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background' : '#13151a',
				'accent' : '#9333ea',
				'content' : '#9ca3af',
				'subtle' : '#6b7280'
			},
			fontFamily: {
				sans: ['SourceSans3', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
}
