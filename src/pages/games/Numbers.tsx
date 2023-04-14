import { useEffect, useRef, useState } from "react";
import Section from "../../components/organisms/Section";
import { Container } from "../../components/helper/Container";
import HeaderElement from "../../components/elements/HeaderElement";
import GameWrapper from "../../components/organisms/GameWrapper";
import GameContentWrapper from "../../components/organisms/GameContentWrapper";
import GamePlayWrapper from "../../components/organisms/GamePlayWrapper";
import Button from "../../components/assets/Button";
import GameForm from "../../components/assets/GameForm";

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
  { row: 1, state: false },
  { row: 2, state: false },
  { row: 3, state: false },
  { row: 4, state: false },
  { row: 5, state: false },
  { row: 6, state: false },
  { row: 7, state: false },
  { row: 8, state: false },
  { row: 9, state: false },
  { row: 10, state: false },
];

const Numbers = () => {
  // DROPDOWN MENU
  const GAME_TYPE_STARTER = GAME_NUMBERS_INSTRUCTINS.messages[0][0];
  const GAME_NAME_STARTER = GAME_NUMBERS_INSTRUCTINS.messages[0][1];
  const title = GAME_NUMBERS_INSTRUCTINS.title;
  const gameTasks = NUMBERS_1_TO_10.length;

  // GAME NUMBERS
  const [mathTaskOutput, setMathTaskOutput] = useState("");
  const [mathTaskInput, setMathTaskInput] = useState("");
  const [mathTask, setMathTask] = useState("");
  const [mathTaskFeedback, setMathTaskFeedback] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isFirst, setIsFirst] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOutput, setIsOutput] = useState(true);
  const [taskCounter, setTaskCounter] = useState(-2);
  const [correctlyInputCounter, setCorrectlyInputCounter] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(taskCounter);

  const getMathTask = () => {
    const row = game.row;
    const currentNumber = NUMBERS_1_TO_10[taskCounter];
    const result = row * currentNumber;
    setMathTask(`${result}`);

    return `${currentNumber} * ${row}`;
  };

  const showUserInputField = () => {
    setIsOutput(false);
  };

  const checkForNextRound = () => {
    setIsOutput(true);
  };

  const handleCheckForNextRound = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    checkForNextRound();
  };

  const onNewGame = () => {
    setIsFirst(false);
    setIsPlaying(true);
    setIsOutput(true);
  };

  const compareStrings = (str1: string, str2: string) =>
    str1.trim().toUpperCase() === str2.trim().toUpperCase() ? true : false;

  const getFinalMessage = (correctlyInputs: number) =>
    correctlyInputs > gameTasks / 2
      ? `Super, Du hast ${correctlyInputs} Aufgaben von ${gameTasks} richtig! Toll :)`
      : `Du hast ${correctlyInputCounter} richtig, probiere es gleich nochmal... Das geht bestimmt besser :)`;

  const setFinalResult = () => {
    setFeedback(getFinalMessage(correctlyInputCounter));
    setIsPlaying(false);
  };

  const setUpGame = () => {
    setMathTaskOutput("");
    setMathTaskInput("");
    setMathTaskOutput(getMathTask);
  };

  const resetForNewRound = () => {
    setMathTaskOutput("");
    setMathTaskInput("");
    setMathTaskOutput(getMathTask);
    setTaskCounter((prevTaskCounter) => prevTaskCounter + 1);
  };

  useEffect(() => {
    isPlaying && setUpGame();
    setTaskCounter((prevTaskCounter) => prevTaskCounter + 1);
  }, [isPlaying]);

  useEffect(() => {
    if (isOutput && mathTaskOutput && mathTaskInput) {
      if (taskCounter < 10) {
        if (compareStrings(mathTask, mathTaskInput)) {
          resetForNewRound();
          setCorrectlyInputCounter(
            (prevCorrectlyInputCounter) => prevCorrectlyInputCounter + 1
          );
        } else {
          resetForNewRound();
        }
      } else {
        setTaskCounter(-1);
        setCorrectlyInputCounter(0);
        setFinalResult();
      }
    }
    inputRef.current && inputRef.current.focus();
  }, [isOutput, mathTaskOutput, mathTaskInput]);

  return (
    <Section sectionName="numbers" classNames="games | clr-secondary-1-300">
      <Container>
        <GameWrapper>
          <aside>

          </aside>
          <GameContentWrapper>
            <HeaderElement
              title="Zahlen"
              subTitle="Wähle aus, was Du spielen möchtest"
              classNames="mx-bottom-2"
              isH1={true}
            />
            <GamePlayWrapper bg="bg-secondary-1-900">
              <div style={{ display: isPlaying ? "block" : "none" }}>
                <GameForm isTrue={isOutput} forTrue="grid" forFalse="none">
                  <p className="fs-500 letter-spacing-wide">{mathTaskOutput}</p>
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
                    value={mathTaskInput.toUpperCase()}
                    onChange={(event) => setMathTaskInput(event.target.value)}
                    required
                    ref={inputRef}
                    className="fs-500 text-center mx-auto letter-spacing-default fw-bold"
                    style={{
                      width: `calc(6.25rem + ${
                        mathTaskOutput.length * 1.5625
                      }rem)`,
                    }}
                  />
                  <Button type="submit">vergleichen</Button>
                </GameForm>
              </div>
              <GameForm isTrue={isPlaying} forTrue="none" forFalse="grid">
                {/* {feedback && <p className="fs-500">{feedback}</p>}
                {game && (
                  <p className="fs-500">{`Reihe ${game.row} mit dem Spiel: ${game.name}`}</p>
                )} */}
                {feedback ? (
                  <p className="fs-500">{feedback}</p>
                ) : (
                  <p className="fs-500">{`Reihe ${game.row} mit dem Spiel: ${game.name}`}</p>
                )}
                <Button onClick={onNewGame}>
                  {isFirst ? "Spiel starten" : "nochmal spielen"}
                </Button>
              </GameForm>
            </GamePlayWrapper>
          </GameContentWrapper>
        </GameWrapper>
      </Container>
    </Section>
  );
};

