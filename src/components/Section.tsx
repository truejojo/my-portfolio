import Card from "./Card";
import { IItemProps } from "./Item";

// export interface IItemProps {
//   id: number;
//   item: string;
// }

export interface IContentProps {
  id: number;
  subtitle: string;
  items: IItemProps[];
}

interface ISectionObjProps {
  title: string;
  content: IContentProps[];
}

const Section = ({ title, content }: ISectionObjProps) => (
  <section id="skills" className="skills | bg-primary-300">
    <div className="container">
      <h2 className="text-center fs-800 m-bottom-48">{title}</h2>

      <div className="g-auto-fit-columns">
        {content.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default Section;
