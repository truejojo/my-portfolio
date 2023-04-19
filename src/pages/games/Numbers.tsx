import { useEffect, useRef, useState } from "react";
import Section from "../../components/organisms/Section";
import { Container } from "../../components/helper/Container";
import HeaderElement from "../../components/elements/HeaderElement";
import GameWrapper from "../../components/organisms/GameWrapper";
import Button from "../../components/assets/Button";
import GameForm from "../../components/assets/GameForm";
import Dropdown from "../../components/organisms/Dropdown";
import useCounter from "../../components/hooks/useCounter";
import useToggle from "../../components/hooks/useToggle";
import useString from "../../components/hooks/useString";
import GameOutput from "../../components/assets/GameOutput";
import ToggleShowWrapper from "../../components/organisms/ToggleShowWrapper";
import { multiplier } from "../../utilities/math";
import { compareStrings } from "../../utilities/output";

const NUMBERS_1_TO_10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const GAME_NUMBERS_INSTRUCTINS = {
  title: "Reihe",
  messages: [
    ["presentation", "Präsentation"],
    ["paper", "Papier"],
    ["pc", "PC"],
  ],
};
const OPEN_STATES = [
  { mathRow: 1, state: false },
  { mathRow: 2, state: false },
  { mathRow: 3, state: false },
  { mathRow: 4, state: false },
  { mathRow: 5, state: false },
  { mathRow: 6, state: false },
  { mathRow: 7, state: false },
  { mathRow: 8, state: false },
  { mathRow: 9, state: false },
  { mathRow: 10, state: false },
];

export type TOpenProps = {
  mathRow: number;
  state: boolean;
};

