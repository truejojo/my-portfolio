export const getInterests = () => {
  const interests = {
    headline: "Interessen",
    subheadline: "was ich noch lernen will",
    content: [
      {
        id: 1,
        headline: "Sprachen",
        elements: [
          {
            id: 1,
            element: "mehr React/TS",
          },
          {
            id: 2,
            element: "Firebase",
          },
          {
            id: 3,
            element: "Node",
          },
        ],
      },
      {
        id: 2,
        headline: "Kenntnisse",
        elements: [
          {
            id: 1,
            element: "FP",
          },
          {
            id: 2,
            element: "TDD",
          },
          {
            id: 3,
            element: "und bei euch?",
          },
        ],
      },
    ],
  };
  return interests;
};