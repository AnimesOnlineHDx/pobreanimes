import { create } from "zustand";

export const useVideoStore = create((set) => ({
  url: "",
  setURL: (url) => set({ url }),
}));
