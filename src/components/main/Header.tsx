import Logo from "./Logo";
import MainNav from "./MainNav";

const Header = () => {
  return (
    <header id="home" className="site-header | bg-primary-700 px-block-4">
      <div className="container" data-type="wide">
        <div className="flex-space-between">
          <Logo />
          <MainNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
