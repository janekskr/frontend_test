"use client";

import { useState } from "react";
import { useAppContext } from "@/components/Provider";
import { generateNumber } from "@/utils";

export default function Home() {
  const { saying, setNewSaying, addNewSaying } = useAppContext();
  const [radio, setRadio] = useState<RadioType>("0");
  const [prevNum, setPrevNum] = useState<number>(0);

  type RadioType = "0" | "1" | "random";

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRadio(event.target.value as RadioType);

  const handleSaying = (action: "set" | "add") => {
    if (!radio) return;

    const newSaying = radio === "random" ? generateNumber(prevNum) : +radio;

    setPrevNum(newSaying);

    action === "set" ? setNewSaying(newSaying) : addNewSaying(newSaying);
  };

  const handleSetSaying = () => handleSaying("set");
  const handleAddSaying = () => handleSaying("add");

  return (
    <main className="home">
      <header className="header">
        <h1 className="header__title" id="main-title">Nagłówek H1</h1>
        <hr className="header__title-border" />
      </header>
      <div className="sections-wrapper">
        <section className="input-section" aria-labelledby="input-section-title">
          <h2 id="input-section-title" className="visually-hidden">Sekcja wejściowa</h2>
          <div className="content-container">
            <h3>Blok pierwszy</h3>
            <div className="input-section__radio-buttons-container" role="group" aria-labelledby="radio-group-label">
              <span id="radio-group-label" className="visually-hidden">Wybierz opcję</span>
              <label htmlFor="first">
                <input
                  type="radio"
                  name="radio-button"
                  id="first"
                  value="0"
                  checked={radio === "0"}
                  onChange={handleRadioChange}
                />
                Opcja pierwsza
              </label>
              <label htmlFor="second">
                <input
                  type="radio"
                  name="radio-button"
                  id="second"
                  value="1"
                  onChange={handleRadioChange}
                />
                Opcja druga
              </label>
              <label htmlFor="random">
                <input
                  type="radio"
                  name="radio-button"
                  id="random"
                  value="random"
                  onChange={handleRadioChange}
                />
                Opcja losowa
              </label>
            </div>
          </div>
          <div className="content-container">
            <h3>Blok drugi</h3>
            <div className="input-section__buttons-container">
              <button onClick={handleSetSaying} aria-label="Zastąp aktualne powiedzenie">Zastąp</button>
              <button onClick={handleAddSaying} aria-label="Doklej nowe powiedzenie">Doklej</button>
            </div>
          </div>
        </section>
        <section className="text-section" aria-labelledby="text-section-title">
          <h3 id="text-section-title" className="text-section__title">
            Blok z długą nazwą która sama się przytnie
          </h3>
          <p className="text-section__description">
            {saying.map(({ content }, index) => (
              <span key={index}>
                {content} <br />
              </span>
            ))}
          </p>
        </section>
      </div>
    </main>
  );
}
