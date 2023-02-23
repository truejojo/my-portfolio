import CardProject from "./CardProject";
import { ICardProjectProps } from "./CardProject";

interface ISectionProjectsProps {
  headline: string;
  subheadline: string;
  content: ICardProjectProps[];
  idcn: string;
}

const SectionProjects = ({
  headline,
  subheadline,
  content,
  idcn,
}: ISectionProjectsProps) => (
  <section id={idcn} className={`${idcn} text-center`}>
    <div className="container">
      <header className="header | m-bottom-48 p-48">
        <h2 className="fs-800">{headline}</h2>
        <p className="fs-600">{subheadline}</p>
      </header>
      <div className="g-auto-fit-columns">
        {content.length > 0 &&
          content.map((item, index) => (
            <CardProject {...item} index={index} />
          ))}
      </div>
    </div>
  </section>
);

export default SectionProjects;
