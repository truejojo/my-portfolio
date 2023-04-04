type TSectionProps = {
  sectionName: string;
  children: React.ReactNode;
  bgNumber?: string;
};

const Section = ({ children, sectionName, bgNumber }: TSectionProps) => {
  return (
    <section
      id={sectionName}
      className={`${sectionName} | bg-primary-${bgNumber}`}
    >
      {children}
    </section>
  );
};

export default Section;
