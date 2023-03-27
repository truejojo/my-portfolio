import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaGithub, FaXingSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container" data-type="wide">
        <HashLink to="/#home">
          <span>My Portfolio</span>
          <span>Johannes Vehring</span>
        </HashLink>
        <ul>
          <li>
            <NavLink to="https://github.com/truejojo" target="_blank">
              <FaGithub />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="https://www.xing.com/profile/Johannes_Vehring2/cv"
              target="_blank"
            >
              <FaXingSquare />
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
