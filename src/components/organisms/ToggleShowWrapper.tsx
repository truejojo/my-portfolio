import React from 'react'

type TToggleShowWrapperProps = {
  children: React.ReactNode;
  isShowing: boolean;
}

const ToggleShowWrapper = ({children, isShowing}: TToggleShowWrapperProps) => {
  return (
    <div style={{display: isShowing ? "grid" : "none"}} className='flow'>
      {children}
    </div>
  )
}

export default ToggleShowWrapper