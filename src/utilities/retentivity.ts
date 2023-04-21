import { generateRandomNumber } from "./math";

const VOWELS = ["a", "e", "i", "o", "u"];
const CONSONANTS = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "z",
];
const VOWEL_LENGTH = VOWELS.length;
const CONSONANTS_LENGTH = CONSONANTS.length;

export const generateSyllables = (length: number) => {
  return Array.from({ length })
    .map(() => {
      return (
        CONSONANTS[generateRandomNumber(CONSONANTS_LENGTH)] +
        VOWELS[generateRandomNumber(VOWEL_LENGTH)]
      );
    })
    .toString()
    .replaceAll(",", "")
    .trim()
    .toUpperCase();
};

export const RETENTIVITYS = ["Silbenpaare", "Zahlenpaare", "Null & Eins"];

export const RETENTIVITY_INSTRUCTIONS = {
  title: "Merkfähigkeit",
  messages: [
    ["same", "Gleich"],
    ["new", "Neu"],
    ["stm", "KZMF"],
  ],
};

export type TOpenStatesProps = {
  gameRow: number;
  state: boolean;
};

export const OPEN_STATES = Array.from({ length: RETENTIVITYS.length }).map(
  (item, index) => {
    return {
    gameRow: index + 1,
      state: false,
    };
  }
);
