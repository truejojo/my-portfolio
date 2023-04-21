import { TOpenProps } from "../../pages/games/Numbers";

type TMessagesProps = {
  messages: string[][];
};

type TDropdonwProps = {
  handleOpen: (row: number) => void;
  handleGameType: (type: string, name: string) => void;
  // numbersArray: number[];
  numbersArray: string[];
  instrucionsArray: TMessagesProps;
  isPlaying: boolean;
  title: string;
  openRow: TOpenProps[];
};

const Dropdown = ({
  handleOpen,
  handleGameType,
  numbersArray,
  instrucionsArray,
  isPlaying,
  title,
  openRow,
}: TDropdonwProps) => {
  return (
    <aside
      className="game-aside"
      style={{ pointerEvents: !isPlaying ? "auto" : "none" }}
    >
      <ul className="list-row | fs-450" role="list">
        {numbersArray.map((row, index) => (
          <li key={row + index}>
            {/* <button onClick={() => handleOpen(row)} className="row"> */}
            <button onClick={() => handleOpen(index + 1)} className="row">
              {title} {row}
            </button>
            {openRow[index].state && (
              <ul role="list" className="list-type">
                {instrucionsArray.messages.map((message, index) => (
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
    </aside>
  );
};

export default Dropdown;
