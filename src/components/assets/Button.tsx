type TButtonProps = {
  type: string;
  text?: string;
};

const Button = ({ type, text = "zum Spiel" }: TButtonProps) => (
  <button className={`button`} data-type={type}>
    {text}
  </button>
);

export default Button;
