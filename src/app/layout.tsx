import type { Metadata } from "next";
import { cascadiaCode, geist, sora } from "@/app/fonts";
import "./globals.css";
import Header from "@/components/Header";
import "@/styles/init.css";

// NextJS Metas
export const metadata: Metadata = {
	title: "Welcome to Omdb - The Open Movie Database For Developers.",
	description: "An open-source, easy-to-use, & secure movie metadata management platform for developers.",
};

// NextJS Root Layout
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en" className={`${geist.variable} ${sora.variable} ${cascadiaCode.variable}`}>
			<head>
				<link rel="icon" href="/favicon/favicon.svg" type="image/x-icon"></link>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"></link>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"></link>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"></link>
                <link rel="manifest" href="/favicon/site.webmanifest"></link>
			</head>
			<body className="__omdb">
				<Header/>
				{children}
			</body>
		</html>
	);
}