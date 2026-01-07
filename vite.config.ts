import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import mdx from "fumadocs-mdx/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const basePath = process.env.GITHUB_ACTIONS ? "/rei-documentation" : "";

export default defineConfig({
	base: basePath ? `${basePath}/` : "/",
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
			router: {
				basepath: basePath || "/",
			},
			spa: {
				enabled: true,
				prerender: {
					outputPath: "index.html",
					crawlLinks: !basePath,
				},
			},
			prerender: {
				failOnError: !basePath,
			},
			pages: basePath
				? []
				: [
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
