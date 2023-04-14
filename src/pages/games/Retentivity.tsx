import Section from "../../components/organisms/Section";
import { Container } from "../../components/helper/Container";
import HeaderElement from "../../components/elements/HeaderElement";

const Retentivity = () => {
  return (
    <Section
      sectionName="retentivity"
      classNames="games | text-center clr-secondary-3-300"
    >
      <Container>
        <HeaderElement
          title="Merkfähigkeit"
          subTitle="Silben, Zahlen oder Null und Einsen womit willst du spielen?"
          classNames=""
          isH1={true}
        />
      </Container>
    </Section>
  );
};

export default Retentivity;