export default Numbers;
// import { useEffect, useRef, useState } from "react";
// import Section from "../../components/organisms/Section";
// import { Container } from "../../components/helper/Container";
// import HeaderElement from "../../components/elements/HeaderElement";
// import GameWrapper from "../../components/organisms/GameWrapper";
// import GameContentWrapper from "../../components/organisms/GameContentWrapper";
// import GamePlayWrapper from "../../components/organisms/GamePlayWrapper";
// import Button from "../../components/assets/Button";
// import GameForm from "../../components/assets/GameForm";

// const NUMBERS_1_TO_10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const GAME_NUMBERS_INSTRUCTINS = {
//   title: "Reihe",
//   messages: [
//     ["presentation", "Präsentation"],
//     ["paper", "Papier"],
//     ["pc", "PC"],
//   ],
// };
// const OPEN_STATES = [
//   { row: 1, state: false },
//   { row: 2, state: false },
//   { row: 3, state: false },
//   { row: 4, state: false },
//   { row: 5, state: false },
//   { row: 6, state: false },
//   { row: 7, state: false },
//   { row: 8, state: false },
//   { row: 9, state: false },
//   { row: 10, state: false },
// ];
// // Array.from({ length: ROW_NUMBER }).map((item, index) => ({
// //   id: index + 1,
// //   state: false,
// // }))

// type TOpenProps = {
//   row: number;
//   state: boolean;
// };

// const Numbers = () => {
//   // DROPDOWN MENU
//   const GAME_TYPE_STARTER = GAME_NUMBERS_INSTRUCTINS.messages[0][0];
//   const GAME_NAME_STARTER = GAME_NUMBERS_INSTRUCTINS.messages[0][1];
//   const title = GAME_NUMBERS_INSTRUCTINS.title;
//   const gameTasks = NUMBERS_1_TO_10.length;
//   const [open, setOpen] = useState<TOpenProps[]>(OPEN_STATES);
//   const [game, setGame] = useState({
//     row: 1,
//     type: GAME_TYPE_STARTER,
//     name: GAME_NAME_STARTER,
//   });

//   const handleOpen = (row: number) => {
//     setOpen((prevOpen) =>
//       prevOpen.map((prev) => {
//         if (prev.row === row) {
//           return { ...prev, state: !prev.state };
//         } else {
//           return { ...prev, state: false };
//         }
//       })
//     );

//     setGame((prevGame) => {
//       return {
//         ...prevGame,
//         row,
//         type: GAME_TYPE_STARTER,
//         name: GAME_NAME_STARTER,
//       };
//     });

//     setIsFirst(true);
//     setFeedback("");
//   };

//   const handleGameType = (type: string, name: string) => {
//     setGame((prevGame) => {
//       return {
//         ...prevGame,
//         type: type,
//         name: name,
//       };
//     });
//   };

//   // GAME NUMBERS
//   const [mathTaskOutput, setMathTaskOutput] = useState("");
//   const [mathTaskInput, setMathTaskInput] = useState("");
//   const [mathTask, setMathTask] = useState("");
//   const [mathTaskFeedback, setMathTaskFeedback] = useState("");
//   const [feedback, setFeedback] = useState("");
//   const [isFirst, setIsFirst] = useState(true);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isOutput, setIsOutput] = useState(true);
//   const [taskCounter, setTaskCounter] = useState(-2);
//   const [correctlyInputCounter, setCorrectlyInputCounter] = useState(0);
//   const inputRef = useRef<HTMLInputElement>(null);
//   console.log(taskCounter);

//   const getMathTask = () => {
//     const row = game.row;
//     const currentNumber = NUMBERS_1_TO_10[taskCounter];
//     const result = row * currentNumber;
//     setMathTask(`${result}`);

//     return `${currentNumber} * ${row}`;
//   };

//   const showUserInputField = () => {
//     setIsOutput(false);
//   };

//   const checkForNextRound = () => {
//     setIsOutput(true);
//   };

//   const handleCheckForNextRound = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     checkForNextRound();
//   };

//   const onNewGame = () => {
//     setIsFirst(false);
//     setIsPlaying(true);
//     setIsOutput(true);
//   };

