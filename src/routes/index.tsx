import { createFileRoute, Link } from "@tanstack/react-router";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<HomeLayout {...baseOptions()}>
			<div className="flex flex-col flex-1 justify-center px-4 py-16 text-center">
				<h1 className="font-bold text-4xl mb-4">怜 rei</h1>
				<p className="text-fd-muted-foreground text-lg mb-2">
					Intentional action over time
				</p>
				<p className="text-fd-muted-foreground max-w-md mx-auto mb-8">
					A CLI for personal time management built around clarity, not
					productivity. See better. Act with intention.
				</p>
				<Link
					to="/docs/$"
					params={{
						_splat: "",
					}}
					className="px-4 py-2.5 rounded-lg bg-fd-primary text-fd-primary-foreground font-medium text-sm mx-auto hover:opacity-90 transition-opacity"
				>
					Get Started
				</Link>
			</div>
		</HomeLayout>
	);
}
