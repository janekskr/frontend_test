export default function Home() {
  return (
    <main className="home">
      <header className="header">
        <h1 className="header__title">Nagłówek H1</h1>
        <hr className="header__title-border" />
      </header>
      <section className="input-section">
        <div>
          <h3>Blok pierwszy</h3>
          <div className="input-section__radio-buttons-container">
            <label htmlFor="first">
              <input type="radio" name="first" id="first" /> Opcja pierwsza
            </label>
            <label htmlFor="second">
              <input type="radio" name="second" id="second" /> Opcja druga
            </label>
            <label htmlFor="random">
              <input type="radio" name="random" id="random" /> Opcja losowa
            </label>
          </div>
        </div>
        <div>
          <h3>blok drugi</h3>
          <div className="input-section__buttons-container">
            <button>Zastąp</button>
            <button>Doklej</button>
          </div>
        </div>
      </section>
      <section className="text-section">
        <h2 className="text-section__title">
          Blok z długą nazwą która sama się przytnie
        </h2>
        <p className="text-section__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          reprehenderit laboriosam, molestias eius blanditiis veritatis iusto,
          maiores quis sint aliquam dicta ad nulla enim est quae id. Nisi,
          placeat laboriosam. Est architecto dolorum, obcaecati perspiciatis
          odit officia consequatur cupiditate dolores laboriosam! Excepturi
          maxime, exercitationem id culpa vero quia eos, esse quasi ipsa
          distinctio amet totam nihil commodi, placeat ducimus nemo!
          Exercitationem fugit tenetur facere!=
        </p>
      </section>
    </main>
  );
}
