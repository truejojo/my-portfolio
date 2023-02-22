export const getSkills = () => {
  const skills = {
    headline: "Meine Fähigkeiten",
    content: [
      {
        id: 1,
        title: "Sprachen",
        items: [
          {
            id: 1,
            item: "JS/ES6",
          },
          {
            id: 2,
            item: "React",
          },
          {
            id: 3,
            item: "ReactTS",
          },
          {
            id: 4,
            item: "HTML",
          },
          {
            id: 5,
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
        ],
      },
    ],
  };
  return skills;
};
