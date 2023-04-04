type THeadline2Props = {
  children: React.ReactNode;
};

const Headline2 = ({ children }: THeadline2Props) => (
  <h2 className="title">{children}</h2>
);

export default Headline2;
