import { useState } from "react";

type TOpenProps = {
  row: number;
  state: boolean;
};

const Dropdown = () => {
  const [open, setOpen] = useState<TOpenProps[]>(OPEN_STATES);
  const [game, setGame] = useState({
    row: 1,
    type: GAME_TYPE_STARTER,
    name: GAME_NAME_STARTER,
  });

  const handleOpen = (row: number) => {
    setOpen((prevOpen) =>
      prevOpen.map((prev) => {
        if (prev.row === row) {
          return { ...prev, state: !prev.state };
        } else {
          return { ...prev, state: false };
        }
      })
    );

    setGame((prevGame) => {
      return {
        ...prevGame,
        row,
        type: GAME_TYPE_STARTER,
        name: GAME_NAME_STARTER,
      };
    });

    setIsFirst(true);
    setFeedback("");
  };

  const handleGameType = (type: string, name: string) => {
    setGame((prevGame) => {
      return {
        ...prevGame,
        type: type,
        name: name,
      };
    });
  };

  return (
    <div
      className="game-aside"
      style={{ pointerEvents: !isPlaying ? "auto" : "none" }}
    >
      <ul className="list-row | fs-450" role="list">
        {NUMBERS_1_TO_10.map((row, index) => (
          <li key={row + index}>
            <button onClick={() => handleOpen(row)} className="row">
              {title} {row}
            </button>
            {open[index].state && (
              <ul role="list" className="list-type">
                {GAME_NUMBERS_INSTRUCTINS.messages.map((message, index) => (
                  <li
                    key={index}
                    onClick={() => handleGameType(message[0], message[1])}
                    className="type"
                  >
                    {message[1]}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
