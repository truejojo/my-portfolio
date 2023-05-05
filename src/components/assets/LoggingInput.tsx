import React, {forwardRef} from "react"

type TLoggingInputProps = {
  label: string;
  type: string;
  idNumber: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const LoggingInput = forwardRef<HTMLInputElement, TLoggingInputProps>(
  (props, ref) => (
    <div className="logging-input-wrapper">
      <label htmlFor={props.idNumber}>{props.label}</label>{" "}
      <input
        type={props.type}
        id={props.idNumber}
        placeholder={props.placeholder}
        value={props.value}
        ref={ref}
        onChange={props.onChange}
        className="px-left-2"
      />
    </div>
  )
);

export default LoggingInput;