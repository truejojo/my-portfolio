import React from 'react'

type TGamePlayWrapperProps = {
  children: React.ReactNode;
}

const GamePlayWrapper = ({children}: TGamePlayWrapperProps) => {
  return (
    <div className='game-play-wrapper'>{children}</div>
  )
}

export default GamePlayWrapper