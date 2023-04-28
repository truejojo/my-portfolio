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
import { TOpenProps } from "../../utilities/types";
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

const Letters = () => {
  // Start - TODO - make only
  const GAME_TYPE_STARTER = LETTERS_INSTRUCTIONS.messages[0][0];
  const GAME_NAME_STARTER = LETTERS_INSTRUCTIONS.messages[0][1];
  const GAME_NAME_SECOND = LETTERS_INSTRUCTIONS.messages[1][1];
  const GAME_NAME_THIRD = LETTERS_INSTRUCTIONS.messages[2][1];
  const TITLE = LETTERS_INSTRUCTIONS.title;
  const [openRow, setOpenRow] = useState<TOpenProps[]>(OPEN_STATES);
  const [game, setGame] = useState({
    gameRow: 1,
    gameType: GAME_TYPE_STARTER,
    gameName: GAME_NAME_STARTER,
  });
  const { gameRow, gameName } = game;

  const [isPlaying, toggleIsPlaying, setIsPlaying] = useToggle({
    initialState: false,
  });
  const [isFirst, toggleIsFirst, setIsFirst] = useToggle();
  const [isMenuActive, toggleIsMenuActive, setIsMenuActive] = useToggle();
  // End - TODO - make only
  const [currentLetters, setCurrentLetters] = useState<string[]>([]);

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

  const [isShow, setIsShow] = useState(true);
  const timeoutRef = useRef<number | undefined>(undefined);

  // Start - TODO - make only
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
    toggleIsMenuActive();
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
    toggleIsMenuActive();
  };
  // End - TODO - make only

  /*******************************************************
   ********* Game
   *******************************************************/
  console.log(`taskOutput: ${taskOutput}`);
  console.log(`userInputResult: ${userInputResult}`);

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
  };

  // Input
  const handleIsShwoingInput = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    toggleIsShowingTask();
  };
  const handleIsShowingFeedback = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    toggleIsShowingTask();
    setIsShow(true);
    incrementTurns();
    setUserInputResult("");
  };

  useEffect(() => {
    setCurrentLetters(generateLettersOutput(gameRow));
    setTaskOutput(currentLetters[turns]);

    gameName === GAME_NAME_SECOND || gameName === GAME_NAME_THIRD &&
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
      (setIsPlaying(false),
      resetTurns(0),
      resetCorrect(0),
      //  setIsShow(true),
      setMessage(
        `Super, das waren die Buchstaben ${
          LETTERS_SPLIT[gameRow - 1]
        }. Nochmal spielen oder was anderes?`
      ));
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

  const gameLettersPaper = () => (
    <GameForm
      onSubmit={isShowingTask ? handleIsShowTask : handleIsShowResult}
      classNames="bg-secondary-2-700"
    >
      <GameOutput>
        {isShowingTask && (
          <>
            {isShow ? (
              <GameTaskOutput task={taskOutput} />
            ) : (
              <p>Schreibe den Buchstaben selber</p>
            )}
            {!isShow && (
              <GameInputButton value="vergleichen" ref={inputUserRef} />
            )}
          </>
        )}
        {!isShowingTask && (
          <>
            <GameTaskOutput task={taskOutput} />
            <GameInputButton value="nächster buchstabe" ref={inputUserRef} />
          </>
        )}
      </GameOutput>
    </GameForm>
  );

  const gameLettersInput = () => (
    <>
      <GameForm
        onSubmit={
          isShowingTask ? handleIsShwoingInput : handleIsShowingFeedback
        }
        classNames="bg-secondary-2-700"
      >
        <GameOutput>
          {isShowingTask && (
            <>
              {isShow ? (
                <GameTaskOutput task={taskOutput} />
              ) : (
                <GameInputField
                  maxLength={taskOutput.length + 4}
                  value={userInputResult.toUpperCase()}
                  ref={inputRef}
                  onChange={(event) => setUserInputResult(event.target.value)}
                />
              )}
              {!isShow && (
                <GameInputButton value="vergleichen" ref={inputUserRef} />
              )}
            </>
          )}
          {!isShowingTask && (
            <>
              <p>{feedback}</p>
              <GameInputButton value="nächster buchstabe" ref={inputUserRef} />
            </>
          )}
        </GameOutput>
      </GameForm>
    </>
  );
  // const gameLetters = () => (
  //   <>
  //     <GameForm
  //       onSubmit={
  //         gameName === GAME_NAME_THIRD
  //           ? isShowingTask
  //             ? handleIsShowingTask
  //             : isShowingInput
  //             ? handleIsShwoingInput
  //             : handleIsShowingFeedback
  //           : isShowingTask
  //           ? handleIsShowingTask
  //           : handleIsShwoingInput
  //       }
  //       classNames="bg-secondary-2-700"
  //     >
  //       <GameOutput>
  //         {isShowingTask && (
  //           <>
  //             <GameTaskOutput task={taskOutput} />
  //             <GameInputButton
  //               value={isShow ? "OK" : "nächster buchstabe"}
  //               ref={inputUserRef}
  //             />
  //           </>
  //         )}

  //         {isShowingInput && (
  //           <>
  //             <GameInputField
  //               maxLength={taskOutput.length + 4}
  //               value={userInputResult.toUpperCase()}
  //               ref={inputRef}
  //               onChange={(event) => setUserInputResult(event.target.value)}
  //             />
  //             <GameInputButton value="vergleichen" ref={inputUserRef} />
  //           </>
  //         )}

  //         {isShowingFeedback && (
  //           <>
  //             <p>{feedback}</p>
  //             <GameInputButton value="nächste Aufgabe" ref={inputUserRef} />
  //           </>
  //         )}
  //       </GameOutput>
  //     </GameForm>
  //   </>
  // );

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
              {gameName === GAME_NAME_STARTER && gameLettersPresentation()}
              {gameName === GAME_NAME_SECOND && gameLettersPaper()}
              {gameName === GAME_NAME_THIRD && gameLettersInput()}
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

/*
const handleIsShowingTask = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    gameName === GAME_NAME_STARTER && incrementTurns();
    gameName === GAME_NAME_SECOND && (toggleIsShowingTask(), setIsShow(true));
    // toggleIsShowingInput();
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


*/
