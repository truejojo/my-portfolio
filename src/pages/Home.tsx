import SectionIntro from "../components/SectionIntro";
import SectionAbout from "../components/SectionAbout";
import SectionProjects from "../components/SectionProjects";
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
      <SectionIntro />
      
      <Section {...skills} idcn="skills" accent="2" />
      
      <SectionAbout />

      <SectionProjects {...projects} idcn="projects" />

      <Section {...interests} idcn="interests" accent="1" />
    </>
  );
};

export default Home;
