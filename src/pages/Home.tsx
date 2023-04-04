import Section from "../components/organisms/Section";
import CardWrapper from "../components/organisms/CardWrapper";
import CardAccentWrapper from "../components/organisms/CardAccentWrapper";
import HeaderElement from "../components/elements/HeaderElement";
import MainHeadline from "../components/assets/MainHeadline";
import Headline2 from "../components/assets/Headline2";
import ALink from "../components/assets/ALink";
import {
  Container,
  ContainerSmall,
  ContainerWide,
} from "../components/helper/Container";
import {
  GridAutoFitColumns,
  GridEvenColumns,
} from "../components/helper/GridLayout";

import { getSkills } from "../data/skills";
import { getInterests } from "../data/interests";
import { getProjects } from "../data/projects";

const skills = getSkills();
const interests = getInterests();
const projects = getProjects();

const Home = () => {
  return (
    <>
      <Section sectionName="intro" bgNumber="500">
        <Container>
          <div className="content">
            <MainHeadline>Moin, ich bin Johannes Vehring</MainHeadline>
            <p className="subtitle">Frontend Developer</p>
            <img
              className="img "
              src="./assets/20221129_Primephoto_G02A3621_hoch.jpg"
              alt="Johannes Vehring, trägt eine Brille"
            />
          </div>
        </Container>
      </Section>

      <Section sectionName="skills" bgNumber="300">
        <ContainerSmall>
          <HeaderElement title={skills.headline} />
          <GridAutoFitColumns>
            <CardWrapper
              cardsList={skills.content}
              bgName="bg-secondary-2"
            />
          </GridAutoFitColumns>
        </ContainerSmall>
      </Section>

      <Section sectionName="about" bgNumber="700">
        <ContainerSmall>
          <div className="person">
            <Headline2>über mich</Headline2>
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
              tätig sein. Auf <ALink href="xing.com">meinem Xing Profil</ALink>,
              könnt ihr meine letzten beruflichen Stationen sehen. Mein
              beruflicher Werdegang ist in meinem Lebenslauf enthalten, den ich
              Euch bei Interesse gerne zu sende.
            </p>
            <p>
              Im Juli 2022 habe ich eine online Zertifizierung bei{" "}
              <ALink href="scrimba.com">Scrimba</ALink>
              zum{" "}
              <ALink href="scrimba.com/learn/frontend">
                Frontend Developer
              </ALink>{" "}
              abgeschlossen und eine Weiterbildung Juli - November 2022 bei
              future Training & Consulting GmbH mit dem Schwerpunkt React
              durchgeführt.
            </p>
            <p>
              Suche ein sympatisches Team 👩🏼‍💻👨🏻‍💻👨🏿‍💻, welches nicht davor zurück
              schreckt, einen älteren Kerl als Junior Frontend Developer
              einzustellen. Auf{" "}
              <ALink href="github.com/">meinem GitHub Profil</ALink> könnt Ihr
              den Code 💻 zu der gesamten Webseite einsehen und euch einen
              Überblick über meine anderen Projekte und Interessen verschaffen.
            </p>
            <p>
              Eine 30-35 Std. 🕒 Stelle in Hamburg oder nord-westliches Umland -
              das wäre Perfekt. Anfangen kann ich ab sofort.
            </p>
          </div>
        </ContainerSmall>
      </Section>

      <Section sectionName="projects">
        <ContainerWide>
          <HeaderElement
            title={projects.headline}
            subTitle={projects.subheadline}
            classNames="flow bg-primary-700 px-block-12 px-inline-8 box-shadow-3 border-radius"
          />
          <GridEvenColumns>
            <CardAccentWrapper cardAccentList={projects.content} />
          </GridEvenColumns>
        </ContainerWide>
      </Section>

      <Section sectionName="interests" bgNumber="300">
        <ContainerSmall>
          <HeaderElement
            title={interests.headline}
            subTitle={interests.subheadline}
          />
          <GridAutoFitColumns>
            <CardWrapper
              cardsList={interests.content}
              bgName="bg-secondary-1"
            />
          </GridAutoFitColumns>
        </ContainerSmall>
      </Section>
    </>
  );
};

export default Home;
