import React, { useContext } from "react";
import { DummyItem } from "@/data/data";
import { CultsContext } from "@/store/cults-context";

import styles from "@/components/cults/list-item.module.css";

function ListItem({ inputItem }: { inputItem: DummyItem }) {
	const { cults, setCults } = useContext(CultsContext);

	function cultClickHandler(selection: number | undefined) {
		const clickedCults = cults.map((item) =>
			selection === item.id
				? { ...item, isSelected: true }
				: { ...item, isSelected: false }
		);

		setCults(clickedCults);
	}

	let decoration = "cult";
	if (inputItem.isSelected) {
		decoration = "focused";
	}

	return (
		<li
			onClick={cultClickHandler.bind(null, inputItem.id)}
			className={styles[decoration]}>
			<h3>{inputItem.name}</h3>
			<p className={styles.description}>{inputItem.description}</p>
		</li>
	);
}

export default ListItem;
