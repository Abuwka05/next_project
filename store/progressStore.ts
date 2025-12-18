import { create } from 'zustand';
import { lessons } from '@/lib/lessons';

type ProgressState = {
  knownWords: string[];
  totalWords: number;
  markKnown: (word: string) => void;
};

export const useProgressStore = create<ProgressState>((set) => ({
  knownWords: [],
  totalWords: lessons.flatMap(l => l.words).length,
  markKnown: (word: string) =>
    set((state) => ({
      knownWords: [...new Set([...state.knownWords, word])]
    })),
}));
