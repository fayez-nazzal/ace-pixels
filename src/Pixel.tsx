import { useEffect, useState, useContext } from "preact/hooks";
import { paintContext } from "./paintContext";

interface IPixelProps {
  x: number;
  y: number;
  color: string;
}

const Pixel = ({ x, y, color }: IPixelProps) => {
  // wether the pixel is painted or not
  const [opacity, setOpacity] = useState(0);
  const { paintColor } = useContext(paintContext);
  const [ownColor, setOwnColor] = useState(paintColor);

  const setColor = () => {
    setOwnColor(paintColor);

    // set the opacity
    setOpacity(1);
  };

  const eraseColor = () => {
    setOpacity(0);
  };

  // when click, set the color
  const onClick = (e: any) => {
    setColor();
    e.preventDefault();
  };

  // override context menu ( right mouse click ) to erase the color
  const onContextMenu = (e: any) => {
    eraseColor();
    e.preventDefault();
  };

  // if mouse is over while not pressing the mouse button and opacity is 0, set opacity to 0.18
  // if mouse is over while pressing the mouse button, set opacity to 1
  // if mouse is over while pressing the right mouse button, set opacity to 0
  const onMouseOver = (e: any) => {
    if (e.buttons === 0 && opacity === 0) {
      setOpacity(0.18);
    } else if (e.buttons === 1) {
      setColor();
    } else if (e.buttons === 2) {
      setColor();
    }
  };

  // when mouse leave while opacity is 0.18, set opacity to 0
  const onMouseLeave = () => {
    if (opacity === 0.18) {
      eraseColor();
    }
  };

  return (
    <>
      <div
        className="pixel"
        style={{
          boxShadow: `${x}rem ${y}rem 0 -0.05rem ${color}`,
        }}
      />
      <div
        className="pixel hover-pixel"
        style={{
          top: `${y}rem`,
          left: `${x}rem`,
          backgroundColor: ownColor,
          opacity: opacity,
        }}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        onContextMenu={onContextMenu}
        // prevent drag events
        onDragStart={(e) => e.preventDefault()}
        onDragEnd={(e) => e.preventDefault()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => e.preventDefault()}
      />
    </>
  );
};

export default Pixel;
