import React from "react";
import styles from "./CHeader.module.css";
const CHeader = ({ nome }) => {
  return (
    <>
      <div className={styles.fundo}>
        <p className={styles.nome}>{nome}</p>
      </div>
    </>
  );
};

export default CHeader;
