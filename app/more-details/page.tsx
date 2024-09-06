"use client";

import React from "react";
import Ads from "@/components/ads";
import CultsContextProvider from "@/store/cults-context";

import styles from "./page.module.css";
import CultText from "@/components/cults-details/cult-text";

function DetailsPage() {
	return (
		<main className={styles.master}>
			<CultText />
			<Ads />
		</main>
	);
}

export default DetailsPage;
