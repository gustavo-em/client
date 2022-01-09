import { Button, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./pages/layout/Layout";
import Personagens from "./pages/personagens/Personagens";

import "./EstiloGeral.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="personagens" element={<Personagens />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
