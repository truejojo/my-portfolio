import { useEffect, useRef, useState } from "react";
import Section from "../../components/organisms/Section";
import { Container } from "../../components/helper/Container";
import HeaderElement from "../../components/elements/HeaderElement";
import GameWrapper from "../../components/organisms/GameWrapper";
import GameForm from "../../components/assets/GameForm";
import Dropdown from "../../components/organisms/Dropdown";
import useCounter from "../../components/hooks/useCounter";
import useToggle from "../../components/hooks/useToggle";
import useString from "../../components/hooks/useString";
import GameOutput from "../../components/assets/GameOutput";
import ToggleShowWrapper from "../../components/organisms/ToggleShowWrapper";
import { multiplier } from "../../utilities/math";
import { compareStrings } from "../../utilities/output";
import GameInputButton from "../../components/assets/GameInputButton";
import GameInputField from "../../components/assets/GameInputField";
import GamePlayWrapper from "../../components/organisms/GamePlayWrapper";
import { GAME_NUMBERS_INSTRUCTINS, NUMBERS_1_TO_10, OPEN_STATES } from "../../utilities/numbers";
import { TOpenProps } from "../../utilities/types";

const Numbers = () => {
  // DROPDOWN MENU
  const GAME_TYPE_STARTER = GAME_NUMBERS_INSTRUCTINS.messages[0][0];
  const GAME_NAME_STARTER = GAME_NUMBERS_INSTRUCTINS.messages[0][1];
  const GAME_NAME_SECOND = GAME_NUMBERS_INSTRUCTINS.messages[1][1];
  const GAME_NAME_THIRD = GAME_NUMBERS_INSTRUCTINS.messages[2][1];
  const title = GAME_NUMBERS_INSTRUCTINS.title;
  const [openRow, setOpenRow] = useState<TOpenProps[]>(OPEN_STATES);
  const [game, setGame] = useState({
    gameRow: 1,
    gameType: GAME_TYPE_STARTER,
    gameName: GAME_NAME_STARTER,
  });

  // GAME NUMBERS
  // STATES
  const [isPlaying, toggleIsPlaying, setIsPlaying] = useToggle({
    initialState: false,
  });
  const [isFirst, toggleIsFirst, setIsFirst] = useToggle();
  const [isStart, toggleIsStart, setIsStart] = useToggle();
  const [feedback, setFeedback] = useString();
  const [isShowingTask, toggleIsShowingTask, setIsShowingTask] = useToggle();
  const [message, setMessage] = useString();
  const [userInputResult, setUserInputResult] = useString();

  const { gameRow, gameName } = game;
  const [tasksLength, setTaskLength] = useState(NUMBERS_1_TO_10.length);

  const [turns, incrementTurns, resetTurns] = useCounter();
  const [rights, incrementRights, resetRights] = useCounter();
  const [mathTaskResult, setMathTaskResult] = useString();
  const mathRowTurn = parseInt(NUMBERS_1_TO_10[turns]);

  const inputRef = useRef<HTMLInputElement>(null);
  const inputPlayGameRef = useRef<HTMLInputElement>(null);
  const inputPresentationRef = useRef<HTMLInputElement>(null);
  const inputPaperRef = useRef<HTMLInputElement>(null);
  const inputPCRef = useRef<HTMLInputElement>(null);

  // Menu
  const handleOpen = (gameRow: number) => {
    setOpenRow((prevOpenRow) =>
      prevOpenRow.map((prev) => {
        if (prev.gameRow === gameRow) {
          return { ...prev, state: !prev.state };
        } else {
          return { ...prev, state: false };
        }
      })
    );

    setGame((prevGame) => {
      return {
        ...prevGame,
        gameRow,
        gameType: GAME_TYPE_STARTER,
        gameName: GAME_NAME_STARTER,
      };
    });

    setIsFirst(true);
    toggleIsStart();
  };

  const handleGameType = (gameType: string, gameName: string) => {
    setGame((prevGame) => {
      return {
        ...prevGame,
        gameType: gameType,
        gameName: gameName,
      };
    });

    setIsFirst(true);
    toggleIsStart();
  };

  // Game
  const handlePlayGame = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toggleIsPlaying();
    toggleIsStart();
    setIsFirst(false);
  };

  const handleToggleIsShowingTask = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    toggleIsShowingTask();
  };

  const handleToggleIsShowingTaskAndGetNewTask = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    incrementTurns();
    toggleIsShowingTask();
    setUserInputResult("");
  };

  const handleToggleIsShowingTaskAndIncrementTurns = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    incrementTurns();
    toggleIsShowingTask();
  };
  
  const handleIncrementTurns = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    incrementTurns();
  };

  useEffect(() => {
    setMathTaskResult(`${multiplier(mathRowTurn, gameRow)}`);
  }, [isFirst]);

  useEffect(() => {
    inputPlayGameRef.current && inputPlayGameRef.current.focus();
    inputPresentationRef.current && inputPresentationRef.current.focus();
    inputPaperRef.current && inputPaperRef.current.focus();
  }, [isStart, isFirst]);

  useEffect(() => {
    setMathTaskResult(`${multiplier(mathRowTurn, gameRow)}`);
    turns === tasksLength &&
      (toggleIsPlaying(),
      setMessage(
        `Super - geschafft. Nochmal spielen oder such Dir was anderes aus`
      ),
      resetTurns(0),
      resetRights(0));
    inputPlayGameRef.current && inputPlayGameRef.current.focus();
  }, [turns]);

  useEffect(() => {
    isShowingTask
      ? inputRef.current && inputRef.current.focus()
      : inputPCRef.current && inputPCRef.current.focus();

    !isShowingTask &&
      (compareStrings(mathTaskResult, userInputResult)
        ? (setFeedback("Super, Richtig"), incrementRights())
        : setFeedback("Leider falsch"));
  }, [isShowingTask, isStart]);

  const setPresentation = () => (
    <GameForm onSubmit={handleIncrementTurns} classNames="bg-secondary-1-900">
      <GameOutput>
        <p>
          {mathRowTurn} * {gameRow} = {mathTaskResult}
        </p>
      </GameOutput>
      <GameInputButton value="Weiter" ref={inputPresentationRef} />
    </GameForm>
  );

  const setPaper = () => (
    <GameForm
      onSubmit={
        isShowingTask
          ? handleToggleIsShowingTask
          : handleToggleIsShowingTaskAndIncrementTurns
      }
      classNames="bg-secondary-1-900"
    >
      <GameOutput>
        {isShowingTask ? (
          <p>
            {mathRowTurn} * {gameRow}
          </p>
        ) : (
          <p>{mathTaskResult}</p>
        )}
      </GameOutput>
      <GameInputButton
        value={isShowingTask ? "OK" : "Weiter"}
        ref={inputPaperRef}
      />
    </GameForm>
  );

  const setPC = () => (
    <GameForm
      onSubmit={
        isShowingTask
          ? handleToggleIsShowingTask
          : handleToggleIsShowingTaskAndGetNewTask
      }
      classNames="bg-secondary-1-900"
    >
      <GameOutput>
        {isShowingTask ? (
          <>
            <p>
              {mathRowTurn} * {gameRow}
            </p>
            <GameInputField
              maxLength={10}
              value={userInputResult.toUpperCase()}
              ref={inputRef}
              onChange={(event) => setUserInputResult(event.target.value)}
            />
          </>
        ) : turns === tasksLength - 1 ? (
          <>
            <p>{feedback}</p>
            <p>
              Du hast {rights} von {tasksLength} richtig.
            </p>
          </>
        ) : (
          <p>{feedback}</p>
        )}
      </GameOutput>
      <GameInputButton
        value={isShowingTask ? "Vergleichen" : "Nächste Aufgabe"}
        ref={inputPCRef}
      />
    </GameForm>
  );

  return (
    <Section sectionName="numbers" classNames="games | clr-secondary-1-300">
      <Container>
        <GameWrapper>
          <HeaderElement
            title="Zahlen"
            subTitle="Wähle aus, was Du spielen möchtest"
            classNames="game-header | mx-bottom-2"
            isH1={true}
          />
          <Dropdown
            handleOpen={handleOpen}
            handleGameType={handleGameType}
            gamesArray={NUMBERS_1_TO_10}
            instrucionsArray={GAME_NUMBERS_INSTRUCTINS}
            isPlaying={isPlaying}
            openRow={openRow}
            colorNumber={1}
            title={title}
          />

          <GamePlayWrapper>
            <ToggleShowWrapper isShowing={isPlaying}>
              {gameName === GAME_NAME_STARTER && setPresentation()}
              {gameName === GAME_NAME_SECOND && setPaper()}
              {gameName === GAME_NAME_THIRD && setPC()}
            </ToggleShowWrapper>
            <ToggleShowWrapper isShowing={!isPlaying}>
              <GameForm
                onSubmit={handlePlayGame}
                classNames="bg-secondary-1-900"
              >
                <GameOutput>
                  {isFirst ? (
                    <p className="fs-500">{`${title} ${NUMBERS_1_TO_10[gameRow - 1]} mit dem Spiel: ${gameName}`}</p>
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

export default Numbers;
