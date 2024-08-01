import React from "react";

import styles from "@/components/cults-details/cult-details.module.css";

function ContentDetails() {
	return (
		<div className={styles.master}>
			<p>here goes the details of the selected thing</p>
			<iframe src="https://en.wikipedia.org/wiki" />
		</div>
	);
}

export default ContentDetails;
