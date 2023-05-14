type TTextWithLinksProps = {
  text: string;
};

const TextWithLinks = ({text}: TTextWithLinksProps) => {
  const linkRegex = /\[(.*?)\]\((https?:\/\/[^\s)]+)\)/g;
  const sections = text.split(linkRegex);
  console.log(sections);
  

  return (
    <p>
      {sections &&
        sections.map((section) => {
          if (section.match(linkRegex)) {
            const linkText = section.match(/\[(.*?)\]/)![1];
            // const linkText = section.match(/\[(.*?)\]/)
            const linkUrl = section!.match(/\((https?:\/\/[^\s)]+)\)/)![1];

            return <a key={Math.random()} href={linkUrl}>{linkText}</a>;
          } else {
            return <span key={Math.random()}>{section}</span>;
          }
        })}
      {/* {sections &&
        sections.map((section) => {
          if (section.match(linkRegex)) {
            const linkText = section.match(/\[(.*?)\]/)![1];
            // const linkText = section.match(/\[(.*?)\]/)
            const linkUrl = section!.match(/\((https?:\/\/[^\s)]+)\)/)![1];

            return <a key={Math.random()} href={linkUrl}>{linkText}</a>;
          } else {
            return <span key={Math.random()}>{section}</span>;
          }
        })} */}
        
    </p>
  );
};

export default TextWithLinks;
