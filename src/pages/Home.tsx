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

import { DocumentData, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import TextWithLinksWrapper from "../components/organisms/TextWithLinksWrapper";

const Home = () => {
  const query = collection(db, "homepage");
  const [homepage, loading, error] = useCollectionData(query);
  const [intro, setIntro] = useState<DocumentData>();
  const [skills, setSkills] = useState<DocumentData>();
  const [about, setAbout] = useState<DocumentData>();
  const [projects, setprojects] = useState<DocumentData>();
  const [interests, setinterests] = useState<DocumentData>();

  useEffect(() => {
    homepage?.map((doc) => {
      return (
        doc.name === "intro" && setIntro(doc),
        doc.name === "skills" && setSkills(doc),
        doc.name === "about" && setAbout(doc),
        doc.name === "projects" && setprojects(doc),
        doc.name === "interests" && setinterests(doc)
      );
    });
  }, [homepage]);

  return (
    <>
      {loading && <p>Loading...</p>}

      {error && <p>Da ist was schief gelaufen... Sorry!</p>}

      <Section sectionName="intro" bgNumber="500">
        <Container>
          <div className="content">
            <MainHeadline>{intro?.title}</MainHeadline>
            <p className="subtitle">{intro?.subTitle}</p>
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
          <HeaderElement
            title={skills?.headline}
            subTitle={skills?.subHeadline}
          />
          <GridAutoFitColumns>
            <CardWrapper
              path={`homepage/${skills?.name}/content`}
              bgName="bg-secondary-1"
            />
          </GridAutoFitColumns>
        </ContainerSmall>
      </Section>

      <Section sectionName="about" bgNumber="700">
        <ContainerSmall>
          <TextWithLinksWrapper path={`homepage/${about?.name}/content`} />
          {/* <div className="person">
            <Headline2>Über mich</Headline2>
            <p className="text">
              Ich bin ein Familienmensch. Papa, Ehemann und leidenschaftlicher
              Programmierer 👨‍💻. Fahre gerne Fahrrad 🚲 und mag Fussball ⚽️.
            </p>
            <span className="img">👨‍👩‍👧‍👦</span>
          </div> */}

          {/* <div className="body-text | flow"> */}
            {/* <p>
              2016 habe ich meine Umschulung zum Anwendungsentwickler
              erfolgreich abgeschlossen 👨‍🎓, nun möchte ich auch in diesem Beruf
              tätig sein. Auf href="xing.com" [meinem Xing Profil], könnt ihr
              meine letzten beruflichen Stationen sehen. Mein beruflicher
              Werdegang ist in meinem Lebenslauf enthalten, den ich Euch bei
              Interesse gerne zu sende.
            </p> */}
            {/* <p>
              2016 habe ich meine Umschulung zum Anwendungsentwickler
              erfolgreich abgeschlossen 👨‍🎓, nun möchte ich auch in diesem Beruf
              tätig sein. Auf <ALink href="xing.com">meinem Xing Profil</ALink>,
              könnt ihr meine letzten beruflichen Stationen sehen. Mein
              beruflicher Werdegang ist in meinem Lebenslauf enthalten, den ich
              Euch bei Interesse gerne zu sende.
            </p> */}

            {/* <p>
              Im Juli 2022 habe ich eine online Zertifizierung bei
              href="scrimba.com" [Scrimba] zum href="scrimba.com/learn/frontend"
              [Frontend Developer] abgeschlossen und eine Weiterbildung Juli -
              November 2022 bei future Training & Consulting GmbH mit dem
              Schwerpunkt React durchgeführt.
            </p> */}
            {/* <p>
              Im Juli 2022 habe ich eine online Zertifizierung bei{" "}
              <ALink href="scrimba.com">Scrimba</ALink> zum{" "}
              <ALink href="scrimba.com/learn/frontend">
                Frontend Developer
              </ALink>{" "}
              abgeschlossen und eine Weiterbildung Juli - November 2022 bei
              future Training & Consulting GmbH mit dem Schwerpunkt React
              durchgeführt.
            </p> */}

            {/* <p>
              Suche ein sympatisches Team 👩🏼‍💻👨🏻‍💻👨🏿‍💻, welches nicht davor zurück
              schreckt, einen älteren Kerl als Junior Frontend Developer
              einzustellen. Auf href="github.com/" [meinem GitHub Profil] könnt
              Ihr den Code 💻 zu der gesamten Webseite einsehen und euch einen
              Überblick über meine anderen Projekte und Interessen verschaffen.
            </p> */}
            {/* <p>
              Suche ein sympatisches Team 👩🏼‍💻👨🏻‍💻👨🏿‍💻, welches nicht davor zurück
              schreckt, einen älteren Kerl als Junior Frontend Developer
              einzustellen. Auf{" "}
              <ALink href="github.com/">meinem GitHub Profil</ALink> könnt Ihr
              den Code 💻 zu der gesamten Webseite einsehen und euch einen
              Überblick über meine anderen Projekte und Interessen verschaffen.
            </p> */}

            {/* <p>
              Eine 30-35 Std. 🕒 Stelle in Hamburg oder nord-westliches Umland -
              das wäre Perfekt. Anfangen kann ich ab sofort.
            </p> */}
          {/* </div> */}
        </ContainerSmall>
      </Section>

      <Section sectionName="projects">
        <ContainerWide>
          <HeaderElement
            title={projects?.headline}
            subTitle={projects?.subHeadline}
            classNames="flow bg-primary-700 px-block-12 px-inline-8 box-shadow-3 border-radius"
          />
          <GridEvenColumns>
            <CardAccentWrapper path={`homepage/${projects?.name}/content`} />
          </GridEvenColumns>
        </ContainerWide>
      </Section>

      <Section sectionName="interests" bgNumber="300">
        <ContainerSmall>
          <HeaderElement
            title={interests?.headline}
            subTitle={interests?.subheadline}
          />
          <GridAutoFitColumns>
            <CardWrapper
              path={`homepage/${interests?.name}/content`}
              bgName="bg-secondary-1"
            />
          </GridAutoFitColumns>
        </ContainerSmall>
      </Section>
    </>
  );
};

export default Home;
