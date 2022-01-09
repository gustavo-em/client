import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from "./Layout.module.css";
const Layout = () => {
  return (
    <>
      <Header />

      <div className={styles.fundo}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
