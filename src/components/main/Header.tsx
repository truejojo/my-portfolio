import { useEffect } from "react";
import { ContainerWide } from "../helper/Container";
import { FlexSpaceBetween } from "../helper/Flex";
import useToggle from "../hooks/useToggle";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { BiMenu, BiX } from "react-icons/bi";

const Header = () => {
  const [isOpen, toggleIsOpen, setIsOpen] = useToggle({ initialState: false });

  return (
    <header id="home" className="site-header | bg-primary-700 px-block-4">
      <ContainerWide>
        <FlexSpaceBetween>
          <Logo />
          <div className="menu-toggler" onClick={toggleIsOpen}>
            {isOpen ? <BiX /> : <BiMenu />}
          </div>
          <MainNav isOpen={isOpen} />
        </FlexSpaceBetween>
      </ContainerWide>
    </header>
  );
};

export default Header;
