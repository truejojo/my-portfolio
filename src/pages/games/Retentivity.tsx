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
} from "../../utilities/retentivity";
import { useRef, useState } from "react";
import useToggle from "../../components/hooks/useToggle";
import ToggleShowWrapper from "../../components/organisms/ToggleShowWrapper";
import GameForm from "../../components/assets/GameForm";
import GameOutput from "../../components/assets/GameOutput";
import GameInputButton from "../../components/assets/GameInputButton";
import useString from "../../components/hooks/useString";

const Retentivity = () => {
  const GAME_TYPE_STARTER = RETENTIVITY_INSTRUCTIONS.messages[0][0];
  const GAME_NAME_STARTER = RETENTIVITY_INSTRUCTIONS.messages[0][1];
  const GAME_NAME_SECOND = RETENTIVITY_INSTRUCTIONS.messages[1][1];
  const GAME_NAME_THIRD = RETENTIVITY_INSTRUCTIONS.messages[2][1];
  const title = RETENTIVITY_INSTRUCTIONS.title;
  const [openRow, setOpenRow] = useState<TOpenStatesProps[]>(OPEN_STATES);
  const [game, setGame] = useState({
    gameRow: 1,
    gameType: GAME_TYPE_STARTER,
    gameName: GAME_NAME_STARTER,
  });
  const { gameRow, gameName } = game;
  console.log(openRow);

  const [isPlaying, toggleIsPlaying, setIsPlaying] = useToggle({
    initialState: false,
  });
  const [isFirst, toggleIsFirst, setIsFirst] = useToggle();
  const [isStart, toggleIsStart, setIsStart] = useToggle();
  const [message, setMessage] = useString();

  const inputRef = useRef<HTMLInputElement>(null);
  const inputPlayGameRef = useRef<HTMLInputElement>(null);
  const inputSameRef = useRef<HTMLInputElement>(null);
  const inputNewRef = useRef<HTMLInputElement>(null);
  const inputStmRef = useRef<HTMLInputElement>(null);

  // Menu
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
  };

  // Game
  const handlePlayGame = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    toggleIsPlaying();
    toggleIsStart();
    setIsFirst(false);
  };

  const setSame = () => {
    return <>Same</>;
  };
  const setNew = () => {
    return <>New</>;
  };
  const setStm = () => {
    return <>Stm</>;
  };

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
            colorNumber={2}
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
                classNames="bg-secondary-2-900"
              >
                <GameOutput>
                  {isFirst ? (
                    <p className="fs-500">{`${title}-${RETENTIVITYS[gameRow - 1]} mit dem Spiel: ${gameName}`}</p>
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
