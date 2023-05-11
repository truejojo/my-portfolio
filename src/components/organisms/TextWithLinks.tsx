type TTextWithLinksProps = {
  text: string;
};

const TextWithLinks = ({ text }: TTextWithLinksProps) => {
  const linkRegex = /\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g;
  const sections = text.split(linkRegex);

  return (
    <p>
      {sections &&
        sections.map((section) => {
          if (section.match(linkRegex)) {
            const linkText = section.match(/\[(.*?)\]/)![1];
            // const linkText = section.match(/\[(.*?)\]/)
            const linkUrl = section!.match(/\((https?:\/\/[^\s)]+)\)/)![1];
           
            return (
              <a  href={linkUrl}>
                {linkText}
              </a>
            );
          } else {
            return <>{section}</>;
          }
        })}
    </p>
  );
};

export default TextWithLinks;
