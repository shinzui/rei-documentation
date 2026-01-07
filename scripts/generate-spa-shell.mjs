#!/usr/bin/env node
/**
 * Post-process built HTML files to add base path prefix to asset URLs.
 * Run this after `pnpm build` when deploying to a subpath like GitHub Pages.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const basePath = process.env.BASE_PATH || "/rei-documentation";
const distDir = join(process.cwd(), "dist/client");

function processHtmlFile(filePath) {
	let html = readFileSync(filePath, "utf-8");

	// Add base path to asset URLs (href="/assets/..." and src="/assets/...")
	html = html.replace(/href="\/assets\//g, `href="${basePath}/assets/`);
	html = html.replace(/src="\/assets\//g, `src="${basePath}/assets/`);

	// Also fix modulepreload links
	html = html.replace(
		/href="\/assets\/([^"]+)"/g,
		`href="${basePath}/assets/$1"`,
	);

	writeFileSync(filePath, html);
	console.log(`Processed: ${filePath}`);
}

// Process all HTML files in dist/client
function processDirectory(dir) {
	const entries = readdirSync(dir, { withFileTypes: true });
	for (const entry of entries) {
		const fullPath = join(dir, entry.name);
		if (entry.isDirectory()) {
			processDirectory(fullPath);
		} else if (entry.name.endsWith(".html")) {
			processHtmlFile(fullPath);
		}
	}
}

processDirectory(distDir);
console.log("Done processing HTML files for base path:", basePath);
