import Card from "./Card"

interface ISectionProjectProps {
  headline: string;
  subheadline: string;
  content: [];
}

const SectionProject = ({headline, subheadline, content}: ISectionProjectProps) => {
  return (
    <section id="projects" className={`bg-primary-300 projects`}>
    <div className="container" data-type="wide">
      <header className="text-center  m-bottom-48">
        <h2 className="fs-800">{headline}</h2>
        {subheadline && <p className="fs-600">{subheadline}</p>}
      </header>

      <div className="g-auto-fit-columns">
        {content.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  </section>
  )
}

export default SectionProject