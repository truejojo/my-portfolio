type THeadline3Props = {
  children: React.ReactNode;
  titleColor?: string;
};

const Headline3 = ({ children, titleColor = "" }: THeadline3Props) => (
  <h3 className={`title ${titleColor}`}>{children}</h3>
);

export default Headline3;