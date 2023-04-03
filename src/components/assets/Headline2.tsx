type THeadline2Props = {
  title: string;
};

const Headline2 = ({ title }: THeadline2Props) => (
  <h2 className="title">{title}</h2>
);

export default Headline2;
