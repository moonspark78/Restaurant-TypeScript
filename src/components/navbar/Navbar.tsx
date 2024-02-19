import React from "react";
import "./Style.css";
import Logo from "../navbar/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
      <Link to="/">
        <img src={Logo} alt="poto" />
      </Link>
      </div>
      <div className="ancres">
        <Link to="/">Home</Link>
        <a href="">About</a>
      </div>
      <div className="inp">
        <input
          type="text"
          placeholder="Choisis ton plat ..."
          className="input"
        />
      </div>
    </div>
  );
};
