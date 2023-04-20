import React, {forwardRef} from 'react'

type TGameInputFieldProps = {
  maxLength: number;
  value: string;
  // ref: React.RefObject<HTMLInputElement>;
  onChange: (event: React.ChangeEvent<HTMLInputElement> ) => void;
}

const GameInputField = forwardRef<HTMLInputElement, TGameInputFieldProps>((props, ref) =>  (
  <input
  type="text"
  className="fs-500 text-center mx-auto letter-spacing-default fw-bold"
  maxLength={props.maxLength}
  value={props.value}
  ref={ref}
  onChange={props.onChange}
/>
  ));

export default GameInputField
// import React from 'react'

// type TGameInputFieldProps = {
//   maxLength: number;
//   value: string;
//   ref: React.RefObject<HTMLInputElement>;
//   onChange: (event: React.ChangeEvent<HTMLInputElement> ) => void;
// }

// const GameInputField = ({maxLength = 10, value, ref, onChange}:TGameInputFieldProps) =>  (
//   <input
//   type="text"
//   className="fs-500 text-center mx-auto letter-spacing-default fw-bold"
//   maxLength={maxLength}
//   value={value}
//   ref={ref}
//   onChange={onChange}
// />
//   )

// export default GameInputField