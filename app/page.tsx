"use client";
import Ads from "@/components/ads";
import ContentDetails from "@/components/cults-details/cult-details";
import ContentTable from "@/components/cults/cults-table";
import Intro from "@/components/intro";
import CultsContextProvider from "@/store/cults-context";

export default function HomePage() {
	return (
		<main>
			<CultsContextProvider>
				<Intro />
				<ContentTable />
				<ContentDetails />
				<Ads />
			</CultsContextProvider>
		</main>
	);
}
