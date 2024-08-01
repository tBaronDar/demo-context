"use client";

import { DummyItem } from "@/data/data";
import React, { createContext, useState } from "react";

interface CultsContextInterface {
	cults: DummyItem[] | [];
	setInputCults: (inputCults: DummyItem[]) => void;
}

const defaultContext: CultsContextInterface = {
	cults: [],
	setInputCults: () => {},
};

export const CultsContext =
	createContext<CultsContextInterface>(defaultContext);

function CultsContextProvider({ children }: { children: React.ReactNode }) {
	const [cults, setCults] = useState<DummyItem[]>([]);
	return (
		<CultsContext.Provider
			value={{
				cults: [],
				setInputCults: setCults,
			}}>
			{children}
		</CultsContext.Provider>
	);
}

export default CultsContextProvider;
