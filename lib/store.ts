import { create } from "zustand";
import { shallow } from 'zustand/shallow';

export interface StoreState {
  inIntro: boolean,
  setInIntro: (inIntro: boolean) => void,
}

const useStore = create<StoreState>((set) => ({
  inIntro: true,
  setInIntro: (inIntro: boolean) => set({ inIntro }),
}));

export { shallow, useStore };
