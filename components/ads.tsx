import React from "react";

import styles from "./ads.module.css";

function Ads({ position }: { position: string }) {
	let selector: string = "master-btm-left";

	if (position === "master-top-right") {
		selector = "master-top-right";
	}
	return (
		<div className={styles[selector]}>
			<p className={styles.text}>This space is dedicated for ads</p>
		</div>
	);
}

export default Ads;
