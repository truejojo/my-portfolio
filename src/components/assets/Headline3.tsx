type THeadline3Props = {
  title: string;
};

const Headline3 = ({ title }: THeadline3Props) => (
  <h2 className="title">{title}</h2>
);

export default Headline3;