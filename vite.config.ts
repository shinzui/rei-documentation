import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import mdx from "fumadocs-mdx/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

// For GitHub Pages deployment, set BASE_PATH=/rei-documentation
const basePath = process.env.BASE_PATH || "";

export default defineConfig({
	define: {
		__BASE_PATH__: JSON.stringify(basePath),
	},
	server: {
		port: 3000,
	},
	plugins: [
		mdx(await import("./source.config")),
		tailwindcss(),
		tsConfigPaths({
			projects: ["./tsconfig.json"],
		}),
		tanstackStart({
			spa: {
				enabled: true,
				prerender: {
					outputPath: "index.html",
					enabled: true,
					crawlLinks: true,
				},
			},
			pages: [
				{
					path: "/docs",
				},
				{
					path: "/api/search",
				},
			],
		}),
		react(),
	],
});
