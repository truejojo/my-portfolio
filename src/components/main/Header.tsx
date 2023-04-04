import { ContainerWide } from "../helper/Container";
import { FlexSpaceBetween } from "../helper/Flex";
import Logo from "./Logo";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header id="home" className="site-header | bg-primary-700 px-block-4">
      <ContainerWide>
        <FlexSpaceBetween>
          <Logo />
          <MainNav />
        </FlexSpaceBetween>
      </ContainerWide>
    </header>
  );
};

export default Header;
