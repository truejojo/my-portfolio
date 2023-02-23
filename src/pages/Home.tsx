import Section from "../components/Section";
import SectionIntro from "../components/SectionIntro";
import SectionAbout from "../components/SectionAbout";
import { getSkills } from "../data/skills";
import { getInterests } from "../data/interests";
import { getProjects } from "../data/projects";

const skills = getSkills();
const interests = getInterests();
const projects = getProjects();

const Home = () => {
  return (
    <>
      <SectionIntro />

      <Section {...skills} idcn="skills" accent="2" />

      <SectionAbout />

      {/* <section id="projects" className="projects">
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
      </section> */}

      <Section {...interests} idcn="interests" accent="1" />
    </>
  );
};

export default Home;
