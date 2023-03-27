const Home = () => {
  return (
    <>
      <section id="intro" className="intro | bg-primary-500">
        <div className="container">
          <div className="content">
            <h1 className="title">Moin, ich bin Johannes Vehring</h1>
            <p className="subtitle">Frontend Developer</p>
            <img
              className="img "
              src="./assets/20221129_Primephoto_G02A3621_hoch.jpg"
              alt="Johannes Vehring trägt eine Brille"
            />
          </div>
        </div>
      </section>

      <section id="skills" className="skills | bg-primary-300">
        <div className="container" data-type="small">
          <header className="section-header">
            <h2 className="title">Meine Fähigkeiten</h2>
          </header>

          <div className="grid-auto-fit-columns">
            <div className="card | bg-secondary-II-300">
              <h3 className="title">Sprachen</h3>
              <ul className="list | flow bg-secondary-II-700" role="list">
                <li>JS/ES6</li>
                <li>React</li>
                <li>ReactTS</li>
                <li>HTML</li>
                <li>CSS/SCSS</li>
              </ul>
            </div>

            <div className="card | bg-secondary-II-300">
              <h3 className="title">Kenntnisse</h3>
              <ul className="list | flow bg-secondary-II-700" role="list">
                <li>Git</li>
                <li>VSCode</li>
                <li>Refactoring</li>
                <li>Clean Code</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about | bg-primary-700">
        <div className="container" data-type="small">
          <div className="person">
            <h2 className="title">Über mich</h2>
            <p className="text">
              Ich bin ein Familienmensch. Papa, Ehemann und leidenschaftlicher
              Programmierer 👨‍💻. Fahre gerne Fahrrad 🚲 und mag Fussball ⚽️.
            </p>
            <span className="img">👨‍👩‍👧‍👦</span>
          </div>

          <div className="flow">
            <p>
              2016 habe ich meine Umschulung zum Anwendungsentwickler
              erfolgreich abgeschlossen 👨‍🎓, nun möchte ich auch in diesem Beruf
              tätig sein. Auf{" "}
              <a target="_blank" href="https://xing.com/">
                meinem Xing Profil
              </a>
              , könnt ihr meine letzten beruflichen Stationen sehen. Mein
              beruflicher Werdegang ist in meinem Lebenslauf enthalten, den ich
              Euch bei Interesse gerne zu sende.
            </p>
            <p>
              Im Juli 2022 habe ich eine online Zertifizierung bei{" "}
              <a target="_blank" href="https://scrimba.com">
                Scrimba
              </a>{" "}
              zum{" "}
              <a target="_blank" href="https://scrimba.com/learn/frontend">
                Frontend Developer
              </a>{" "}
              abgeschlossen und eine Weiterbildung Juli - November 2022 bei
              future Training & Consulting GmbH mit dem Schwerpunkt React
              durchgeführt.
            </p>
            <p>
              Suche ein sympatisches Team 👩🏼‍💻👨🏻‍💻👨🏿‍💻, welches nicht davor zurück
              schreckt, einen älteren Kerl als Junior Frontend Developer
              einzustellen. Auf{" "}
              <a target="_blank" href="https://github.com/">
                meinem GitHub Profil
              </a>{" "}
              könnt Ihr den Code 💻 zu der gesamten Webseite einsehen und euch
              einen Überblick über meine anderen Projekte und Interessen
              verschaffen.
            </p>
            <p>
              Eine 30-35 Std. 🕒 Stelle in Hamburg oder nord-westliches Umland -
              das wäre Perfekt. Anfangen kann ich ab sofort.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects" data-type="wide">
        <div className="container">
          <header className="section-header | flow bg-primary-700 px-block-12 px-inline-8 box-shadow-3 border-radius">
            <h2 className="title ff-accent-I letter-spacing-loose">Meine Projekte</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              delectus similique et facilis unde qui
            </p>
          </header>

          <div className="grid-even-columns text-center">
            <div className="card">
              <h3 className="title clr-secondary-I-500">Reihen</h3>
              <p className="text">Zum Erlernen der Reihen 1 - 10</p>
              <button className="button" data-type="1x1">
                zum spiel
              </button>
            </div>

            <div className="card">
              <h3 className="title clr-secondary-II-500">1 mal 1</h3>
              <p className="text">Übungsaufgaben zum 1 mal 1</p>
              <button className="button" data-type="1x1-task">
                zum spiel
              </button>
            </div>

            <div className="card">
              <h3 className="title clr-secondary-III-500">Buchstaben</h3>
              <p className="text">Zumr erlernen der Buchstaben</p>
              <button className="button" data-type="letter">
                zum spiel
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="interests" className="interests | bg-primary-300">
        <div className="container" data-type="small">
          <header className="section-header">
            <h2 className="title">Interessen</h2>
            <p>was ich noch lernen will</p>
          </header>

          <div className="grid-auto-fit-columns">
            <div className="card | bg-secondary-I-300">
              <h3 className="title">Sprachen</h3>
              <ul className="list | flow bg-secondary-I-700" role="list">
                <li>mehr React/TS</li>
                <li>Firebase</li>
                <li>Node</li>
              </ul>
            </div>

            <div className="card | bg-secondary-I-300">
              <h3 className="title">Kenntnisse</h3>
              <ul className="list | flow bg-secondary-I-700" role="list">
                <li>FP</li>
                <li>TDD</li>
                <li>und bei euch?</li>
              </ul>
            </div>
          </div>          
        </div>
      </section>
    </>
  );
};

export default Home;
