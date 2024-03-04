import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		maxWidth: {
			mobile: "340px",
		},
		extend: {
			boxShadow: {
				"custom-1": "0 0 6px 0 rgba(148, 77, 230, 0.75)",
				"custom-2": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
			},
			colors: {
				modalBackground: "rgba(28, 28, 45, 0.9)",
				"top-gradient": "#712bda",
				"bottom-gradient": "#a45deb",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
