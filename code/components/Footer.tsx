"use client"

import React from "react";
import { FaChevronUp } from "react-icons/fa";
import { useAppContext } from "./Provider";

export default function Footer() {
  const {setName, reset} = useAppContext()

  return (
    <footer className="footer">
      <p className="css-text">
        CSS <br />
        is
        <br /> awesome
      </p>

      <div className="company-name">
        <hr />
        <p className="company-name__text">nabthat</p>
        <hr />
      </div>

      <div className="popup-container">
      <button className="button">
        <p className="button__text">pokaż</p> 
        <FaChevronUp className="button__chevron" />
      </button>
      <div className="popup">
        <button className="popup__option" onClick={reset}>&gt; Resetuj</button>
        <button className="popup__option" onClick={() => setName("Jan Skrobot")}>&gt; Pokaż dane użytkownika</button>
      </div>
      </div>
    </footer>
  );
}
