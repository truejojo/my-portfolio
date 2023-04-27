import { NUMBERS_1_TO_10, ZEROS_AND_ONES } from "./numbers";
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
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "z",
];

export const generateOutput = (gameRow: number, length: number) => {
  const game = RETENTIVITYS[gameRow - 1];

  switch (game) {
    case RETENTIVITYS[0]:
      return generateSyllables(length);

    case RETENTIVITYS[1]:
      return generateNumbers(length);

    case RETENTIVITYS[2]:
      return generateZeroAndOnes(length);

    default:
      return generateSyllables(length);
  }
};

const generateSyllables = (length: number) => {
  return Array.from({ length })
    .map(() => {
      return (
        CONSONANTS[generateRandomNumber(CONSONANTS.length)] +
        VOWELS[generateRandomNumber(VOWELS.length)]
      );
    })
    .toString()
    .replaceAll(",", "")
    .toUpperCase();
};

const generateNumbers = (length: number) => {
  return Array.from({ length })
    .map(() => {
      return (
        NUMBERS_1_TO_10[generateRandomNumber(NUMBERS_1_TO_10.length)] +
        NUMBERS_1_TO_10[generateRandomNumber(NUMBERS_1_TO_10.length)]
      );
    })
    .toString()
    .replaceAll(",", "")
    .toUpperCase();
};

const generateZeroAndOnes = (length: number) => {
  return Array.from({ length })
    .map(() => {
      return (
        ZEROS_AND_ONES[generateRandomNumber(ZEROS_AND_ONES.length)] +
        ZEROS_AND_ONES[generateRandomNumber(ZEROS_AND_ONES.length)]
      );
    })
    .toString()
    .replaceAll(",", "")
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

export const OPEN_STATES = Array.from({ length: RETENTIVITYS.length }).map(
  (item, index) => {
    return {
      gameRow: index + 1,
      state: false,
    };
  }
);
