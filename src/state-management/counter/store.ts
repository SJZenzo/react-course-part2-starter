import { create } from "zustand";

interface CoutnerStore {
  counter: number;
  max: number;
  increment: () => void;
  reset: () => void;
}

const useCounterStore = create<CoutnerStore>((set) => ({
  counter: 0,
  max: 5,
  increment: () => set((store) => ({ counter: store.counter + 1 })),
  reset: () => set((store) => ({ max: 10 })),
}));

export default useCounterStore;
