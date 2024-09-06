"use client";

import { DummyItem } from "@/data/data";

import React, { createContext, useState, useEffect } from "react";

interface CultsContextInterface {
	cults: DummyItem[] | [];
	setCults: (inputCults: DummyItem[]) => void;
}

const defaultContext: CultsContextInterface = {
	cults: [],
	setCults: () => {},
};

export const CultsContext =
	createContext<CultsContextInterface>(defaultContext);

function CultsContextProvider({ children }: { children: React.ReactNode }) {
	const [cults, setCults] = useState<DummyItem[]>([]);

	return (
		<CultsContext.Provider
			value={{
				cults,
				setCults,
			}}>
			{children}
		</CultsContext.Provider>
	);
}

export default CultsContextProvider;
