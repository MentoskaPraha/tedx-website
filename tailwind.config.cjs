/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,svelte}"],
	theme: {
		extend: {
			colors: {
				tedRed: "#EB0028"
			},
			spacing: {
				17: "4.25rem"
			}
		}
	},
	plugins: []
};
