import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul className="flex-group fs-450" role="list">
        <li>
          <Link to="/">Home</Link>
        </li>
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
          <Link to="games">Games</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
