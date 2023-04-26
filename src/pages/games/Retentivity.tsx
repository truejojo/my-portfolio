import Section from "../../components/organisms/Section";
import { Container } from "../../components/helper/Container";
import HeaderElement from "../../components/elements/HeaderElement";
import Dropdown from "../../components/organisms/Dropdown";
import GameWrapper from "../../components/organisms/GameWrapper";
import GamePlayWrapper from "../../components/organisms/GamePlayWrapper";
import {
  RETENTIVITYS,
  RETENTIVITY_INSTRUCTIONS,
  OPEN_STATES,
  TOpenStatesProps,
  generateOutput,
} from "../../utilities/retentivity";
import { useEffect, useRef, useState } from "react";
import useToggle from "../../components/hooks/useToggle";
import ToggleShowWrapper from "../../components/organisms/ToggleShowWrapper";
import GameForm from "../../components/assets/GameForm";
import GameOutput from "../../components/assets/GameOutput";
import GameInputButton from "../../components/assets/GameInputButton";
import useString from "../../components/hooks/useString";
import GameInputField from "../../components/assets/GameInputField";
import { compareStrings } from "../../utilities/output";
import useCounter from "../../components/hooks/useCounter";
import GameInputNumber from "../../components/assets/GameInputNumber";

const Retentivity = () => {
  const TASK_LENGTH_START = 2;
  const RIGHTS_LENGTH_START = 1;
  const GAME_TYPE_STARTER = RETENTIVITY_INSTRUCTIONS.messages[0][0];
  const GAME_NAME_STARTER = RETENTIVITY_INSTRUCTIONS.messages[0][1];
  const GAME_NAME_SECOND = RETENTIVITY_INSTRUCTIONS.messages[1][1];
  const GAME_NAME_THIRD = RETENTIVITY_INSTRUCTIONS.messages[2][1];
  const TITLE = RETENTIVITY_INSTRUCTIONS.title;
  const [openRow, setOpenRow] = useState<TOpenStatesProps[]>(OPEN_STATES);
  const [game, setGame] = useState({
    gameRow: 1,
    gameType: GAME_TYPE_STARTER,
    gameName: GAME_NAME_STARTER,
  });
  const { gameRow, gameName } = game;
  const [tasksLength, setTaskLength] = useState<number>(10);
  const [syllablesLength, setSyllablesLength] = useState<number>(6);

  const [taskOutput, setTaskOutput] = useString();
  const [userInputResult, setUserInputResult] = useString();
  const [isPlaying, toggleIsPlaying, setIsPlaying] = useToggle({
    initialState: false,
  });
  const [isFirst, toggleIsFirst, setIsFirst] = useToggle();
  const [isStart, toggleIsStart, setIsStart] = useToggle();
  const [message, setMessage] = useString();
  const [isShowingTask, toggleIsShowingTask, setIsShowingTask] = useToggle();
  const [feedback, setFeedback] = useString();
  const [turns, incrementTurns, resetTurns] = useCounter({
    initialCount: TASK_LENGTH_START,
  });
  const [rights, incrementRights, resetRights] = useCounter({
    initialCount: RIGHTS_LENGTH_START,
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const inputPlayGameRef = useRef<HTMLInputElement>(null);
  const inputUserRef = useRef<HTMLInputElement>(null);
  const inputStmRef = useRef<HTMLInputElement>(null);

  // Menu
  // TODO -> make single
  const handleOpen = (gameRow: number) => {
    // TODO -> make single
    setOpenRow((prevOpenRow) =>
      prevOpenRow.map((prev) => {
        if (prev.gameRow === gameRow) {
          return { ...prev, state: !prev.state };
        } else {
          return { ...prev, state: false };
        }
      })
    );

    // TODO -> make single
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

  // TODE -> make single
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

  /*******************************************************************/
  // Game
  // Start Game
  const handlePlayGame = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsPlaying(true);
    toggleIsStart();
    setUserInputResult("");
    resetRights(RIGHTS_LENGTH_START);
    setIsFirst(false);
  };

  // Game Buttons
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
    setTaskOutput(generateOutput(gameRow, turns));
    inputPlayGameRef.current && inputPlayGameRef.current.focus();
  }, [isFirst, isPlaying]);

  useEffect(() => {
    compareStrings(taskOutput, userInputResult)
      ? (
        gameName === GAME_NAME_STARTER &&
          setTaskOutput(taskOutput + generateOutput(gameRow, 1)),
        gameName === GAME_NAME_SECOND &&
          setTaskOutput(generateOutput(gameRow, turns)),
        setUserInputResult(""),
        incrementRights()
      )
      : (
        setMessage(
          rights > 1
            ? `Du hast Dir ${rights} Silbenpaare merken können`
            : `Upps, was ist denn da schief gelaufen?`
        ),
        setIsPlaying(false),
        resetTurns(TASK_LENGTH_START)
      );
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

  const setSame = () => (
    <GameForm
      onSubmit={
        isShowingTask
          ? handleToggleIsShowingTask
          : handleToggleIsShowingTaskGetNextTask
      }
      classNames="bg-secondary-3-900"
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

  const setNew = () => (
    <GameForm
      onSubmit={
        isShowingTask
          ? handleToggleIsShowingTask
          : handleToggleIsShowingTaskGetNextTask
      }
      classNames="bg-secondary-3-900"
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

  const setStm = () => (
    <GameForm
      onSubmit={
        isShowingTask
          ? handleToggleIsShowingTask
          : handleToggleIsShowingTaskGetNextTask
      }
      classNames="bg-secondary-3-900"
    >
      <GameOutput>
        {isShowingTask ? (
          <p>{taskOutput}</p>
        ) : (
          <GameInputField
            maxLength={4 + syllablesLength}
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
    <Section sectionName="retentivity" classNames="games | clr-secondary-3-300">
      <Container>
        <GameWrapper>
          <HeaderElement
            title="Merkfähigkeit"
            subTitle="Silben, Zahlen oder Null und Einsen womit willst du spielen?"
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
              {gameName === GAME_NAME_STARTER && setSame()}
              {gameName === GAME_NAME_SECOND && setNew()}
              {gameName === GAME_NAME_THIRD && setStm()}
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

/**************************************************************************** */
/**************************************************************************** */
/**************************************************************************** */
/**************************************************************************** */
/**************************************************************************** */

// import Section from "../../components/organisms/Section";
// import { Container } from "../../components/helper/Container";
// import HeaderElement from "../../components/elements/HeaderElement";
// import Dropdown from "../../components/organisms/Dropdown";
// import GameWrapper from "../../components/organisms/GameWrapper";
// import GamePlayWrapper from "../../components/organisms/GamePlayWrapper";
// import {
//   RETENTIVITYS,
//   RETENTIVITY_INSTRUCTIONS,
//   OPEN_STATES,
//   TOpenStatesProps,
//   generateOutput,
// } from "../../utilities/retentivity";
// import { useEffect, useRef, useState } from "react";
// import useToggle from "../../components/hooks/useToggle";
// import ToggleShowWrapper from "../../components/organisms/ToggleShowWrapper";
// import GameForm from "../../components/assets/GameForm";
// import GameOutput from "../../components/assets/GameOutput";
// import GameInputButton from "../../components/assets/GameInputButton";
// import useString from "../../components/hooks/useString";
// import GameInputField from "../../components/assets/GameInputField";
// import { compareStrings } from "../../utilities/output";
// import useCounter from "../../components/hooks/useCounter";
// import GameInputNumber from "../../components/assets/GameInputNumber";

// const Retentivity = () => {
//   const TASK_LENGTH_START = 2;
//   const RIGHTS_LENGTH_START = 1;
//   const GAME_TYPE_STARTER = RETENTIVITY_INSTRUCTIONS.messages[0][0];
//   const GAME_NAME_STARTER = RETENTIVITY_INSTRUCTIONS.messages[0][1];
//   const GAME_NAME_SECOND = RETENTIVITY_INSTRUCTIONS.messages[1][1];
//   const GAME_NAME_THIRD = RETENTIVITY_INSTRUCTIONS.messages[2][1];
//   const TITLE = RETENTIVITY_INSTRUCTIONS.title;
//   const [openRow, setOpenRow] = useState<TOpenStatesProps[]>(OPEN_STATES);
//   const [game, setGame] = useState({
//     gameRow: 1,
//     gameType: GAME_TYPE_STARTER,
//     gameName: GAME_NAME_STARTER,
//   });
//   const { gameRow, gameName } = game;
//   const [tasksLength, setTaskLength] = useState<number>(10);
//   const [syllablesLength, setSyllablesLength] = useState<number>(6);

//   const [taskOutput, setTaskOutput] = useString();
//   const [userInputResult, setUserInputResult] = useString();
//   const [isPlaying, toggleIsPlaying, setIsPlaying] = useToggle({
//     initialState: false,
//   });
//   const [isFirst, toggleIsFirst, setIsFirst] = useToggle();
//   const [isStart, toggleIsStart, setIsStart] = useToggle();
//   const [message, setMessage] = useString();
//   const [isShowingTask, toggleIsShowingTask, setIsShowingTask] = useToggle();
//   const [feedback, setFeedback] = useString();
//   const [turns, incrementTurns, resetTurns] = useCounter({
//     initialCount: TASK_LENGTH_START,
//   });
//   const [rights, incrementRights, resetRights] = useCounter({
//     initialCount: RIGHTS_LENGTH_START,
//   });

//   const inputRef = useRef<HTMLInputElement>(null);
//   const inputPlayGameRef = useRef<HTMLInputElement>(null);
//   const inputUserRef = useRef<HTMLInputElement>(null);
//   const inputStmRef = useRef<HTMLInputElement>(null);

//   // Menu
//   // TODO -> make single
//   const handleOpen = (gameRow: number) => {
//     // TODO -> make single
//     setOpenRow((prevOpenRow) =>
//       prevOpenRow.map((prev) => {
//         if (prev.gameRow === gameRow) {
//           return { ...prev, state: !prev.state };
//         } else {
//           return { ...prev, state: false };
//         }
//       })
//     );

//     // TODO -> make single
//     setGame((prevGame) => {
//       return {
//         ...prevGame,
//         gameRow,
//         gameType: GAME_TYPE_STARTER,
//         gameName: GAME_NAME_STARTER,
//       };
//     });

//     setIsFirst(true);
//     toggleIsStart();
//   };

//   // TODE -> make single
//   const handleGameType = (gameType: string, gameName: string) => {
//     setGame((prevGame) => {
//       return {
//         ...prevGame,
//         gameType: gameType,
//         gameName: gameName,
//       };
//     });

//     setIsFirst(true);
//     toggleIsStart();
//   };

//   /*******************************************************************/
//   // Game
//   // Start Game
//   const handlePlayGame = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     setIsPlaying(true);
//     toggleIsStart();
//     setUserInputResult("");
//     gameName === GAME_NAME_THIRD
//       ? resetRights(0)
//       : resetRights(RIGHTS_LENGTH_START);
//     setIsFirst(false);
//   };

//   // Game Buttons
//   const handleToggleIsShowingTask = (
//     event: React.FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();
//     toggleIsShowingTask();
//   };

//   const handleToggleIsShowingTaskGetNextTask = (
//     event: React.FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();
//     incrementTurns();
//     toggleIsShowingTask();
//   };

//   useEffect(() => {
//     gameName === GAME_NAME_THIRD
//       ? setTaskOutput(generateOutput(gameRow, syllablesLength))
//       : setTaskOutput(generateOutput(gameRow, turns));
//     inputPlayGameRef.current && inputPlayGameRef.current.focus();
//   }, [isFirst, isPlaying]);

//   useEffect(() => {
//     compareStrings(taskOutput, userInputResult)
//       ? (gameName === GAME_NAME_STARTER &&
//           setTaskOutput(taskOutput + generateOutput(gameRow, 1)),
//         gameName === GAME_NAME_SECOND &&
//           setTaskOutput(generateOutput(gameRow, turns)),
//         setUserInputResult(""),
//         incrementRights())
//       : (setMessage(
//           rights > 1
//             ? `Du hast Dir ${rights} Silbenpaare merken können`
//             : `Upps, was ist denn da schief gelaufen?`
//         ),
//         setIsPlaying(false),
//         resetTurns(TASK_LENGTH_START));
//   }, [turns]);

//   useEffect(() => {
//     inputPlayGameRef.current && inputPlayGameRef.current.focus();
//     inputUserRef.current && inputUserRef.current.focus();
//   }, [isStart, isFirst]);

//   useEffect(() => {
//     isShowingTask
//       ? inputUserRef.current && inputUserRef.current.focus()
//       : inputRef.current && inputRef.current.focus();
//   }, [isShowingTask]);

//   const setSame = () => (
//     <GameForm
//       onSubmit={
//         isShowingTask
//           ? handleToggleIsShowingTask
//           : handleToggleIsShowingTaskGetNextTask
//       }
//       classNames="bg-secondary-3-900"
//     >
//       <GameOutput>
//         {isShowingTask ? (
//           <p>{taskOutput}</p>
//         ) : (
//           <GameInputField
//             maxLength={10}
//             value={userInputResult.toUpperCase()}
//             ref={inputRef}
//             onChange={(event) => setUserInputResult(event.target.value)}
//           />
//         )}
//       </GameOutput>
//       <GameInputButton
//         value={isShowingTask ? "OK" : "vergleichen"}
//         ref={inputUserRef}
//       />
//     </GameForm>
//   );

//   const setNew = () => (
//     <GameForm
//       onSubmit={
//         isShowingTask
//           ? handleToggleIsShowingTask
//           : handleToggleIsShowingTaskGetNextTask
//       }
//       classNames="bg-secondary-3-900"
//     >
//       <GameOutput>
//         {isShowingTask ? (
//           <p>{taskOutput}</p>
//         ) : (
//           <GameInputField
//             maxLength={10}
//             value={userInputResult.toUpperCase()}
//             ref={inputRef}
//             onChange={(event) => setUserInputResult(event.target.value)}
//           />
//         )}
//       </GameOutput>
//       <GameInputButton
//         value={isShowingTask ? "OK" : "vergleichen"}
//         ref={inputUserRef}
//       />
//     </GameForm>
//   );

//   const setStm = () => (
//     <GameForm
//       onSubmit={
//         isShowingTask
//           ? handleToggleIsShowingTask
//           : handleToggleIsShowingTaskGetNextTask
//       }
//       classNames="bg-secondary-3-900"
//     >
//       <GameOutput>
//         {isShowingTask ? (
//           <p>{taskOutput}</p>
//         ) : (
//           <GameInputField
//             maxLength={4 + syllablesLength}
//             value={userInputResult.toUpperCase()}
//             ref={inputRef}
//             onChange={(event) => setUserInputResult(event.target.value)}
//           />
//         )}
//       </GameOutput>
//       <GameInputButton
//         value={isShowingTask ? "OK" : "vergleichen"}
//         ref={inputUserRef}
//       />
//     </GameForm>
//   );

//   return (
//     <Section sectionName="retentivity" classNames="games | clr-secondary-3-300">
//       <Container>
//         <GameWrapper>
//           <HeaderElement
//             title="Merkfähigkeit"
//             subTitle="Silben, Zahlen oder Null und Einsen womit willst du spielen?"
//             classNames="game-header | mx-bottom-2"
//             isH1={true}
//           />

//           <Dropdown
//             handleOpen={handleOpen}
//             handleGameType={handleGameType}
//             gamesArray={RETENTIVITYS}
//             instrucionsArray={RETENTIVITY_INSTRUCTIONS}
//             isPlaying={isPlaying}
//             openRow={openRow}
//             colorNumber={2}
//           />
//           <GamePlayWrapper>
//             <ToggleShowWrapper isShowing={isPlaying}>
//               {gameName === GAME_NAME_STARTER && setSame()}
//               {gameName === GAME_NAME_SECOND && setNew()}
//               {gameName === GAME_NAME_THIRD && setStm()}
//             </ToggleShowWrapper>
//             <ToggleShowWrapper isShowing={!isPlaying}>
//               <GameForm
//                 onSubmit={handlePlayGame}
//                 classNames="bg-secondary-3-900"
//               >
//                 <GameOutput>
//                   {isFirst ? (
//                     <>
//                       <p className="fs-500">{`${TITLE}-${
//                         RETENTIVITYS[gameRow - 1]
//                       } mit dem Spiel: ${gameName}`}</p>
//                       {gameName === GAME_NAME_THIRD && (
//                         <>
//                           <div>
//                             <GameInputNumber
//                               idNumber="taskLength"
//                               min="8"
//                               max="12"
//                               value={tasksLength}
//                               onChange={setTaskLength}
//                               label="Wie viele Aufgaben"
//                             />
//                           </div>
//                           <div>
//                             <GameInputNumber
//                               idNumber="syllablesLength"
//                               min="2"
//                               max="12"
//                               value={syllablesLength}
//                               onChange={setSyllablesLength}
//                               label="Mit wie vielen Paaren"
//                             />
//                           </div>
//                         </>
//                       )}
//                     </>
//                   ) : (
//                     <p className="fs-500">{message}</p>
//                   )}
//                 </GameOutput>

//                 <GameInputButton
//                   value={isFirst ? "Spiel starten" : "nochmal spielen"}
//                   ref={inputPlayGameRef}
//                 />
//               </GameForm>
//             </ToggleShowWrapper>
//           </GamePlayWrapper>
//         </GameWrapper>
//       </Container>
//     </Section>
//   );
// };

// export default Retentivity;

/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */
/*********************************************************************** */

// import Section from "../../components/organisms/Section";
// import { Container } from "../../components/helper/Container";
// import HeaderElement from "../../components/elements/HeaderElement";
// import Dropdown from "../../components/organisms/Dropdown";
// import GameWrapper from "../../components/organisms/GameWrapper";
// import GamePlayWrapper from "../../components/organisms/GamePlayWrapper";
// import {
//   RETENTIVITYS,
//   RETENTIVITY_INSTRUCTIONS,
//   OPEN_STATES,
//   TOpenStatesProps,
//   generateOutput,
// } from "../../utilities/retentivity";
// import { useEffect, useRef, useState } from "react";
// import useToggle from "../../components/hooks/useToggle";
// import ToggleShowWrapper from "../../components/organisms/ToggleShowWrapper";
// import GameForm from "../../components/assets/GameForm";
// import GameOutput from "../../components/assets/GameOutput";
// import GameInputButton from "../../components/assets/GameInputButton";
// import useString from "../../components/hooks/useString";
// import GameInputField from "../../components/assets/GameInputField";
// import { compareStrings } from "../../utilities/output";
// import useCounter from "../../components/hooks/useCounter";

// const Retentivity = () => {
//   const TASk_LENGTH_START = 2;
//   const GAME_TYPE_STARTER = RETENTIVITY_INSTRUCTIONS.messages[0][0];
//   const GAME_NAME_STARTER = RETENTIVITY_INSTRUCTIONS.messages[0][1];
//   const GAME_NAME_SECOND = RETENTIVITY_INSTRUCTIONS.messages[1][1];
//   const GAME_NAME_THIRD = RETENTIVITY_INSTRUCTIONS.messages[2][1];
//   const TITLE = RETENTIVITY_INSTRUCTIONS.title;
//   const [openRow, setOpenRow] = useState<TOpenStatesProps[]>(OPEN_STATES);
//   const [game, setGame] = useState({
//     gameRow: 1,
//     gameType: GAME_TYPE_STARTER,
//     gameName: GAME_NAME_STARTER,
//   });
//   const { gameRow, gameName } = game;

//   const [taskOutput, setTaskOutput] = useString();
//   const [userInputResult, setUserInputResult] = useString();
//   const [isPlaying, toggleIsPlaying, setIsPlaying] = useToggle({
//     initialState: false,
//   });
//   const [isFirst, toggleIsFirst, setIsFirst] = useToggle();
//   const [isStart, toggleIsStart, setIsStart] = useToggle();
//   const [message, setMessage] = useString();
//   const [isShowingTask, toggleIsShowingTask, setIsShowingTask] = useToggle();
//   const [feedback, setFeedback] = useString();
//   const [turns, incrementTurns, resetTurns] = useCounter(
//     { initialCount: TASk_LENGTH_START }
//   );
//   const [rights, incrementRights, resetRights] = useCounter();

//   const inputRef = useRef<HTMLInputElement>(null);
//   const inputPlayGameRef = useRef<HTMLInputElement>(null);
//   const inputUserRef = useRef<HTMLInputElement>(null);
//   const inputStmRef = useRef<HTMLInputElement>(null);

//   console.log(taskOutput);
//   console.log(turns);

//   // Menu
//   // TODO -> make single
//   const handleOpen = (gameRow: number) => {
//     // TODO -> make single
//     setOpenRow((prevOpenRow) =>
//       prevOpenRow.map((prev) => {
//         if (prev.gameRow === gameRow) {
//           return { ...prev, state: !prev.state };
//         } else {
//           return { ...prev, state: false };
//         }
//       })
//     );

//     // TODO -> make single
//     setGame((prevGame) => {
//       return {
//         ...prevGame,
//         gameRow,
//         gameType: GAME_TYPE_STARTER,
//         gameName: GAME_NAME_STARTER,
//       };
//     });

//     setIsFirst(true);
//     toggleIsStart();
//   };

//   // TODE -> make single
//   const handleGameType = (gameType: string, gameName: string) => {
//     setGame((prevGame) => {
//       return {
//         ...prevGame,
//         gameType: gameType,
//         gameName: gameName,
//       };
//     });

//     setIsFirst(true);
//     toggleIsStart();
//   };

//   /*******************************************************************/
//   // Game
//   // Start Game
//   const handlePlayGame = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     toggleIsPlaying();
//     toggleIsStart();
//     setIsFirst(false);
//   };

//   // Game Buttons
//   const handleToggleIsShowingTask = (
//     event: React.FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();
//     toggleIsShowingTask();
//   };

//   const handleToggleIsShowingTaskGetNextTask = (
//     event: React.FormEvent<HTMLFormElement>
//   ) => {
//     event.preventDefault();
//     incrementTurns();
//     toggleIsShowingTask();
//   };

//   const resetForNewRound = () => {
//     setTaskOutput("");
//     setUserInputResult("");
//     setTaskOutput(generateOutput(gameRow, turns));
//   };

//   const setFinalResult = () => {
//     setMessage(`Du hast Dir ${turns - 2} Silbenpaare merken können`);
//     toggleIsPlaying();
//     resetTurns(2);
//     setTaskOutput("");
//     setUserInputResult("");
//   };

//   useEffect(() => {
//     setTaskOutput(generateOutput(gameRow, turns));
//   }, [isFirst, isPlaying]);

//   useEffect(() => {
//     isShowingTask && taskOutput && userInputResult
//       ? compareStrings(taskOutput, userInputResult)
//         ? resetForNewRound()
//         : setFinalResult()
//       : null;
//     inputRef.current && inputRef.current.focus();
//     // inputUserRef.current && inputUserRef.current.focus();
//     inputPlayGameRef.current && inputPlayGameRef.current.focus();
//   }, [isShowingTask , taskOutput , userInputResult]);

//   useEffect(() => {
//     inputPlayGameRef.current && inputPlayGameRef.current.focus();
//     inputUserRef.current && inputUserRef.current.focus();
//   }, [isStart, isFirst]);

//   useEffect(() => {
//     isShowingTask
//       ? inputUserRef.current && inputUserRef.current.focus()
//       : inputRef.current && inputRef.current.focus();
//   }, [isShowingTask]);

//   const setSame = () => (
//     <GameForm
//       onSubmit={
//         isShowingTask
//           ? handleToggleIsShowingTask
//           : handleToggleIsShowingTaskGetNextTask
//       }
//       classNames="bg-secondary-3-900"
//     >
//       <GameOutput>
//         {isShowingTask ? (
//           <p>{taskOutput}</p>
//         ) : (
//           <GameInputField
//             maxLength={10}
//             value={userInputResult.toUpperCase()}
//             ref={inputRef}
//             onChange={(event) => setUserInputResult(event.target.value)}
//           />
//         )}
//       </GameOutput>
//       <GameInputButton
//         value={isShowingTask ? "OK" : "vergleichen"}
//         ref={inputUserRef}
//       />
//     </GameForm>
//   );
//   const setNew = () => {
//     return <>New</>;
//   };
//   const setStm = () => {
//     return <>Stm</>;
//   };

//   return (
//     <Section sectionName="retentivity" classNames="games | clr-secondary-3-300">
//       <Container>
//         <GameWrapper>
//           <HeaderElement
//             title="Merkfähigkeit"
//             subTitle="Silben, Zahlen oder Null und Einsen womit willst du spielen?"
//             classNames="game-header | mx-bottom-2"
//             isH1={true}
//           />

//           <Dropdown
//             handleOpen={handleOpen}
//             handleGameType={handleGameType}
//             gamesArray={RETENTIVITYS}
//             instrucionsArray={RETENTIVITY_INSTRUCTIONS}
//             isPlaying={isPlaying}
//             openRow={openRow}
//             colorNumber={2}
//           />
//           <GamePlayWrapper>
//             <ToggleShowWrapper isShowing={isPlaying}>
//               {gameName === GAME_NAME_STARTER && setSame()}
//               {gameName === GAME_NAME_SECOND && setNew()}
//               {gameName === GAME_NAME_THIRD && setStm()}
//             </ToggleShowWrapper>
//             <ToggleShowWrapper isShowing={!isPlaying}>
//               <GameForm
//                 onSubmit={handlePlayGame}
//                 classNames="bg-secondary-3-900"
//               >
//                 <GameOutput>
//                   {isFirst ? (
//                     <p className="fs-500">{`${TITLE}-${
//                       RETENTIVITYS[gameRow - 1]
//                     } mit dem Spiel: ${gameName}`}</p>
//                   ) : (
//                     <p className="fs-500">{message}</p>
//                   )}
//                 </GameOutput>

//                 <GameInputButton
//                   value={isFirst ? "Spiel starten" : "nochmal spielen"}
//                   ref={inputPlayGameRef}
//                 />
//               </GameForm>
//             </ToggleShowWrapper>
//           </GamePlayWrapper>
//         </GameWrapper>
//       </Container>
//     </Section>
//   );
// };

// export default Retentivity;
