"use client";

import React, { useEffect, useState } from "react";
import { DUMMY_ITEMS, DummyItem } from "@/data/data";

import styles from "@/components/cults/cults-table.module.css";
import ListItem from "./list-item";

function ContentTable() {
	const [inputData, setInputData] = useState<DummyItem[]>([]);

	useEffect(() => {
		async function fetcher() {
			// this could be a fetch
			setInputData(DUMMY_ITEMS);
		}
		fetcher();
	}, [DUMMY_ITEMS]);

	return (
		<div className={styles.master}>
			<h2>Here goes the main item list</h2>
			<ul className={styles.list}>
				{inputData.map((item) => (
					<ListItem inputItem={item} key={item.id} />
				))}
			</ul>
		</div>
	);
}

export default ContentTable;
