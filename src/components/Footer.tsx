import { NavLink } from "react-router-dom";
import { FaGithub, FaXingSquare } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="site-component | bg-primary-900 p-block-48 mx-top-auto">
      <div className="container flex-space-between" data-type="wide">
        <Logo color="clr-accent-2-500" />
        <ul className="social-media-nav | flex-group clr-accent-2-500 fs-700" role="list">
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
