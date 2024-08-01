"use client";
import ContentDetails from "@/components/cults-details/cult-details";
import ContentTable from "@/components/cults/cults-table";
import FileTree from "@/components/file-tree";
import CultsContextProvider from "@/store/cults-context";

export default function Home() {
	return (
		<main>
			<FileTree />
			<CultsContextProvider>
				<ContentTable />
				<ContentDetails />
			</CultsContextProvider>
		</main>
	);
}
