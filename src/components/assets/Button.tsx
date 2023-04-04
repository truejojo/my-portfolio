type TButtonProps = {
  dataType: string;
  children?: React.ReactNode;
};

const Button = ({ dataType, children = "zum Spiel" }: TButtonProps) => (
  <button className={`button`} data-type={dataType}>
    {children}
  </button>
);

export default Button;
