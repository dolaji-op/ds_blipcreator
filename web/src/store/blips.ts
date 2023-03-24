import create from 'zustand';
import type { StoreState } from '.';

export interface BlipColumn extends Omit<StoreState, 'groups'> {
  id: number;
  name: string;
  zone: string;
  groups: { [k: string]: number };
}

export const useBlips = create<{ blips: BlipColumn[]; setBlips: (value: BlipColumn[]) => void }>((set) => ({
  blips: [],
  setBlips: (blips: BlipColumn[]) => set({ blips }),
}));
