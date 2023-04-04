import HeaderElement from "../components/elements/HeaderElement";
import { ContainerSmall } from "../components/helper/Container";
import { GridAutoFitColumns } from "../components/helper/GridLayout";
import Section from "../components/organisms/Section";

import { getInterests } from "../data/interests2";
import { getSkills } from "../data/skills";
const interests = getInterests();
const skills = getSkills();

type TItemsProps = {
  id: number;
  item: string;
};
type TCardSkillsProps = {
  id: number;
  title: string;
  items: TItemsProps[];
};
type TElementsProps = {
  id: number;
  element: string;
};
type TCardInterestsProps = {
  id: number;
  headline: string;
  elements: TElementsProps[];
};

type TGenericListElemProps = {
  children: React.ReactNode;
};

const GenericListElem = ({children}: TGenericListElemProps) => {
  return (
    <li>{children}</li>
  )
};

type TGenericListProps<S extends { id: number }> = {
  list: S[];
  //  getElem: (elem: S) => string;
};

const GenericList = <S extends { id: number }>({
  list
  // getElem
}: TGenericListProps<S>) => {
  return (
    <ul>
      {list.map((elem) => (
        // <li key={elem.id}>{elem.id}</li>
        <GenericListElem key={elem.id} >
          {elem.id}
          </GenericListElem>
        // <li key={elem.id}>{getElem(elem)}</li>
      ))}
    </ul>
  );
};

type TGenericCardProps<T extends { id: number }, S> = {
  cards: T[];
  getLabel: (card: T) => string;
  getArray: (card: T) => S[];
};

const GenericCard = <T extends { id: number }, S extends { id: number }>({
  cards,
  getLabel,
  getArray,
}: TGenericCardProps<T, S>) => {
  return (
    <>
      {cards.map((card) => (
        <div key={card.id}>
          <h2>{getLabel(card)}</h2>
          <GenericList list={getArray(card)} />
        </div>
      ))}
    </>
  );
};

const Generic = () => {
  return (
    <Section sectionName="generic-card">
      <ContainerSmall>
        <HeaderElement title="Generic Card" />
        <GridAutoFitColumns>
          <GenericCard
            cards={interests.content}
            getLabel={(card) => card.headline}
            getArray={(card) => card.elements}
          />
        </GridAutoFitColumns>
        <br /> <hr />
        <br />
        <GridAutoFitColumns>
          <GenericCard
            cards={skills.content}
            getLabel={(card) => card.title}
            getArray={(card) => card.items}
          />
        </GridAutoFitColumns>
      </ContainerSmall>
    </Section>
  );
};

export default Generic;