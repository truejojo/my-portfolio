import Section from "../../components/organisms/Section";
import HeaderElement from "../../components/elements/HeaderElement";
import { Container } from "../../components/helper/Container";

const Letters = () => {
  return (
    <Section
      sectionName="letters"
      classNames="games | text-center clr-secondary-2-300"
    >
      <Container>
        <HeaderElement
          title="Buchstaben"
          subTitle="Buchstaben oder Alphabet, worauf hast Du lust zu üben?"
          classNames=""
          isH1={true}
        />
      </Container>
    </Section>
  );
};

export default Letters;
