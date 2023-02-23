export interface ICardProjectProps {
  id: number;
  title: string;
  text: string;
  index: number;
}

const CardProject = ({ title, text, index }: ICardProjectProps) => (
  <div className="card">
    <h3 className={`ff-accent fs-700 fw-bold clr-accent-${index + 1}-300`} >{title}</h3>
    <p className="fs-600">{text}</p>
    <button className="button" data-type={`accent-${index + 1}`}>zum spiel</button>
  </div>
);

export default CardProject;
