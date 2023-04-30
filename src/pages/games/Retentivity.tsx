import { useEffect, useRef, useState } from "react";
import Section from "../../components/organisms/Section";
import HeaderElement from "../../components/elements/HeaderElement";
import { Container } from "../../components/helper/Container";
import GameWrapper from "../../components/organisms/GameWrapper";
import Dropdown from "../../components/organisms/Dropdown";
import {
  OPEN_STATES,
  RETENTIVITYS,
  RETENTIVITY_INSTRUCTIONS,
  generateRetentivityOutput,
} from "../../utilities/retentivity";
import useToggle from "../../components/hooks/useToggle";
import GamePlayWrapper from "../../components/organisms/GamePlayWrapper";
import ToggleShowWrapper from "../../components/organisms/ToggleShowWrapper";
import GameForm from "../../components/assets/GameForm";
import GameInputButton from "../../components/assets/GameInputButton";
import GameInputNumber from "../../components/assets/GameInputNumber";
import GameOutput from "../../components/assets/GameOutput";
import useString from "../../components/hooks/useString";
import GameInputField from "../../components/assets/GameInputField";
import useCounter from "../../components/hooks/useCounter";
import { compareStrings } from "../../utilities/output";
import GameTaskOutput from "../../components/assets/GameTaskOutput";
import useDropdown from "../../components/hooks/useDropdown";

