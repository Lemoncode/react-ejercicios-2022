import React from "react";
import logo from "./assets/logo_lemoncode.png";
import "./styles.css";

export const App = () => {
  return (
    <div className="container">
      <h1>Punto de Partida al Laboratorio</h1>
      <img src={logo} alt="Logo de Lemoncode" />
    </div>
  );
};
