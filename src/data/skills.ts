export const getSkills = () => {
  const skills = {
    headline: "Meine Fähigkeiten",
    subheadline: "",
    content: [
      {
        id: 1,
        title: "Sprachen",
        items: [
          {
            id: 1,
            item: "JS - ES6 - TS",
          },
          {
            id: 2,
            item: "React - ReactTS",
          },
          {
            id: 3,
            item: "HTML",
          },
          {
            id: 4,
            item: "CSS/SCSS",
          },
        ],
      },
      {
        id: 2,
        title: "Kenntnisse",
        items: [
          {
            id: 1,
            item: "Git",
          },
          {
            id: 2,
            item: "VSCode",
          },
          {
            id: 3,
            item: "Refactoring",
          },
          {
            id: 4,
            item: "Clean Code",
          },
          {
            id: 5,
            item: "Design System",
          },
        ],
      },
    ],
  };
  return skills;
};
