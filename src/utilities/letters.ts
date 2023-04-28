import Letters from "../pages/games/Letters";

const LETTERS = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const LETTERS_SPLIT = [
  "A - E",
  "F - J",
  "K - 0",
  "P - T",
  "U - Z",
  "A - Z",
];
const GET_LETTER_START_END_VALUE = [
  { start: 0, end: 5 },
  { start: 5, end: 10 },
  { start: 10, end: 15 },
  { start: 15, end: 20 },
  { start: 20, end: 27 },
  { start: 0, end: 27},
];

export const generateLettersOutput = (gameRow: number) => {
  const { start, end } = GET_LETTER_START_END_VALUE[gameRow - 1];
  return LETTERS.slice(start, end);
};

export const LETTERS_INSTRUCTIONS = {
  title: "Buchstaben",
  messages: [
    ["presentation", "Präsentation"],
    ["paper", "Papier"],
    ["pc", "PC"],
  ],
};

export const OPEN_STATES = Array.from({ length: LETTERS_SPLIT.length }).map(
  (item, index) => {
    return {
      gameRow: index + 1,
      state: false,
    };
  }
);
