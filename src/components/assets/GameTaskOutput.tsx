type TGameTaskOutputProps = {
  task: string;
};

const GameTaskOutput = ({ task }: TGameTaskOutputProps) => (
  <p className="letter-spacing-wide" id="task">
    {task}
  </p>
);

export default GameTaskOutput;
