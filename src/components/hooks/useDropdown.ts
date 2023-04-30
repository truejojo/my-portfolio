import { useState } from "react";
import useToggle from "./useToggle";
import { TOpenProps } from "../../utilities/types";

type TUseDropdownProps = {
  OPEN_STATES: TOpenProps[];
  GAME_TYPE_STARTER: string;
  GAME_NAME_STARTER: string;
};

const useDropdown = ({
  OPEN_STATES,
  GAME_TYPE_STARTER,
  GAME_NAME_STARTER,
}: TUseDropdownProps): [
  number,
  string,
  boolean,
  () => void,
  (newState: boolean) => void,
  boolean,
  () => void,
  (newState: boolean) => void,
  (gameRow: number) => void,
  (gameType: string, gameName: string) => void,
  TOpenProps[]
] => {
  const [openRow, setOpenRow] = useState<TOpenProps[]>(OPEN_STATES);
  const [game, setGame] = useState({
    gameRow: 1,
    gameType: GAME_TYPE_STARTER,
    gameName: GAME_NAME_STARTER,
  });
  const { gameRow, gameName } = game;

  const [isFirst, toggleIsFirst, setIsFirst] = useToggle();
  const [isMenuActive, toggleIsMenuActive, setIsMenuActive] = useToggle();

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

  return [    
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
  ];
};

export default useDropdown;
