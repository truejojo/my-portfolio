export const getInterests = () => {
  const interests = {
    headline: "Interessen",
    subheadline: "was ich noch lernen will",
    content: [
      {
        id: 1,
        title: "Sprachen",
        items: [
          {
            id: 1,
            item: "mehr React/TS",
          },
          {
            id: 2,
            item: "Firebase",
          },
          {
            id: 3,
            item: "Node",
          },
        ],
      },
      {
        id: 2,
        title: "Kenntnisse",
        items: [
          {
            id: 1,
            item: "FP",
          },
          {
            id: 2,
            item: "TDD",
          },
          {
            id: 3,
            item: "und bei euch?",
          },
        ],
      },
    ],
  };
  return interests;
};
