import React, { useContext, useState } from "react";
import { DummyItem } from "@/data/data";
import { CultsContext } from "@/store/cults-context";

import styles from "@/components/cults/list-item.module.css";

function ListItem({ inputItem }: { inputItem: DummyItem }) {
	const { setSelectedCult, selectedCult } = useContext(CultsContext);
	const [isFocus, setIsFocus] = useState(false);

	function cultClickHandler() {
		setSelectedCult(inputItem);
		console.log(selectedCult);
	}

	function focusHandler() {
		setIsFocus(true);
	}

	let decoration = "cult";
	if (isFocus) {
		decoration = "focused";
	}

	return (
		<li
			onClick={cultClickHandler}
			className={styles[decoration]}
			onFocus={focusHandler}>
			<h3>{inputItem.name}</h3>
			<p>{inputItem.description}</p>
		</li>
	);
}

export default ListItem;
