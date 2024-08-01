"use client";
import ContentDetails from "@/components/cults-details/cult-details";
import ContentTable from "@/components/cults/cults-table";
import FileTree from "@/components/file-tree";

export default function Home() {
	return (
		<main>
			<FileTree />
			<ContentTable />
			<ContentDetails />
		</main>
	);
}
