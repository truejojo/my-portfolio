import { NavLink } from "react-router-dom";
import { Container } from "../helper/Container";
import useToggle from "../hooks/useToggle";
import { BiMenu, BiX } from "react-icons/bi";

const GameNav = () => {
  const [isOpen, toggleIsOpen, setIsOpen] = useToggle({ initialState: false });

  return (
    <div className={`nav game-nav | bg-primary-900 px-block-4 ${isOpen}`}>
      <Container>
        <div className="game-nav-inner">
          <div className="menu-toggler" onClick={toggleIsOpen}>
            {isOpen ? <BiX /> : <BiMenu />}
          </div>
          <ul className={`list ${isOpen ? "open" : "close"}`} role="list">
            <li className="games-link">
              <NavLink to="/games"  className={`bg-primary-700`}>
                Games
              </NavLink>
            </li>
            <li>
              <NavLink
                to="numbers"
                className={`bg-secondary-1-700`}
              >
                Zahlen
              </NavLink>
            </li>
            <li>
              <NavLink
                to="letters"
                className={`bg-secondary-2-700`}
              >
                Buchstaben
              </NavLink>
            </li>
            <li>
              <NavLink
                to="retentivity"
                className={`bg-secondary-3-700`}
              >
                Merkfähigkeit
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default GameNav;
