import React from "react";

import styles from "./main-navigation.module.css";
import Link from "next/link";

function MainNavigation() {
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
          <li>
            <Link href={"/with-MUI"}>With MUI</Link>
          </li>
          <li>option2</li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
