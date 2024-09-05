import { create } from "zustand";
import { shallow } from 'zustand/shallow';

export interface StoreState {
  inIntro: boolean,
  hoveringNav: boolean,
  setHoveringNav: (hoveringNav: boolean) => void,
  setInIntro: (inIntro: boolean) => void,
}

const useStore = create<StoreState>((set) => ({
  inIntro: true,
  hoveringNav: false,
  setHoveringNav: (hoveringNav: boolean) => set({ hoveringNav }),
  setInIntro: (inIntro: boolean) => set({ inIntro }),
}));

export { shallow, useStore };
