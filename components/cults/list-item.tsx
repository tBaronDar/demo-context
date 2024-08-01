import React, { useContext } from "react";
import { DummyItem } from "@/data/data";
import { CultsContext } from "@/store/cults-context";

function ListItem({ inputItem }: { inputItem: DummyItem }) {
	const { setSelectedCult, selectedCult } = useContext(CultsContext);

	function cultClickHandler() {
		setSelectedCult(inputItem);
		console.log(selectedCult);
	}
	return (
		<li onClick={cultClickHandler}>
			<h3>{inputItem.name}</h3>
			<p>{inputItem.description}</p>
		</li>
	);
}

export default ListItem;
