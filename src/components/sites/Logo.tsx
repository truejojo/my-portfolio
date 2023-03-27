import { HashLink } from "react-router-hash-link";

interface ILogoProps {
  color: string;
}

const Logo = () => (
  <HashLink to="/#home">
    <span className="title | ff-accent fs-750">My Portfolio</span>
    <span className="subtitle uppercase fs-450">Johannes Vehring</span>
  </HashLink>
);
export default Logo;
