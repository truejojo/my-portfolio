import Section from "../components/Section";
import { getSkills } from "../data/skills";
import { getInterests } from "../data/interests";

const skills = getSkills();
const interests = getInterests();

const Home = () => {  
  return (
    <>
      <section className="intro">
        <div className="container">
          <div className="content">
            <h1 className="title">Moin, ich bin Johannes Vehring</h1>
            <p className="subtitle | fs-700 bg-accent-3-900 clr-accent-2-300">
              Frontend Developer
            </p>
            <img
              className="img | box-shadow-5"
              src="./assets/20221129_Primephoto_G02A3621_hoch.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <Section {...skills} />

      {/* <section id="skills" className="skills | bg-primary-300">
        <div className="container">
          <h2 className="text-center fs-800 m-bottom-48">Meine Fähigkeiten</h2>

          <div className="g-auto-fit-columns">
            <div className="card | bg-accent-1-300 box-shadow-5">
              <h3 className="fs-700 m-bottom-24">Sprachen</h3>
              <ul className="flow fs-600 bg-accent-1-500 p-24" role="list">
                <li>JS/ES6</li>
                <li>React</li>
                <li>ReactTS</li>
                <li>HTML</li>
                <li>CSS/SCSS</li>
              </ul>
            </div>

            <div className="card | bg-accent-1-300 box-shadow-5">
              <h3 className="fs-700 m-bottom-24">Kenntnisse</h3>
              <ul className="flow fs-600 bg-accent-1-500 p-24" role="list">
              <li>Git</li>
                <li>VSCode</li>
                <li>Refactoring</li>
                <li>Clean Code</li>
              </ul>
            </div>
          </div>
          
        </div>
      </section> */}

      <section id="about" className="about | bg-primary-700">
        <div className="container">
          <h2>Über mich</h2>
          <div>
            <p>
              Ich bin ein Familienmensch. Papa, Ehemann und leidenschaftlicher
              Programmierer 👨‍💻. Fahre gerne Fahrrad 🚲 und mag Fussball ⚽️.
            </p>
            <picture>
              <span>👨‍👩‍👧‍👦</span>
            </picture>
          </div>
          <div>
            <p>
              2016 habe ich meine Umschulung zum Anwendungsentwickler
              erfolgreich abgeschlossen 👨‍🎓, nun möchte ich auch in diesem Beruf
              tätig sein. Auf
              <a target="_blank" href="https://xing.com/">
                meinem Xing Profil
              </a>
              , könnt ihr einen Blick auf meinen bisherign beruflichen Werdegang
              werfen 🙂.
              <br />
              Juli 20222 habe ich eine online Zertifizierung bei
              <a target="_blank" href="https://scrimba.com">
                Scrimba
              </a>
              zum
              <a target="_blank" href="https://scrimba.com/learn/frontend">
                Frontend Developer
              </a>
              abgeschlossen.
            </p>
            <p>
              Suche ein sympatisches Team 👩🏼‍💻👨🏻‍💻👨🏿‍💻, welches nicht davor zurück
              schreckt, einen älteren Kerl als Junior Frontend Developer
              einzustellen. Auf
              <a target="_blank" href="https://github.com/">
                meinem GitHub Profil
              </a>
              könnt Ihr den Code 💻 zu der gesamten Webseite einsehen und euch
              einen Überblick über meine anderen Projekte und Interessen
              verschaffen.
              <br />
              Eine 30-35 Std. 🕒 Stelle in Hamburg oder nord-westliches Umland -
              das wäre Perfekt 🙂. Anfangen kann ich ab sofort.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <div className="container">
          <header>
            <h2>Meine Projekte</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              delectus similique et facilis unde qui?
            </p>
          </header>
          <div className="g-auto-fit-columns">
            <div className="card">
              <h3>Reihen</h3>
              <p>Zum Erlernen der Mathematik, die Reihen 1 - 10</p>
              <button>zum spiel</button>
            </div>
            <div className="card">
              <h3>1 mal 1</h3>
              <p>Übungsaufgaben zum 1 mal 1</p>
              <button>zum spiel</button>
            </div>
            <div className="card">
              <h3>Merkfähigkeit</h3>
              <p>Das Spiel hat ähnlichkeit mit dem bekannten Spiel 'Simon'</p>
              <button>zum spiel</button>
            </div>
          </div>
        </div>
      </section>

      <Section {...interests} />
      {/* <section id="interests" className="interests | bg-primary-300">
        <div className="container g-auto-fit-columns">
          <header>
            <h2>Interessen</h2>
            <p className="subtitle">was ich noch lernen will</p>
          </header>
          <div>
            <h3>Sprachen</h3>
            <ul>
              <li>mehr React/TS</li>
              <li>Firebase</li>
              <li>Node</li>
            </ul>
          </div>
          <div>
            <h3>Kenntnisse</h3>
            <ul>
              <li>FP</li>
              <li>TDD</li>
              <li>...und bei euch?</li>
            </ul>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Home;
