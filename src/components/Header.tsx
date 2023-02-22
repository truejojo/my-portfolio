import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
  return (
    <header id="home" className="site-component | bg-primary-700 p-block-28">
      <div className="container flex-space-between" data-type="wide">
        <Logo color="clr-neutral-300" />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
