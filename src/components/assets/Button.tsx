type TButtonProps = {
  dataType?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
};

const Button = ({
  dataType,
  type = "button",
  onClick,
  children = "zum Spiel",
}: TButtonProps) => (
  <button
    className="button"
    type={type}
    data-type={dataType}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
