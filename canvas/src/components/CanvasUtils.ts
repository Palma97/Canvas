// canvasUtils.ts
import { MutableRefObject } from "react";
import CanvasDraw from "react-canvas-draw";

type CanvasDrawType = CanvasDraw & {
  clear: () => void;
  undo: () => void;
};

export const clearCanvas = (
  canvasRef: MutableRefObject<CanvasDrawType> | null
) => {
  if (canvasRef && canvasRef.current) {
    canvasRef.current.clear();
  }
};

export const undoCanvas = (
  canvasRef: MutableRefObject<CanvasDrawType> | null
) => {
  if (canvasRef && canvasRef.current) {
    canvasRef.current.undo();
  }
};
