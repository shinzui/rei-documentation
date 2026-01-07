#!/usr/bin/env node
/**
 * Post-process built HTML files to add base path prefix to all URLs.
 * Run this after `pnpm build` when deploying to a subpath like GitHub Pages.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const basePath = process.env.BASE_PATH || "/rei-documentation";
const distDir = join(process.cwd(), "dist/client");

function processHtmlFile(filePath) {
	let html = readFileSync(filePath, "utf-8");

	// Add base path to asset URLs in HTML attributes
	html = html.replace(/href="\/assets\//g, `href="${basePath}/assets/`);
	html = html.replace(/src="\/assets\//g, `src="${basePath}/assets/`);

	// Fix asset paths in inline JavaScript (TanStack Router manifest, imports)
	html = html.replace(/"\/assets\//g, `"${basePath}/assets/`);
	html = html.replace(/import\('\/assets\//g, `import('${basePath}/assets/`);

	// Fix internal navigation links (docs, api, root)
	html = html.replace(/href="\/docs\//g, `href="${basePath}/docs/`);
	html = html.replace(/href="\/docs"/g, `href="${basePath}/docs"`);
	html = html.replace(/href="\/api\//g, `href="${basePath}/api/`);
	html = html.replace(/href="\/"/g, `href="${basePath}/"`);

	// Fix links in JavaScript (for client-side navigation)
	html = html.replace(/"url":"\/docs\//g, `"url":"${basePath}/docs/`);
	html = html.replace(/"url":"\/"/g, `"url":"${basePath}/`);

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
