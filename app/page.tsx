import ContentDetails from "@/components/content-details";
import ContentTable from "@/components/content-table";
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
