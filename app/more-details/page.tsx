"use client";

import React from "react";
import Ads from "@/components/ads";

import styles from "./page.module.css";
import CultText from "@/components/cults-details/cult-text";
import Intro from "@/components/intro";

function DetailsPage() {
	return (
		<main className={styles.master}>
			<CultText />
			<Ads position="master-top-right" />
			<Intro position="master-top-left" />
		</main>
	);
}

export default DetailsPage;
