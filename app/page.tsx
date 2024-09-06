"use client";
import Ads from "@/components/ads";
import ContentDetails from "@/components/cults-details/cult-details";
import ContentTable from "@/components/cults/cults-table";
import Intro from "@/components/intro";
import CultsContextProvider from "@/store/cults-context";

import styles from "./page.module.css";

export default function HomePage() {
	return (
		<main className={styles.master}>
			<Intro />
			<CultsContextProvider>
				<ContentTable />
				<ContentDetails />
			</CultsContextProvider>
			<Ads />
		</main>
	);
}
