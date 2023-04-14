import { useEffect, useState, useRef } from "react";
import { Container } from "../components/helper/Container";
import Button from "../components/assets/Button";
import HeaderElement from "../components/elements/HeaderElement";
import GameForm from "../components/assets/GameForm";
import Section from "../components/organisms/Section";
import GamePlayWrapper from "../components/organisms/GamePlayWrapper";

const Games = () => {
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
  const VOWEL_MAX = VOWELS.length;
  const CONSONANTS_MAX = CONSONANTS.length;
  const LENGTH_START = 1;

  const [syllablesOutput, setSyllablesOutput] = useState("");
  const [syllablesInput, setSyllablesInput] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isFirst, setIsFirst] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOutput, setIsOutput] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const generateRandomNumber = (randomNumber: number) =>
    Math.floor(Math.random() * randomNumber);

  const generateSyllables = (length: number) => {
    return Array.from({ length })
      .map(() => {
        return (
          CONSONANTS[generateRandomNumber(CONSONANTS_MAX)] +
          VOWELS[generateRandomNumber(VOWEL_MAX)]
        );
      })
      .toString()
      .replaceAll(",", "")
      .trim()
      .toUpperCase();
  };

  const compareStrings = (str1: string, str2: string) =>
    str1.trim().toUpperCase() === str2.trim().toUpperCase() ? true : false;

  const getFinalMessage = (turns: number) =>
    turns === 1
      ? `Upps, was ist schief gelaufen?`
      : `Du hast Dir ${turns - 1} Silbenpaare merken können`;

  const setFinalResult = () => {
    setFeedback(getFinalMessage(syllablesOutput.length / 2));
    setIsPlaying(false);
  };

  const showUserInputField = () => {
    setIsOutput(false);
  };

  const checkForNextRound = () => {
    setIsOutput(true);
  };

  const setUpGame = () => {
    setSyllablesOutput("");
    setSyllablesInput("");
    setSyllablesOutput(generateSyllables(LENGTH_START));
  };

  const resetForNewRound = () => {
    setSyllablesOutput("");
    setSyllablesInput("");
    setSyllablesOutput(generateSyllables(syllablesOutput.length / 2 + 1));
  };

  useEffect(() => {
    isOutput && syllablesOutput && syllablesInput
      ? compareStrings(syllablesOutput, syllablesInput)
        ? resetForNewRound()
        : setFinalResult()
      : null;
    inputRef.current && inputRef.current.focus();
  }, [isOutput, syllablesOutput, syllablesInput]);

  useEffect(() => {
    isPlaying && setUpGame();
  }, [isPlaying]);

  const onNewGame = () => {
    setIsFirst(false);
    setIsPlaying(true);
    setIsOutput(true);
  };

  const handleCheckForNextRound = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    checkForNextRound();
  };

  return (
    <Section sectionName="games-start" classNames="text-center">
      <Container>
        <HeaderElement
          title="Wie viele Silben kannst Du Dir merken?"
          subTitle="Probiere es aus"
          classNames=""
          isH1={true}
        />
        <GamePlayWrapper>
          <div style={{ display: isPlaying ? "block" : "none" }}>
            <GameForm isTrue={isOutput} forTrue="grid" forFalse="none">
              <p className="fs-500 letter-spacing-wide">{syllablesOutput}</p>
              <Button onClick={showUserInputField}>Ok</Button>
            </GameForm>
            <GameForm
              isTrue={isOutput}
              forTrue="none"
              forFalse="grid"
              onSubmit={handleCheckForNextRound}
            >
              <input
                type="text"
                value={syllablesInput.toUpperCase()}
                onChange={(event) => setSyllablesInput(event.target.value)}
                required
                ref={inputRef}
                className="fs-500 text-center mx-auto letter-spacing-default fw-bold"
                style={{
                  width: `calc(6.25rem + ${
                    syllablesOutput.length * 1.5625
                  }rem)`,
                }}
              />
              <Button type="submit">vergleichen</Button>
            </GameForm>
          </div>
          <GameForm isTrue={isPlaying} forTrue="none" forFalse="grid">
            {feedback && <p>{feedback}</p>}
            <Button onClick={onNewGame}>
              {isFirst ? "Spiel starten" : "nochmal spielen"}
            </Button>
          </GameForm>
        </GamePlayWrapper>
      </Container>
    </Section>
  );
};

export default Games;
