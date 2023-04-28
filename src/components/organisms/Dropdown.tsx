import { TOpenProps } from "../../utilities/types";

type TMessagesProps = {
  messages: string[][];
};

type TDropdonwProps = {
  handleOpen: (row: number) => void;
  handleGameType: (type: string, name: string) => void;
  gamesArray: string[];
  instrucionsArray: TMessagesProps;
  isPlaying: boolean;
  openRow: TOpenProps[];
  colorNumber: number;
  title?: string;
};

const Dropdown = ({
  handleOpen,
  handleGameType,
  gamesArray,
  instrucionsArray,
  isPlaying,
  openRow,
  colorNumber,
  title,
}: TDropdonwProps) => {
  return (
    <aside
      className={`game-aside`}
      style={{ pointerEvents: !isPlaying ? "auto" : "none" }}
    >
      <ul className={`list-row | fs-450 bg-secondary-${colorNumber}-700`} role="list">
        {gamesArray.map((row, index) => (
          <li key={row + index}>
            <button onClick={() => handleOpen(index + 1)} className={`row | bg-secondary-${colorNumber}-900 clr-secondary-${colorNumber}-300`}>
              {title && title} {row}
            </button>
            {openRow[index].state && (
              <ul role="list" className={`list-type | bg-secondary-${colorNumber}-900`}>
                {instrucionsArray.messages.map((message, index) => (
                  <li
                    key={index}
                    onClick={() => handleGameType(message[0], message[1])}
                    className={`type | bg-secondary-${colorNumber}-700 clr-secondary-${colorNumber}-100`}
                  >
                    {message[1]}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Dropdown;
