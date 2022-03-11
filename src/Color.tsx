import { useContext } from "preact/hooks";
import { paintContext } from "./paintContext";

interface IColorProps {
  value: string;
}

const Color = ({ value }: IColorProps) => {
  const { paintColor, setPaintColor } = useContext(paintContext);

  return (
    <div
      className="color"
      style={{
        backgroundColor: value,
        outline: paintColor === value ? "2px solid #fff" : "none",
      }}
      onClick={() => {
        setPaintColor(value);
      }}
    />
  );
};

export default Color;
