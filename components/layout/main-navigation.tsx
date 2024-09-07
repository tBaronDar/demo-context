"use client";
import React, { useContext } from "react";

import styles from "./main-navigation.module.css";
import Link from "next/link";
import { CultsContext } from "@/store/cults-context";

function MainNavigation() {
	const { cults } = useContext(CultsContext);
	const selectedCult = cults.find((item) => item.isSelected === true);
	return (
		<header className={styles.header}>
			<nav className={styles.navigation}>
				<Link href={"/"} className={styles.logo}>
					Logo
				</Link>
				<ul>
					<li>
						<Link href={"/"}>Home</Link>
					</li>
					{/* Check if a selected cult exists and change the output */}
					{selectedCult && (
						<li>
							<Link href={"/more-details"}>More Details</Link>
						</li>
					)}
					{!selectedCult && (
						<li>
							<Link href={"/"}>No Selection</Link>
						</li>
					)}
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
