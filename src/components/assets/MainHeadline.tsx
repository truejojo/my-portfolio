type TMainHeadlineProps = {
  children: React.ReactNode;
};
const MainHeadline = ({ children }: TMainHeadlineProps) => (
  <h1 className="title">{children}</h1>
);

export default MainHeadline;
