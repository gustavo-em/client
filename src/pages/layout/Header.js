import React from "react";
import styles from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  let nav = useNavigate();

  function handleClickLogo({ target }) {
    nav("/");
  }

  return (
    <>
      <div className={styles.teste}>
        <div onClick={handleClickLogo} className={styles.logo}>
          C
        </div>

        <div className={styles.menu}>
          <ul>
            <NavLink to="personagens">
              <li>Personagens</li>
            </NavLink>
            <NavLink to="sobre">
              <li>Sobre</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
