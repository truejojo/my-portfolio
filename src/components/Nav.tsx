import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul className="flex-group fs-450" role="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="games">Games</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
