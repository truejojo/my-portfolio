import Section from "../components/Section";
import { getSkills } from "../data/skills";
import { getInterests } from "../data/interests";
import { getProjects } from "../data/projects";

const skills = getSkills();
const interests = getInterests();
const projects = getProjects();

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

      <Section {...skills} idcn="skills" accent="2" />

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

      {/* <Section {...projects} idcn="projects" accent="3" /> */}

      <Section {...interests} idcn="interests" accent="1" />
    </>
  );
};

export default Home;
