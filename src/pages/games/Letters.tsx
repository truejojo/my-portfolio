import React, { useEffect, useRef, useState } from "react";
import Section from "../../components/organisms/Section";
import { Container } from "../../components/helper/Container";
import GameWrapper from "../../components/organisms/GameWrapper";
import HeaderElement from "../../components/elements/HeaderElement";
import Dropdown from "../../components/organisms/Dropdown";
import {
  LETTERS_INSTRUCTIONS,
  LETTERS_SPLIT,
  OPEN_STATES,
  generateLettersOutput,
} from "../../utilities/letters";
import useToggle from "../../components/hooks/useToggle";
import GamePlayWrapper from "../../components/organisms/GamePlayWrapper";
import ToggleShowWrapper from "../../components/organisms/ToggleShowWrapper";
import GameForm from "../../components/assets/GameForm";
import GameOutput from "../../components/assets/GameOutput";
import GameInputButton from "../../components/assets/GameInputButton";
import useString from "../../components/hooks/useString";
import useCounter from "../../components/hooks/useCounter";
import GameTaskOutput from "../../components/assets/GameTaskOutput";
import GameInputField from "../../components/assets/GameInputField";
import { compareStrings } from "../../utilities/output";
import useDropdown from "../../components/hooks/useDropdown";

