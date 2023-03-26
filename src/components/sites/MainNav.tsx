import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MainNav = () => {
  return (
    <nav>
      <ul>
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
  )
}

export default MainNav