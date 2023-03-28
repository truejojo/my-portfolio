import Logo from "./Logo";
import SocialMediaNav from "./SocialMediaNav";

const Footer = () => {
  return (
    <footer className="site-footer | bg-primary-900 px-block-12">
      <div className="container" data-type="wide">
        <div className="flex-space-between">
          <Logo />
          <SocialMediaNav />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
