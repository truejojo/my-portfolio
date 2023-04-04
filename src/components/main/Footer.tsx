import { ContainerWide } from "../helper/Container";
import { FlexSpaceBetween } from "../helper/Flex";
import Logo from "./Logo";
import SocialMediaNav from "./SocialMediaNav";

const Footer = () => {
  return (
    <footer className="site-footer | bg-primary-900 px-block-12">
      <ContainerWide>
        <FlexSpaceBetween>
          <Logo />
          <SocialMediaNav />
        </FlexSpaceBetween>
      </ContainerWide>
    </footer>
  );
};

export default Footer;