const Retentivity = () => {
  const GAME_TYPE_STARTER = RETENTIVITY_INSTRUCTIONS.messages[0][0];
  const GAME_NAME_STARTER = RETENTIVITY_INSTRUCTIONS.messages[0][1];
  const GAME_NAME_SECOND = RETENTIVITY_INSTRUCTIONS.messages[1][1];
  const GAME_NAME_THIRD = RETENTIVITY_INSTRUCTIONS.messages[2][1];
  const TITLE = RETENTIVITY_INSTRUCTIONS.title;
  const GAME_RETENTIVITY_LENGTH_STARTER = 2;
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
  const [tasksLength, setTaskLength] = useState<number>(10);
  const [syllablesLength, setSyllablesLength] = useState<number>(4);

  const [taskOutput, setTaskOutput] = useString();
  const [userInputResult, setUserInputResult] = useString();

  const [isShowingTask, toggleIsShowingTask, setIsShowingTask] = useToggle();
  const [isShowingInput, toggleIsShowingInput, setIsShowingInput] = useToggle({
    initialState: false,
  });
  const [isShowingFeedback, toggleIsShowingFeedback, setIsShowingFeedback] =
    useToggle({ initialState: false });

  const [feedback, setFeedback] = useString();
  const [message, setMessage] = useString();

  const [correct, incrementCorrect, resetCorrect] = useCounter();
  const [turns, incrementTurns, resetTurns] = useCounter();

  // Refs
  const inputPlayGameRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputUserRef = useRef<HTMLInputElement>(null);

  /* Game */
  const handlePlayGame = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFirst(false);
    setIsPlaying(true);
    toggleIsMenuActive();
    gameName === GAME_NAME_THIRD ? resetCorrect(0) : resetCorrect(1);
    resetTurns(0);
    setUserInputResult("");
  };

  const handleIsShowingTask = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    toggleIsShowingTask();
    toggleIsShowingInput();
  };

  const handleIsShwoingInput = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    gameName === GAME_NAME_THIRD
      ? (toggleIsShowingInput(), toggleIsShowingFeedback())
      : (toggleIsShowingInput(), toggleIsShowingTask(), incrementTurns());
  };

  const handleIsShowingFeedback = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    toggleIsShowingFeedback();
    toggleIsShowingTask();
    incrementTurns();
  };

  useEffect(() => {
    gameName === GAME_NAME_THIRD
      ? setTaskOutput(generateRetentivityOutput(gameRow, syllablesLength))
      : setTaskOutput(
          generateRetentivityOutput(gameRow, GAME_RETENTIVITY_LENGTH_STARTER)
        );

    inputPlayGameRef.current && inputPlayGameRef.current.focus();
    inputUserRef.current && inputUserRef.current.focus();
  }, [isPlaying, isFirst, isMenuActive]);

  useEffect(() => {
    inputUserRef.current && inputUserRef.current.focus();
  }, [isShowingTask]);

  useEffect(() => {
    gameName === GAME_NAME_THIRD && compareStrings(taskOutput, userInputResult)
      ? (incrementCorrect(), setFeedback("Richtig"))
      : setFeedback("Falsch");

    inputRef.current && inputRef.current.focus();
  }, [isShowingInput]);

  useEffect(() => {
    setUserInputResult("");
    setTaskOutput(generateRetentivityOutput(gameRow, syllablesLength));

    inputUserRef.current && inputUserRef.current.focus();
  }, [isShowingFeedback]);

  useEffect(() => {
    if (gameName === GAME_NAME_THIRD) {
      turns === tasksLength &&
        (setMessage(`Du hast ${correct} von ${tasksLength} Runden richtig.`),
        setIsPlaying(false),
        resetCorrect(0),
        resetTurns(0));
    }
    if (
      gameName !== GAME_NAME_THIRD &&
      (gameName === GAME_NAME_STARTER || gameName === GAME_NAME_SECOND)
    ) {
      compareStrings(taskOutput, userInputResult)
        ? (gameName === GAME_NAME_STARTER &&
            setTaskOutput(taskOutput + generateRetentivityOutput(gameRow, 1)),
          gameName === GAME_NAME_SECOND &&
            setTaskOutput(
              generateRetentivityOutput(
                gameRow,
                turns + GAME_RETENTIVITY_LENGTH_STARTER
              )
            ),
          incrementCorrect(),
          setUserInputResult(""))
        : (setMessage(
            correct > 1
              ? `Du hast Dir ${correct} Silbenpaare merken können`
              : `Upps, was ist denn da schief gelaufen?`
          ),
          setIsPlaying(false),
          resetTurns(0));
    }
  }, [turns]);

  const gameShortTimeMemory = () => (
    <>
      <GameForm
        onSubmit={
          gameName === GAME_NAME_THIRD
            ? isShowingTask
              ? handleIsShowingTask
              : isShowingInput
              ? handleIsShwoingInput
              : handleIsShowingFeedback
            : isShowingTask
            ? handleIsShowingTask
            : handleIsShwoingInput
        }
        classNames="bg-secondary-3-900"
      >
        <GameOutput>
          {isShowingTask && (
            <>
              <GameTaskOutput task={taskOutput} />
              <GameInputButton value="Ok" ref={inputUserRef} />
            </>
          )}

          {isShowingInput && (
            <>
              <GameInputField
                maxLength={
                  gameName === GAME_NAME_THIRD
                    ? 4 + syllablesLength
                    : taskOutput.length + 4
                }
                value={userInputResult.toUpperCase()}
                ref={inputRef}
                onChange={(event) => setUserInputResult(event.target.value)}
                inputWidth="100%"
              />
              <GameInputButton value="vergleichen" ref={inputUserRef} />
            </>
          )}

          {isShowingFeedback && (
            <>
              <p>{feedback}</p>
              <GameInputButton value="nächste Aufgabe" ref={inputUserRef} />
            </>
          )}
        </GameOutput>
      </GameForm>
    </>
  );

  return (
    <Section
      sectionName="retentivity"
      classNames="games | text-center clr-secondary-3-300"
    >
      <Container>
        <GameWrapper>
          <HeaderElement
            title="Merkfähigkeit"
            subTitle="Zum üben und verbessern der Kurz-Zeit-Merkfähigkeit."
            classNames="game-header | mx-bottom-2"
            isH1={true}
          />

          <Dropdown
            handleOpen={handleOpen}
            handleGameType={handleGameType}
            gamesArray={RETENTIVITYS}
            instrucionsArray={RETENTIVITY_INSTRUCTIONS}
            isPlaying={isPlaying}
            openRow={openRow}
            colorNumber={3}
          />

          <GamePlayWrapper>
            <ToggleShowWrapper isShowing={isPlaying}>
              {gameShortTimeMemory()}
            </ToggleShowWrapper>
            
            <ToggleShowWrapper isShowing={!isPlaying}>
              <GameForm
                onSubmit={handlePlayGame}
                classNames="bg-secondary-3-900"
              >
                <GameOutput>
                  {isFirst ? (
                    <>
                      <p className="fs-500">{`${TITLE}-${
                        RETENTIVITYS[gameRow - 1]
                      } mit dem Spiel: ${gameName}`}</p>
                      {gameName === GAME_NAME_THIRD && (
                        <>
                          <div>
                            <GameInputNumber
                              idNumber="taskLength"
                              min="8"
                              max="12"
                              value={tasksLength}
                              onChange={setTaskLength}
                              label="Wie viele Aufgaben"
                            />
                          </div>
                          <div>
                            <GameInputNumber
                              idNumber="syllablesLength"
                              min="2"
                              max="12"
                              value={syllablesLength}
                              onChange={setSyllablesLength}
                              label="Mit wie vielen Paaren"
                            />
                          </div>
                        </>
                      )}
                    </>
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

export default Retentivity;
