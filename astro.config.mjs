import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CoCo Incomings',
			logo: {
				src: './src/assets/CoCo-Logo.svg',
			},
			favicon: './src/assets/Logo.svg',
			social: {
				instagram: 'https://www.instagram.com/codeandcontext/',
			},
			sidebar: [
				{
					label: 'Incomings',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Incomings Information', link: '/incomings/exchange-at-coco' },
						{ label: 'Courses', link: '/incomings/courses' },
					],
				},
				{
					label: 'More',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Ex', link: '/more/example' },
					],
				},
			],
			customCss: [
				'./src/styles/custom.css',
			  ],
		}),
	],
});
