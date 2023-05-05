import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useAuth } from "../context/AuthProvider";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

type TMainNavProps = {
  isOpen: boolean;
};

const MainNav = ({ isOpen }: TMainNavProps) => {
  const toggleState = isOpen ? "open" : "close";
  const { user, logOut } = useAuth();

  return (
    <nav className={`nav main-nav ${toggleState}`}>
      <ul className="list" role="list">
        <li>
          <HashLink to="/#skills">Skills</HashLink>
        </li>
        <li>
          <HashLink to="/#about">About</HashLink>
        </li>
        <li>
          <HashLink to="/#projects">Projects</HashLink>
        </li>
        <li>
          <HashLink to="/#interests">Interests</HashLink>
        </li>
        <li>
          <NavLink to="games">Games</NavLink>
        </li>
        {user ? (
          <li>
            <span className="a-span" onClick={logOut}>
              <FaSignOutAlt />
            </span>
          </li>
        ) : (
          <li>
            <NavLink to="login">
              <FaSignInAlt />
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MainNav;
