type TGameTaskOutputProps = {
  task: string;
}

const GameTaskOutput = ({task}: TGameTaskOutputProps) => (
  <p className="letter-spacing-wide">{task}</p>
);

export default GameTaskOutput;
