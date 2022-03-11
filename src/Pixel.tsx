import { useState } from "preact/hooks";

interface IPixelProps {
  x: number;
  y: number;
  color: string;
  paintColor: string;
}

const Pixel = ({ x, y, color, paintColor }: IPixelProps) => {
  // wether the pixel is painted or not
  const [opacity, setOpacity] = useState(0);
  const [ownColor, setOwnColor] = useState(paintColor);

  const setColor = () => {
    setOwnColor(color);

    // set the opacity
    setOpacity(opacity === 0 ? 1 : 0);
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

  // if mouse is over while not pressing the mouse button, set opacity to 0.18
  // if mouse is over while pressing the mouse button, set opacity to 1
  // if mouse is over while pressing the right mouse button, set opacity to 0
  const onMouseOver = (e: any) => {
    if (e.buttons === 0) {
      setOpacity(0.18);
    } else if (e.buttons === 1) {
      setOpacity(1);
    } else if (e.buttons === 2) {
      setOpacity(0);
    }
  };

  // when mouse leave while opacity is 0.18, set opacity to 0
  const onMouseLeave = () => {
    if (opacity === 0.18) {
      setOpacity(0);
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
          backgroundColor: paintColor,
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
