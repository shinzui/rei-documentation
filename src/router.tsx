import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { NotFound } from "@/components/not-found";
import { routeTree } from "./routeTree.gen";

declare const __BASE_PATH__: string;

export function getRouter() {
	return createTanStackRouter({
		routeTree,
		basepath: __BASE_PATH__ || "/",
		defaultPreload: "intent",
		scrollRestoration: true,
		defaultNotFoundComponent: NotFound,
	});
}
