type TMainHeadlineProps = {
  title: string;
};
const MainHeadline = ({ title }: TMainHeadlineProps) => (
  <h1 className="title">{title}</h1>
);

export default MainHeadline;
