import { useState } from "react";
import Grid from "./Grid";
import logo from "./logo.svg";
import Pallette from "./Pallette";

function App() {
  const [paintColor, setPaintColor] = useState("#000");

  return (
    <div className="outer">
      <div className="inner">
        <Grid paintColor={paintColor} />
      </div>
      <Pallette paintColor={paintColor} onColorClick={setPaintColor} />
    </div>
  );
}

export default App;
