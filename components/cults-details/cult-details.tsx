import React, { useContext } from "react";

import styles from "@/components/cults-details/cult-details.module.css";
import { CultsContext } from "@/store/cults-context";

function ContentDetails() {
  const { selectedCult } = useContext(CultsContext);
  let cultUrl: string | undefined;

  if (selectedCult) {
    cultUrl = selectedCult.details;
  } else {
    cultUrl = undefined;
  }

  return (
    <div className={styles.master}>
      {!cultUrl && <p>here goes the details of the selected thing</p>}
      {cultUrl && <iframe src={cultUrl} className={styles.details} />}
    </div>
  );
}

export default ContentDetails;
