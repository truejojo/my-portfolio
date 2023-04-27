export const GAME_NUMBERS_INSTRUCTINS = {
  title: "Reihe",
  messages: [
    ["presentation", "Präsentation"],
    ["paper", "Papier"],
    ["pc", "PC"],
  ],
};

export const NUMBERS_1_TO_10 = Array.from({ length: 10 }).map((item, index) => {
  return `${index + 1}`;
});

export const ZEROS_AND_ONES = ["0", "1"];

export const OPEN_STATES = Array.from({ length: NUMBERS_1_TO_10.length }).map(
  (item, index) => {
    return {
      gameRow: index + 1,
      state: false,
    };
  }
);
