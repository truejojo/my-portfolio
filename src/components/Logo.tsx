import { NavLink } from "react-router-dom";

interface ILogoProps {
  color: string
}

const Logo = ({color}: ILogoProps) => (
  <NavLink to="/" className={`logo | grid ${color}`}>
    <span className="title | ff-accent fs-750">My Portfolio</span>
    <span className="subtitle uppercase fs-450">Johannes Vehring</span>
  </NavLink>
);
export default Logo;
