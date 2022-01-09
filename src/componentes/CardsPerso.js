import React from "react";
import styles from "./CardsPerso.module.css";
const CardsPerso = ({ children }) => {
  return (
    <>
      <div className={styles.template}>{children}</div>
    </>
  );
};

export default CardsPerso;
