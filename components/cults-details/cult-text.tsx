"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./cult-text.module.css";
import { CultsContext } from "@/store/cults-context";

function CultText() {
	const { cults } = useContext(CultsContext);
	const [cultUrl, setCultUrl] = useState(undefined || "");

	useEffect(() => {
		const selectedCult = cults.find((item) => item.isSelected === true);
		if (selectedCult) {
			setCultUrl(selectedCult.details);
		}
		console.log(selectedCult);
	}, []);

	console.log(cults);
	return (
		<div className={styles.master}>
			{cultUrl && <iframe src={cultUrl} className={styles.details} />}
		</div>
	);
}

export default CultText;
