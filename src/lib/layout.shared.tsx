import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export function baseOptions(): BaseLayoutProps {
	return {
		nav: {
			title: "rei",
		},
		links: [
			{
				text: "Documentation",
				url: "/docs",
				active: "nested-url",
			},
		],
	};
}
