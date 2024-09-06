"use client";

import React, { useContext, useEffect } from "react";
import { DUMMY_ITEMS } from "@/data/data";

import styles from "@/components/cults/cults-table.module.css";
import ListItem from "./list-item";
import { CultsContext } from "@/store/cults-context";

function ContentTable() {
	const ctx = useContext(CultsContext);

	useEffect(() => {
		async function fetcher() {
			// this could be a fetch
			ctx.setCults(DUMMY_ITEMS);
		}
		fetcher();
	}, [DUMMY_ITEMS]);

	return (
		<div className={styles.master}>
			<h2>Here goes the main item list</h2>
			<ul className={styles.list}>
				{ctx.cults.map((item) => (
					<ListItem inputItem={item} key={item.id} />
				))}
			</ul>
		</div>
	);
}

export default ContentTable;
