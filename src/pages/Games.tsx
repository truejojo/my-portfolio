import { useEffect, useRef, useState } from "react";
import { Container } from "../components/helper/Container";
import HeaderElement from "../components/elements/HeaderElement";
import GameForm from "../components/assets/GameForm";
import Section from "../components/organisms/Section";
import ToggleShowWrapper from "../components/organisms/ToggleShowWrapper";
import useString from "../components/hooks/useString";
import useToggle from "../components/hooks/useToggle";
import { compareStrings } from "../utilities/output";
import GameInputButton from "../components/assets/GameInputButton";
import GameInputField from "../components/assets/GameInputField";
import GameOutput from "../components/assets/GameOutput";
import {
  RETENTIVITY_INSTRUCTIONS,
  generateRetentivityOutput,
} from "../utilities/retentivity";
import GamePlayWrapper from "../components/organisms/GamePlayWrapper";
import useCounter from "../components/hooks/useCounter";

const Games = () => {
  const TASK_LENGTH_START = 1;
  const GAME_TYPE_STARTER = RETENTIVITY_INSTRUCTIONS.messages[0][0];
  const GAME_NAME_STARTER = RETENTIVITY_INSTRUCTIONS.messages[0][1];
  const [{ gameRow }, setGame] = useState({
    gameRow: 1,
    gameType: GAME_TYPE_STARTER,
    gameName: GAME_NAME_STARTER,
  });

  const [taskOutput, setTaskOutput] = useString();
  const [userInputResult, setUserInputResult] = useString();
  const [isPlaying, toggleIsPlaying, setIsPlaying] = useToggle({
    initialState: false,
  });
  const [isFirst, toggleIsFirst, setIsFirst] = useToggle();
  const [isStart, toggleIsStart, setIsStart] = useToggle();
  const [message, setMessage] = useString();
  const [isShowingTask, toggleIsShowingTask, setIsShowingTask] = useToggle();
  const [turns, incrementTurns, resetTurns] = useCounter({
    initialCount: TASK_LENGTH_START,
  });
  const [rights, incrementRights, resetRights] = useCounter();

  const inputRef = useRef<HTMLInputElement>(null);
  const inputPlayGameRef = useRef<HTMLInputElement>(null);
  const inputUserRef = useRef<HTMLInputElement>(null);

  const handlePlayGame = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPlaying(true);
    setUserInputResult("");
    resetRights(0);
    setIsFirst(false);
    setIsStart(false);
  };

  const handleToggleIsShowingTask = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    toggleIsShowingTask();
  };

  const handleToggleIsShowingTaskGetNextTask = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    incrementTurns();
    toggleIsShowingTask();
  };

  useEffect(() => {
    setTaskOutput(generateRetentivityOutput(gameRow, turns));
    inputPlayGameRef.current && inputPlayGameRef.current.focus();
  }, [isFirst, isPlaying]);

  useEffect(() => {
    compareStrings(taskOutput, userInputResult)
      ? (setTaskOutput(generateRetentivityOutput(gameRow, turns)),
        setUserInputResult(""),
        incrementRights())
      : (setMessage(
          rights > 1
            ? `Du hast Dir ${rights} Silbenpaare merken können`
            : `Upps, was ist denn da schief gelaufen?`
        ),
        setIsPlaying(false),
        resetTurns(TASK_LENGTH_START),
        setIsStart(true));
  }, [turns]);

  useEffect(() => {
    inputPlayGameRef.current && inputPlayGameRef.current.focus();
    inputUserRef.current && inputUserRef.current.focus();
  }, [isStart, isFirst]);

  useEffect(() => {
    isShowingTask
      ? inputUserRef.current && inputUserRef.current.focus()
      : inputRef.current && inputRef.current.focus();
  }, [isShowingTask]);

  const setNew = () => (
    <GameForm
      onSubmit={
        isShowingTask
          ? handleToggleIsShowingTask
          : handleToggleIsShowingTaskGetNextTask
      }
      classNames="bg-primary-900"
    >
      <GameOutput>
        {isShowingTask ? (
          <p>{taskOutput}</p>
        ) : (
          <GameInputField
            maxLength={10}
            value={userInputResult.toUpperCase()}
            ref={inputRef}
            onChange={(event) => setUserInputResult(event.target.value)}
          />
        )}
      </GameOutput>
      <GameInputButton
        value={isShowingTask ? "OK" : "vergleichen"}
        ref={inputUserRef}
      />
    </GameForm>
  );

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
          <ToggleShowWrapper isShowing={isPlaying}>
            {setNew()}
          </ToggleShowWrapper>
          <ToggleShowWrapper isShowing={!isPlaying}>
            <GameForm onSubmit={handlePlayGame} classNames="bg-primary-900">
              {message && (
                <GameOutput>
                  <p className="fs-500">{message}</p>
                </GameOutput>
              )}

              <GameInputButton
                value={isFirst ? "Spiel starten" : "nochmal spielen"}
                ref={inputPlayGameRef}
              />
            </GameForm>
          </ToggleShowWrapper>
        </GamePlayWrapper>
      </Container>
    </Section>
  );
};

export default Games;
