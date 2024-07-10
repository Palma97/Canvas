import create from "zustand";

interface store {
  brushColor: string;
  brushRadius: number;
  setBrushRadius: (radius: number) => void;
  setBrushColor: (color: string) => void;
}

export const useStore = create<store>((set) => ({
  brushColor: "black",
  brushRadius: 10,
  setBrushRadius: (radius: number) => set({ brushRadius: radius }),
  setBrushColor: (color: string) => set({ brushColor: color }),
}));
