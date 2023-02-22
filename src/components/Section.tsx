import Card from "./Card";
import { ICartProps } from "./Card";

export type TAccent = "1" | "2" | "3";

interface ISectionProps {
  headline: string;
  subheadline?: string;
  content: ICartProps[];
  idcn: string;
  accent: TAccent;
}

const Section = ({ headline, subheadline, content, idcn, accent }: ISectionProps) => (
  <section id={idcn} className={`bg-primary-300 ${idcn}`}>
    <div className="container" data-type="small">
      <header className="text-center  m-bottom-48">
        <h2 className="fs-800">{headline}</h2>
        {subheadline && <p className="fs-600">{subheadline}</p>}
      </header>

      <div className="g-auto-fit-columns">
        {content.map((item) => (
          <Card key={item.id} {...item} accent={accent} />
        ))}
      </div>
    </div>
  </section>
);

export default Section;
