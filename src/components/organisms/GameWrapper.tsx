type TGameWrapperProps = {
  children: React.ReactNode;
};

const GameWrapper = ({ children }: TGameWrapperProps) => (
  <div className="game-wrapper">{children}</div>
);

export default GameWrapper;
