import type { Metadata } from "next";
import "./globals.css";

// NextJS Metas
export const metadata: Metadata = {
	title: "Welcome to Omdb - The Open Movie Database For Developers.",
	description: "An open-source, easy-to-use, & secure movie metadata management platform for developers.",
};

// NextJS Root Layout
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/x-icon"></link>
			</head>
			<body>
				{children}
			</body>
		</html>
	);
}