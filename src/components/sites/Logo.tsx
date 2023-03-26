import { HashLink } from "react-router-hash-link";

interface ILogoProps {
  color: string;
}

const Logo = ({ color }: ILogoProps) => (
  <HashLink to="/#home" className={`logo | grid ${color}`}>
    <span className="title | ff-accent fs-750">My Portfolio</span>
    <span className="subtitle uppercase fs-450">Johannes Vehring</span>
  </HashLink>
);
export default Logo;
