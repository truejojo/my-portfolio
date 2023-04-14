import { Link } from "react-router-dom";

type TAlinkButtonProps = {
  linkTo: string;
  children: React.ReactNode;
  dataType?: string;
};

const ALinkButton = ({linkTo, children, dataType}: TAlinkButtonProps) => (
  <Link to={`games/${linkTo}`} data-type={dataType} className="button">
    {children}
  </Link>
);

export default ALinkButton;