const Letters = () => {
  const GAME_TYPE_STARTER = LETTERS_INSTRUCTIONS.messages[0][0];
  const GAME_NAME_STARTER = LETTERS_INSTRUCTIONS.messages[0][1];
  const GAME_NAME_SECOND = LETTERS_INSTRUCTIONS.messages[1][1];
  const GAME_NAME_THIRD = LETTERS_INSTRUCTIONS.messages[2][1];
  const TITLE = LETTERS_INSTRUCTIONS.title;
  const [
    gameRow,
    gameName,
    isFirst,
    toggleIsFirst,
    setIsFirst,
    isMenuActive,
    toggleIsMenuActive,
    setIsMenuActive,
    handleOpen,
    handleGameType,
    openRow
  ] = useDropdown({OPEN_STATES, GAME_TYPE_STARTER, GAME_NAME_STARTER});

  const [isPlaying, toggleIsPlaying, setIsPlaying] = useToggle({
    initialState: false,
  });
  const [currentLetters, setCurrentLetters] = useState<string[]>([]);

  const [taskOutput, setTaskOutput] = useString();
  const [userInputResult, setUserInputResult] = useString();

  const [isShowingTask, toggleIsShowingTask, setIsShowingTask] = useToggle();

  const [feedback, setFeedback] = useString();
  const [message, setMessage] = useString();

  const [correct, incrementCorrect, resetCorrect] = useCounter();
  const [turns, incrementTurns, resetTurns] = useCounter();

  const [isShow, setIsShow] = useState(true);

  // Refs
  const inputPlayGameRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputUserRef = useRef<HTMLInputElement>(null);
  const timeoutRef = useRef<number | undefined>(undefined);

  /* Game */
  const handlePlayGame = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFirst(false);
    setIsPlaying(true);
    toggleIsMenuActive();
    resetTurns(0);
    setUserInputResult("");
    setIsShow(true);
  };

  // Presentation
  const handleIncrementTask = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    incrementTurns();
  };

  // Paper
  const handleIsShowTask = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    toggleIsShowingTask();
  };
  const handleIsShowResult = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    toggleIsShowingTask();
    setIsShow(true);
    incrementTurns();
    setUserInputResult("");
  };

  useEffect(() => {
    setCurrentLetters(generateLettersOutput(gameRow));
    setTaskOutput(currentLetters[turns]);

    (gameName === GAME_NAME_SECOND || gameName === GAME_NAME_THIRD) &&
      (timeoutRef.current = setTimeout(() => {
        setIsShow(false);
      }, 2000));

    inputPlayGameRef.current && inputPlayGameRef.current.focus();
    inputUserRef.current && inputUserRef.current.focus();

    return () => clearInterval(timeoutRef.current);
  }, [isPlaying, isFirst, isMenuActive]);

  useEffect(() => {
    isShowingTask &&
      (setTaskOutput(currentLetters[turns]),
      (timeoutRef.current = setTimeout(() => {
        setIsShow(false);
      }, 2000)));

    inputUserRef.current && inputUserRef.current.focus();
    inputRef.current && inputRef.current.focus();

    return () => clearInterval(timeoutRef.current);
  }, [isShowingTask, isShow]);

  useEffect(() => {
    gameName === GAME_NAME_THIRD && compareStrings(taskOutput, userInputResult)
      ? (incrementCorrect(), setFeedback("Richtig"))
      : setFeedback("falsch");

    inputUserRef.current && inputUserRef.current.focus();
  }, [isShowingTask]);

  useEffect(() => {
    setTaskOutput(currentLetters[turns]);

    turns === currentLetters.length &&
      (gameName === GAME_NAME_THIRD
        ? setMessage(
            `Du hast ${correct} von ${
              currentLetters.length
            } richtig gemacht! Super, das waren die Buchstaben ${
              LETTERS_SPLIT[gameRow - 1]
            }. Nochmal spielen oder was anderes?`
          )
        : setMessage(
            `Super, das waren die Buchstaben ${
              LETTERS_SPLIT[gameRow - 1]
            }. Nochmal spielen oder was anderes?`
          ),
      setIsPlaying(false),
      resetTurns(0),
      resetCorrect(0));
  }, [turns]);

  const gameLettersPresentation = () => (
    <GameForm onSubmit={handleIncrementTask} classNames="bg-secondary-2-700">
      <GameOutput>
        <>
          <GameTaskOutput task={taskOutput} />
          <GameInputButton value="weiter" ref={inputUserRef} />
        </>
      </GameOutput>
    </GameForm>
  );

  const gameLetters = () => (
    <GameForm
      onSubmit={isShowingTask ? handleIsShowTask : handleIsShowResult}
      classNames="bg-secondary-2-700"
    >
      <GameOutput>
        {isShowingTask && (
          <>
            {isShow ? (
              <GameTaskOutput task={taskOutput} />
            ) : gameName === GAME_NAME_SECOND ? (
              <p>Schreibe den Buchstaben selber</p>
            ) : gameName === GAME_NAME_THIRD ? (
              <GameInputField
                maxLength={taskOutput.length + 4}
                value={userInputResult.toUpperCase()}
                ref={inputRef}
                onChange={(event) => setUserInputResult(event.target.value)}
              />
            ) : null}
            {!isShow && (
              <GameInputButton value="vergleichen" ref={inputUserRef} />
            )}
          </>
        )}
        {!isShowingTask && (
          <>
            {gameName === GAME_NAME_SECOND && (
              <GameTaskOutput task={taskOutput} />
            )}
            {gameName === GAME_NAME_THIRD && <p>{feedback}</p>}
            <GameInputButton value="nächster buchstabe" ref={inputUserRef} />
          </>
        )}
      </GameOutput>
    </GameForm>
  );

  return (
    <Section
      sectionName="letters"
      classNames="games | text-center clr-secondary-2-300"
    >
      <Container>
        <GameWrapper>
          <HeaderElement
            title="Buchstaben"
            subTitle="Welche Buchstaben aus dem Alphabet willst du üben?"
            classNames="game-header | mx-bottom-2"
            isH1={true}
          />
          <Dropdown
            handleOpen={handleOpen}
            handleGameType={handleGameType}
            gamesArray={LETTERS_SPLIT}
            instrucionsArray={LETTERS_INSTRUCTIONS}
            isPlaying={isPlaying}
            openRow={openRow}
            colorNumber={2}
          />

          <GamePlayWrapper>
            <ToggleShowWrapper isShowing={isPlaying}>
              {gameName === GAME_NAME_STARTER
                ? gameLettersPresentation()
                : gameLetters()}
            </ToggleShowWrapper>

            <ToggleShowWrapper isShowing={!isPlaying}>
              <GameForm
                onSubmit={handlePlayGame}
                classNames="bg-secondary-2-700"
              >
                <GameOutput>
                  {isFirst ? (
                    <p className="fs-500">{`${TITLE} ${
                      LETTERS_SPLIT[gameRow - 1]
                    } mit dem Spiel: ${gameName}`}</p>
                  ) : (
                    <p className="fs-500">{message}</p>
                  )}
                </GameOutput>

                <GameInputButton
                  value={isFirst ? "Spiel starten" : "nochmal spielen"}
                  ref={inputPlayGameRef}
                />
              </GameForm>
            </ToggleShowWrapper>
          </GamePlayWrapper>
        </GameWrapper>
      </Container>
    </Section>
  );
};

export default Letters;
