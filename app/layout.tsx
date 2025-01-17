import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavigation from "@/components/layout/main-navigation";
import CultsContextProvider from "@/store/cults-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "A State Managment Demo",
	description: "Depicting a small list of infamous cults",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<CultsContextProvider>
					<MainNavigation />
					{children}
				</CultsContextProvider>
			</body>
		</html>
	);
}
