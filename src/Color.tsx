interface IColorProps {
  paintColor: string;
  value: string;
  onClick: (value: string) => void;
}

const Color = ({ value, onClick, paintColor }: IColorProps) => {
  return (
    <div
      className="color"
      style={{
        backgroundColor: value,
        outline: paintColor === value ? "2px solid #fff" : "none",
      }}
      onClick={() => {
        onClick(value);
      }}
    />
  );
};

export default Color;
