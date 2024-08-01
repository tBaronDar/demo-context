"use client";

import { DummyItem } from "@/data/data";
import React, { createContext, useState } from "react";

interface CultsContextInterface {
	cults: DummyItem[] | [];
	selectedCult: DummyItem | undefined;
	setCults: (inputCults: DummyItem[]) => void;
	setSelectedCult: (inputCults: DummyItem) => void;
}

const defaultContext: CultsContextInterface = {
	cults: [],
	selectedCult: undefined,
	setCults: () => {},
	setSelectedCult: () => {},
};

export const CultsContext =
	createContext<CultsContextInterface>(defaultContext);

function CultsContextProvider({ children }: { children: React.ReactNode }) {
	const [cults, setCults] = useState<DummyItem[]>([]);
	const [selectedCult, setSelectedCult] = useState<DummyItem>();
	return (
		<CultsContext.Provider
			value={{
				cults,
				selectedCult,
				setCults,
				setSelectedCult,
			}}>
			{children}
		</CultsContext.Provider>
	);
}

export default CultsContextProvider;
