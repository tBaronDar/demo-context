import React from "react";

import styles from "./intro.module.css";
import Link from "next/link";

function Intro() {
	return (
		<div className={styles.master}>
			<h3>Hello!</h3>
			<p>Welcome the top 5 most infamous cults in the world!</p>
			<p>Click on a cult to uncover more details...</p>
			<p>Find the code here: </p>
			<Link href={"https://github.com/tBaronDar/demo-context"}>
				https://github.com
			</Link>
		</div>
	);
}

export default Intro;
