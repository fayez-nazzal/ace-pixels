import Grid from "./Grid";
import { PaintContextProvider } from "./paintContext";
import Pallette from "./Pallette";

function App() {
  return (
    <PaintContextProvider>
      <div className="outer">
        <div className="inner">
          <Grid />
        </div>
        <Pallette />
      </div>
    </PaintContextProvider>
  );
}

export default App;
