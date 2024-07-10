import React from "react";
import { clearCanvas, undoCanvas } from "./CanvasUtils";
import { useStore } from "../store/store";

interface BarProps {
  canvasRef: React.MutableRefObject<any>; // Puedes ajustar el tipo según tus necesidades
}

const Bar: React.FC<BarProps> = ({ canvasRef }) => {
  const handleClear = () => {
    clearCanvas(canvasRef);
  };

  const handleUndo = () => {
    undoCanvas(canvasRef);
  };

  const EraseCursor = () => {
    setBrushColor("white");
  };

  const { brushRadius, setBrushRadius, brushColor, setBrushColor } = useStore();

  /* const [brushColor, setBrushColor] = React.useState<string>("#000");
  const [brushRadius1, setBrushRadius1] = React.useState<number>(2); */

  /* const toggleEraser = () => {
    if (brushColor === "#000") {
      setBrushColor("#FFF"); // Cambiar al color de fondo
      setBrushRadius1(15); // Aumentar el tamaño del pincel para borrar más rápido
    } else {
      setBrushColor("#000"); // Cambiar de nuevo al color del pincel
      setBrushRadius1(2); // Restaurar el tamaño del pincel
    }
  }; */

  return (
    <div className="h-screen w-[15%] flex flex-col justify-center items-center bg-black bg-opacity-70">
      <div className="bg-red-200 h-[50%] flex flex-col justify-evenly w-[80%] border-2 border-black items-center rounded-lg p-4">
        {/* <button onClick={toggleEraser}>Borrador</button> */}
        <button onClick={handleClear}>Limpiar</button>
        <button onClick={handleUndo}>Deshacer</button>
        <select
          value={brushColor}
          onChange={(e) => setBrushColor(e.target.value)}
        >
          <option value="black">Negro</option>
          <option value="yellow">Amarillo</option>
          <option value="red">Rojo</option>
          <option value="green">Verde</option>
          <option value="blue">Azul</option>
        </select>
        <button onClick={EraseCursor}>Borrar</button>
        <input
          type="range"
          min="1"
          max="100"
          value={brushRadius}
          onChange={(e) => setBrushRadius(parseInt(e.target.value))}
        />
        {/* <button>Lapicero</button>
          <button>Cuadros</button>
        <button>Rectángulos</button>
        <button>Círculos</button>
        <button>Flechas</button>
        <button>Cuadros de texto</button> */}
      </div>
      <div className="bg-red-200 h-[50%] flex flex-col justify-evenly w-[80%] border-2 border-black items-center rounded-lg p-4">
        Hola mundo
      </div>
    </div>
  );
};

export default Bar;