//   const compareStrings = (str1: string, str2: string) =>
//     str1.trim().toUpperCase() === str2.trim().toUpperCase() ? true : false;

//   const getFinalMessage = (correctlyInputs: number) =>
//     correctlyInputs > gameTasks / 2
//       ? `Super, Du hast ${correctlyInputs} Aufgaben von ${gameTasks} richtig! Toll :)`
//       : `Du hast ${correctlyInputCounter} richtig, probiere es gleich nochmal... Das geht bestimmt besser :)`;

//   const setFinalResult = () => {
//     setFeedback(getFinalMessage(correctlyInputCounter));
//     setIsPlaying(false);
//   };

//   const setUpGame = () => {
//     setMathTaskOutput("");
//     setMathTaskInput("");
//     setMathTaskOutput(getMathTask);
//   };

//   const resetForNewRound = () => {
//     setMathTaskOutput("");
//     setMathTaskInput("");
//     setMathTaskOutput(getMathTask);
//     setTaskCounter((prevTaskCounter) => prevTaskCounter + 1);
//   };

//   useEffect(() => {
//     isPlaying && setUpGame();
//     setTaskCounter((prevTaskCounter) => prevTaskCounter + 1);
//   }, [isPlaying]);

//   useEffect(() => {
//     if (isOutput && mathTaskOutput && mathTaskInput) {
//       if (taskCounter < 10) {
//         if (compareStrings(mathTask, mathTaskInput)) {
//           resetForNewRound();
//           setCorrectlyInputCounter(
//             (prevCorrectlyInputCounter) => prevCorrectlyInputCounter + 1
//           );
//         } else {
//           resetForNewRound();
//         }
//       } else {
//         setTaskCounter(-1);
//         setCorrectlyInputCounter(0);
//         setFinalResult();
//       }
//     }
//     inputRef.current && inputRef.current.focus();
//   }, [isOutput, mathTaskOutput, mathTaskInput]);

//   return (
//     <Section sectionName="numbers" classNames="games | clr-secondary-1-300">
//       <Container>
//         <GameWrapper>
//           <aside
//             className="game-aside"
//             style={{ pointerEvents: !isPlaying ? "auto" : "none" }}
//           >
//             <ul className="list-row | fs-450" role="list">
//               {NUMBERS_1_TO_10.map((row, index) => (
//                 <li key={row + index}>
//                   <button onClick={() => handleOpen(row)} className="row">
//                     {title} {row}
//                   </button>
//                   {open[index].state && (
//                     <ul role="list" className="list-type">
//                       {GAME_NUMBERS_INSTRUCTINS.messages.map(
//                         (message, index) => (
//                           <li
//                             key={index}
//                             onClick={() =>
//                               handleGameType(message[0], message[1])
//                             }
//                             className="type"
//                           >
//                             {message[1]}
//                           </li>
//                         )
//                       )}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </aside>
//           <GameContentWrapper>
//             <HeaderElement
//               title="Zahlen"
//               subTitle="Wähle aus, was Du spielen möchtest"
//               classNames="mx-bottom-2"
//               isH1={true}
//             />
//             <GamePlayWrapper bg="bg-secondary-1-900">
//               <div style={{ display: isPlaying ? "block" : "none" }}>
//                 <GameForm isTrue={isOutput} forTrue="grid" forFalse="none">
//                   <p className="fs-500 letter-spacing-wide">{mathTaskOutput}</p>
//                   <Button onClick={showUserInputField}>Ok</Button>
//                 </GameForm>
//                 <GameForm
//                   isTrue={isOutput}
//                   forTrue="none"
//                   forFalse="grid"
//                   onSubmit={handleCheckForNextRound}
//                 >
//                   <input
//                     type="text"
//                     value={mathTaskInput.toUpperCase()}
//                     onChange={(event) => setMathTaskInput(event.target.value)}
//                     required
//                     ref={inputRef}
//                     className="fs-500 text-center mx-auto letter-spacing-default fw-bold"
//                     style={{
//                       width: `calc(6.25rem + ${
//                         mathTaskOutput.length * 1.5625
//                       }rem)`,
//                     }}
//                   />
//                   <Button type="submit">vergleichen</Button>
//                 </GameForm>
//               </div>
//               <GameForm isTrue={isPlaying} forTrue="none" forFalse="grid">
//                 {/* {feedback && <p className="fs-500">{feedback}</p>}
//                 {game && (
//                   <p className="fs-500">{`Reihe ${game.row} mit dem Spiel: ${game.name}`}</p>
//                 )} */}
//                 {feedback ? (
//                   <p className="fs-500">{feedback}</p>
//                 ) : (
//                   <p className="fs-500">{`Reihe ${game.row} mit dem Spiel: ${game.name}`}</p>
//                 )}
//                 <Button onClick={onNewGame}>
//                   {isFirst ? "Spiel starten" : "nochmal spielen"}
//                 </Button>
//               </GameForm>
//             </GamePlayWrapper>
//           </GameContentWrapper>
//         </GameWrapper>
//       </Container>
//     </Section>
//   );
// };

// export default Numbers;
