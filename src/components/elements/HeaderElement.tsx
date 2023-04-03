import Headline2 from "../assets/Headline2";

type THeaderElementProps = {
  title: string;
  subTitle?: string;
};

const HeaderElement = ({ title, subTitle }: THeaderElementProps) => (
  <header className="section-header">
    <Headline2 title={title} />
    {subTitle && <p>{subTitle}</p>}
  </header>
);

export default HeaderElement;
