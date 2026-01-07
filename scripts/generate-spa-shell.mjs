#!/usr/bin/env node
import { existsSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist/client");
const assetsDir = join(distDir, "assets");

if (!existsSync(assetsDir)) {
	console.error("Error: dist/client/assets not found. Run build first.");
	process.exit(1);
}

const assets = readdirSync(assetsDir);
const mainJs = assets.find((f) => f.startsWith("main-") && f.endsWith(".js"));
const appCss = assets.find((f) => f.startsWith("app-") && f.endsWith(".css"));

if (!mainJs) {
	console.error("Error: main-*.js not found in assets");
	process.exit(1);
}

const basePath = process.env.GITHUB_ACTIONS ? "/rei-documentation" : "";

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>怜 rei - Intentional Time Management</title>
  <meta name="description" content="Documentation for rei, a CLI for intentional time management and personal productivity" />
  ${appCss ? `<link rel="stylesheet" href="${basePath}/assets/${appCss}" />` : ""}
</head>
<body class="flex flex-col min-h-screen">
  <div id="root"></div>
  <script type="module" src="${basePath}/assets/${mainJs}"></script>
</body>
</html>
`;

writeFileSync(join(distDir, "index.html"), html);
console.log("Generated index.html");
