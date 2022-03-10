interface IPixelProps {
  x: number;
  y: number;
  color: string;
}

const Pixel = ({ x, y, color }: IPixelProps) => {
  return (
    <div
      className="pixel"
      style={{
        boxShadow: `${x}rem ${y}rem 0 -0.05rem ${color}`,
      }}
    />
  );
};

export default Pixel;
