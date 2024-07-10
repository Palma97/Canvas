// App.tsx
import React, { useRef } from "react";
import CanvasComponent from "./components/Canvas";
import ActionBar from "./components/Bar";

const App: React.FC = () => {
  const canvasRef = useRef<any>(null); // Ajusta el tipo según sea necesario

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <ActionBar canvasRef={canvasRef} />
      <CanvasComponent canvasRef={canvasRef} />
    </div>
  );
};

export default App;

/* import "./App.css";
import React from "react";
import CanvasDraw from "react-canvas-draw";
import Canvas from "./components/Canvas"
import Bar from "./components/Bar";
import { useStore } from "./store/store";

type CanvasDrawType = CanvasDraw & {
  clear: () => void;
};

function App() {

  const { brushRadius, brushColor } = useStore();

  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <Bar></Bar>
      <button onClick={clear}>Clear</button>
      <button onClick={undo}>Ctrl + Z</button>

      <CanvasDraw
        className="border border-double border-black"
        ref={canvasRef}
        brushColor={brushColor}
        brushRadius={brushRadius}
        canvasWidth={window.innerWidth}
        canvasHeight={window.innerHeight}
        hideGrid={true}
        lazyRadius={0}
      ></CanvasDraw>
    </div>
  );
}

export default App;
 */
