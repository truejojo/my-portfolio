import { useEffect, useState, useRef } from "react";
import { Container } from "../components/helper/Container";
import Button from "../components/assets/Button";
import HeaderElement from "../components/elements/HeaderElement";
import GameForm from "../components/assets/GameForm";
import Section from "../components/organisms/Section";
import ToggleShowWrapper from "../components/organisms/ToggleShowWrapper";
import useString from "../components/hooks/useString";
import useToggle from "../components/hooks/useToggle";
import { compareStrings } from "../utilities/output";
import { generateRandomNumber } from "../utilities/math";

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

  const [syllablesOutput, setSyllablesOutput] = useString();
  const [syllablesInput, setSyllablesInput] = useString();
  const [feedback, setFeedback] = useString();
  const [isFirst, toggleIsFirst, setIsFirst] = useToggle();
  const [isPlaying, toggleIsPlaying, setIsPlaying] = useToggle({
    initialState: false,
  });
  const [isOutput, toggleIsOutput, setIsOutput] = useToggle();

  const inputRef = useRef<HTMLInputElement>(null);

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

  return (
    <Section sectionName="games-start" classNames="text-center">
      <Container>
        <HeaderElement
          title="Wie viele Silben kannst Du Dir merken?"
          subTitle="Probiere es aus"
          classNames=""
          isH1={true}
        />
        <GameForm classNames="bg-primary-900">
          <ToggleShowWrapper isShowing={isPlaying}>
            <ToggleShowWrapper isShowing={isOutput}>
              <p className="fs-500 letter-spacing-wide">{syllablesOutput}</p>
              <Button onClick={showUserInputField}>Ok</Button>
            </ToggleShowWrapper>
            <ToggleShowWrapper isShowing={!isOutput}>
              <input
                type="text"
                value={syllablesInput.toUpperCase()}
                onChange={(event) => setSyllablesInput(event.target.value)}
                // required
                ref={inputRef}
                className="fs-500 text-center mx-auto letter-spacing-default fw-bold"
                style={{
                  width: `calc(6.25rem + ${
                    syllablesOutput.length * 1.5625
                  }rem)`,
                }}
              />
              <Button onClick={checkForNextRound}>vergleichen</Button>
            </ToggleShowWrapper>
          </ToggleShowWrapper>
          <ToggleShowWrapper isShowing={!isPlaying}>
            {feedback && <p>{feedback}</p>}
            <Button onClick={onNewGame}>
              {isFirst ? "Spiel starten" : "nochmal spielen"}
            </Button>
          </ToggleShowWrapper>
        </GameForm>
      </Container>
    </Section>
  );
};

export default Games;
