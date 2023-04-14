import { NavLink } from "react-router-dom";
import { Container } from "../helper/Container";

const GameNav = () => (
  <div className="nav game-nav | bg-primary-900 px-block-4">
    <Container>
      <ul className="list | flex-group" role="list">
        <li>
          <NavLink to="/games" className={`px-2`}>
            Games
          </NavLink>
        </li>
        <li className="mx-left-auto">
          <NavLink
            to="numbers"
            className={`px-block-2 px-inline-6 bg-secondary-1-700`}
          >
            Zahlen
          </NavLink>
        </li>
        <li>
          <NavLink
            to="letters"
            className={`px-block-2 px-inline-6 bg-secondary-2-700`}
          >
            Buchstaben
          </NavLink>
        </li>
        <li className="mx-right-auto">
          <NavLink
            to="retentivity"
            className={`px-block-2 px-inline-6 bg-secondary-3-700`}
          >
            Merkfähigkeit
          </NavLink>
        </li>
      </ul>
    </Container>
  </div>
);

export default GameNav;
