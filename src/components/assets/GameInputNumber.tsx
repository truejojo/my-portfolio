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
        className="fs-450 px-inline-2 mx-left-4"
      />
    </>
  );
};

export default GameInputNumber;
