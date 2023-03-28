import { HashLink } from "react-router-hash-link";

interface ILogoProps {
  color: string;
}

const Logo = () => (
  <div className="logo">
    <HashLink to="/#home">
      <span className="title">My Portfolio</span>
      <span className="subtitle">Johannes Vehring</span>
    </HashLink>
  </div>
);
export default Logo;
