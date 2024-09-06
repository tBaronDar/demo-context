import React, { useContext, useEffect, useState } from "react";

import { DummyItem } from "@/data/data";
import styles from "@/components/cults-details/cult-details.module.css";
import { CultsContext } from "@/store/cults-context";

function ContentDetails() {
	const [diplayCult, setDisplayCult] = useState<DummyItem>();
	const { cults } = useContext(CultsContext);
	let cultUrl: string | undefined;

	useEffect(() => {
		const selectedCult = cults.find((item) => item.isSelected === true);
		setDisplayCult(selectedCult);
	}, [cults]);

	if (diplayCult) {
		cultUrl = diplayCult.details;
	} else {
		cultUrl = undefined;
	}

	return (
		<div className={styles.master}>
			{!cultUrl && <p>here goes the details of the selected thing</p>}
			{cultUrl && <iframe src={cultUrl} className={styles.details} />}
		</div>
	);
}

export default ContentDetails;
