import React from "react";
import { DummyItem } from "@/data/data";

function ListItem({ inputItem }: { inputItem: DummyItem }) {
	return (
		<li>
			<h3>{inputItem.name}</h3>
			<p>{inputItem.description}</p>
		</li>
	);
}

export default ListItem;