const Numbers = () => {
  // DROPDOWN MENU
  const GAME_TYPE_STARTER = GAME_NUMBERS_INSTRUCTINS.messages[0][0];
  const GAME_NAME_STARTER = GAME_NUMBERS_INSTRUCTINS.messages[0][1];
  const GAME_NAME_SECOND = GAME_NUMBERS_INSTRUCTINS.messages[1][1];
  const GAME_NAME_THIRD = GAME_NUMBERS_INSTRUCTINS.messages[2][1];
  const title = GAME_NUMBERS_INSTRUCTINS.title;
  const [openRow, setOpenRow] = useState<TOpenProps[]>(OPEN_STATES);
  const [game, setGame] = useState({
    mathRow: 1,
    mathGameType: GAME_TYPE_STARTER,
    mathGameName: GAME_NAME_STARTER,
  });

  // GAME NUMBERS
  // STATES
  const [isPlaying, toggleIsPlaying, setIsPlaying] =
    useToggle({ initialState: false });
  const [isFirst, toggleIsFirst, setIsFirst] = useToggle();
  const [feedback, setFeedback] = useString();
  const [
    isShowingTask,
    toggleIsShowingTask,
    setIsShowingTask
  ] = useToggle();
  const [message, setMessage] = useString();
  const [userInputResult, setUserInputResult] =
    useString();

  const { mathRow, mathGameName } = game;
  const tasksLength = NUMBERS_1_TO_10.length;

  const [turns, incrementTurns, resetTurns] = useCounter();
  const [rights, incrementRights, resetRights] = useCounter();
  const [mathTaskResult, setMathTaskResult] = useString();
  const mathRowTurn = NUMBERS_1_TO_10[turns];

  const inputRef = useRef<HTMLInputElement>(null);

  // Menu
  const handleOpen = (mathRow: number) => {
    setOpenRow((prevOpenRow) =>
      prevOpenRow.map((prev) => {
        if (prev.mathRow === mathRow) {
          return { ...prev, state: !prev.state };
        } else {
          return { ...prev, state: false };
        }
      })
    );

    setGame((prevGame) => {
      return {
        ...prevGame,
        mathRow,
        mathGameType: GAME_TYPE_STARTER,
        mathGameName: GAME_NAME_STARTER,
      };
    });

    setIsFirst(true);
  };

  const handleGameType = (mathGameType: string, mathGameName: string) => {
    setGame((prevGame) => {
      return {
        ...prevGame,
        mathGameType: mathGameType,
        mathGameName: mathGameName,
      };
    });

    setIsFirst(true);
  };

  // Game
  const playGame = () => {
    toggleIsPlaying();
    setIsFirst(false);
  };

  useEffect(() => {
    setMathTaskResult(`${multiplier(mathRowTurn, mathRow)}`);
    inputRef.current && inputRef.current.focus();
  }, [isFirst]);

  useEffect(() => {
    setMathTaskResult(`${multiplier(mathRowTurn, mathRow)}`);
    turns === tasksLength &&
      (toggleIsPlaying(),
      setMessage(
        `Super - geschafft. Nochmal spielen oder such Dir was anderes aus`
      ),
      resetTurns(0),
      resetRights(0));
  }, [turns]);

  useEffect(() => {
    !isShowingTask &&
      (compareStrings(mathTaskResult, userInputResult)
        ? (setFeedback("Super, Richtig"), incrementRights())
        : setFeedback("Leider falsch"));

    inputRef.current && inputRef.current.focus();
    // document
    //   .getElementById("user-input")
    //   ?.addEventListener("keypress", (event) => {
    //     event.preventDefault();
    //     event.key === "Enter" && isShowingTask
    //       ? toggleIsShowingTask
    //       : () => {
    //           incrementTurns();
    //           toggleIsShowingTask();
    //           resetUserInputResult();
    //         };
    //   });
  }, [isShowingTask]);

  const setPresentation = () => (
    <>
      <GameOutput>
        <p>
          {mathRowTurn} * {mathRow} = {mathTaskResult}
        </p>
      </GameOutput>
      <Button
        onClick={incrementTurns}
        onKeyDown={(event) => {
          event.preventDefault();
          event.key === "Enter" && incrementTurns();
        }}
      >
        weiter
      </Button>
    </>
  );

  const setPaper = () => (
    <>
      <GameOutput>
        {isShowingTask ? (
          <p>
            {mathRowTurn} * {mathRow}
          </p>
        ) : (
          <p>{mathTaskResult}</p>
        )}
      </GameOutput>
      <Button
        onClick={
          isShowingTask
            ? toggleIsShowingTask
            : () => {
                incrementTurns();
                toggleIsShowingTask();
              }
        }
        onKeyDown={(event) => {
          event.preventDefault();
          event.key === "Enter" && isShowingTask
            ? toggleIsShowingTask
            : () => {
                incrementTurns();
                toggleIsShowingTask();
              };
        }}
      >
        {isShowingTask ? "OK" : "Weiter"}
      </Button>
    </>
  );

  const setPC = () => (
    <>
      <GameOutput>
        {isShowingTask ? (
          <>
            <p>
              {mathRowTurn} * {mathRow}
            </p>
            <input
              id="user-input"
              type="text"
              value={userInputResult.toUpperCase()}
              onChange={(event) => setUserInputResult(event.target.value)}
              ref={inputRef}
              className="fs-500 text-center mx-auto letter-spacing-default fw-bold"
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
      <Button
        onClick={
          isShowingTask
            ? toggleIsShowingTask
            : () => {
                incrementTurns();
                toggleIsShowingTask();
                setUserInputResult("");
              }
        }
        // onKeyDown={(event) => {
        //   event.preventDefault();
        //   event.key === "Enter" && isShowingTask
        //     ? toggleIsShowingTask
        //     : () => {
        //         incrementTurns();
        //         toggleIsShowingTask();
        //         resetUserInputResult();
        //       };
        // }}
      >
        {isShowingTask ? "Vergleichen" : "Nächste Aufgabe"}
      </Button>
    </>
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
            numbersArray={NUMBERS_1_TO_10}
            instrucionsArray={GAME_NUMBERS_INSTRUCTINS}
            isPlaying={isPlaying}
            title={title}
            openRow={openRow}
          />

          <GameForm classNames="bg-secondary-1-900">
            <ToggleShowWrapper isShowing={isPlaying}>
              {mathGameName === GAME_NAME_STARTER && setPresentation()}
              {mathGameName === GAME_NAME_SECOND && setPaper()}
              {mathGameName === GAME_NAME_THIRD && setPC()}
            </ToggleShowWrapper>
            <ToggleShowWrapper isShowing={!isPlaying}>
              {isFirst ? (
                <p className="fs-500">{`Reihe ${mathRow} mit dem Spiel: ${mathGameName}`}</p>
              ) : (
                <p className="fs-500">{message}</p>
              )}
              <Button
                onClick={playGame}
                onKeyDown={(event) => {
                  event.preventDefault();
                  event.key === "Enter" && playGame();
                }}
              >
                {isFirst ? "Spiel starten" : "nochmal spielen"}
              </Button>
            </ToggleShowWrapper>
          </GameForm>
        </GameWrapper>
      </Container>
    </Section>
  );
};

export default Numbers;
