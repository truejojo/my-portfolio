type TGameContentWrapperProps = {
  children: React.ReactNode;
};

const GameContentWrapper = ({children}: TGameContentWrapperProps) => {
  return (
    <div className="game-content-wrapper | grid">{children}</div>
  )
}

export default GameContentWrapper