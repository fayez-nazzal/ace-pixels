import { useEffect, useRef, useState } from "preact/hooks";
import Pixel from "./Pixel";

//  a grid component that fills the screen with Pixel components

interface IGridProps {
  paintColor: string;
}

const Gird = ({ paintColor }: IGridProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // array of Pixel components to render a grid
  const [pixels, setPixels] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    // get width and height in rem
    const width = Math.floor(ref.current!.clientWidth / 16);
    const height = Math.floor(ref.current!.clientHeight / 16);

    // create a two dimensional array of Pixel components
    const grid: typeof pixels = [];

    for (let x = 1; x < width - 1; x++) {
      for (let y = 1; y < height - 1; y++) {
        grid.push(<Pixel x={x} y={y} color="#fff" paintColor={paintColor} />);
      }
    }

    // set the grid
    setPixels(grid);
  }, []);

  // when paintCOlor changes, change for all Pixel components
  useEffect(() => {
    pixels.forEach((pixel) => {
      pixel.props.paintColor = paintColor;
    });
  }, [paintColor]);

  return (
    <div ref={ref} className="grid">
      {pixels}
    </div>
  );
};

export default Gird;
