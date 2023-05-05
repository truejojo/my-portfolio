import React from 'react'

type TInputWrapperProps = {
  children: React.ReactNode;
}

const InputWrapper = ({children}: TInputWrapperProps) => {
  return (
    <div className='input-wrapper'>{children}</div>
  )
}

export default InputWrapper