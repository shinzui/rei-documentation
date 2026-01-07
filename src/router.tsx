import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { NotFound } from "@/components/not-found";
import { routeTree } from "./routeTree.gen";

// Detect basepath from current URL for GitHub Pages deployment
// e.g., if deployed at /rei-documentation/, extract that as basepath
function getBasepath(): string {
	if (typeof window === "undefined") return "/";

	const { pathname } = window.location;
	// Check if we're on a GitHub Pages subpath (e.g., /rei-documentation/...)
	const match = pathname.match(/^(\/[^/]+)(?:\/|$)/);
	if (match && match[1] !== "/docs" && match[1] !== "/api") {
		return match[1];
	}
	return "/";
}

export function getRouter() {
	return createTanStackRouter({
		routeTree,
		basepath: getBasepath(),
		defaultPreload: "intent",
		scrollRestoration: true,
		defaultNotFoundComponent: NotFound,
	});
}
