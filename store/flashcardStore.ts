import { create } from 'zustand';
import { useProgressStore } from './progressStore';

type FlashcardState = {
  knownWords: string[];
  unknownWords: string[];
  markKnown: (word: string) => void;
  markUnknown: (word: string) => void;
};

export const useFlashcardStore = create<FlashcardState>((set) => ({
  knownWords: [],
  unknownWords: [],

  markKnown: (word: string) => {
    set((state) => {
      const newKnown = [...new Set([...state.knownWords, word])];
      const newUnknown = state.unknownWords.filter(w => w !== word);

      // progress store bilan sinxronlash
      useProgressStore.getState().markKnown(word);

      return { knownWords: newKnown, unknownWords: newUnknown };
    });
  },

  markUnknown: (word: string) => {
    set((state) => {
      const newUnknown = [...new Set([...state.unknownWords, word])];
      const newKnown = state.knownWords.filter(w => w !== word);

      // progress store bilan sinxronlash
      // agar oldin progress store’ga qo‘shilgan bo‘lsa, olib tashlash
      useProgressStore.setState((state) => ({
        knownWords: state.knownWords.filter(w => w !== word),
      }));

      return { knownWords: newKnown, unknownWords: newUnknown };
    });
  },
}));
