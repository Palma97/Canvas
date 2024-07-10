// CanvasComponent.tsx
import React from "react";
import CanvasDraw from "react-canvas-draw";
import { useStore } from "../store/store";

interface CanvasComponentProps {
  canvasRef: React.MutableRefObject<CanvasDraw | null>;
}

const CanvasComponent: React.FC<CanvasComponentProps> = ({ canvasRef }) => {
  const { brushRadius, brushColor } = useStore();

  return (
    <CanvasDraw
      ref={canvasRef}
      canvasWidth={window.innerWidth}
      canvasHeight={window.innerHeight}
      hideGrid={true}
      brushColor={brushColor}
      brushRadius={brushRadius}
      lazyRadius={0}
    />
  );
};

export default CanvasComponent;

/* import React, { useRef, useEffect, useState, MouseEvent } from "react";

const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d");
      setContext(ctx);
    }
  }, []);

  const startDrawing = (event: MouseEvent<HTMLCanvasElement>) => {
    if (context) {
      const { offsetX, offsetY } = event.nativeEvent;
      context.beginPath();
      context.moveTo(offsetX, offsetY);
      setIsDrawing(true);
    }
  };

  const draw = (event: MouseEvent<HTMLCanvasElement>) => {
    if (isDrawing && context) {
      const { offsetX, offsetY } = event.nativeEvent;
      context.lineTo(offsetX, offsetY);
      context.stroke();
    }
  };

  const stopDrawing = () => {
    if (context) {
      context.closePath();
      setIsDrawing(false);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
      onMouseLeave={stopDrawing}
      style={{ border: "1px solid #000" }}
    />
  );
};

export default Canvas;
 */
