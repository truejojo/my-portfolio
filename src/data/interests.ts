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
            item: "mehr ReactTS",
          },
          {
            id: 2,
            item: "Remix",
          },
          {
            id: 3,
            item: "Firebase",
          },
          {
            id: 4,
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
            item: "TDD - RTL",
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
