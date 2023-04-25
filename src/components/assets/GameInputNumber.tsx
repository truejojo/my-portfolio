import React from "react";

type TGameInputNumberProps = {
  idNumber: string;
  min: string;
  max: string;
  value: number;
  onChange: (event: number) => void;
  label: string;
};

const GameInputNumber = ({
  idNumber,
  min,
  max,
  value,
  onChange,
  label,
}: TGameInputNumberProps) => {
  return (
    <>
      <label htmlFor={idNumber}>{label}</label>{" "}
      <input
        type="number"
        id={idNumber}
        name="taskLength"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(parseInt(event.target.value))}
      />
    </>
  );
};

export default GameInputNumber;
