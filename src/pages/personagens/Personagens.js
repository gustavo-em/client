import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CardsPerso from "../../componentes/CardsPerso";
import CHeader from "../../componentes/CHeader";

import styles from "./Personagens.module.css";

const Personagens = () => {
  let [personagens, setPersonagens] = useState([]);

  useEffect(async () => {
    await fetch("http://localhost:3333/personagens/todos")
      .then((r) => r.json())
      .then((r) => setPersonagens(r.dados));
  }, []);

  return (
    <>
      <div className={styles.cards}>
        {personagens.map((p) => (
          <Link to={"/personagen/" + p.id}>
            <CardsPerso>
              <CHeader nome={p.nome}></CHeader>
            </CardsPerso>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Personagens;
