import Color from "./Color";

interface IPalletteProps {
  onColorClick: (color: string) => void;
  paintColor: string;
}

const colors = [
  "#000",
  "#D1D1D1",
  "#fff",
  "#E83A14",
  "#FFBDE6",
  "#019267",
  "#85C88A",
  "#0E3EDA",
  "#85F4FF",
  "#FFFA4D",
  "#FFB72B",
  "#6A5495",
];

const Pallette = ({ onColorClick, paintColor }: IPalletteProps) => {
  return (
    <div className="pallette">
      {colors.map((color) => (
        <Color
          key={color}
          value={color}
          paintColor={paintColor}
          onClick={onColorClick}
        />
      ))}
    </div>
  );
};

export default Pallette;
