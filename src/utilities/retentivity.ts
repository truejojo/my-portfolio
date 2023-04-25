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
const NUMBERS_1_TO_10 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const ZEROS_AND_ONES = ["0", "1"];

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
