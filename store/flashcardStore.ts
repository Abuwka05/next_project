import { create } from 'zustand';

type FlashcardState = {
  knownWords: string[];
  unknownWords: string[];
  markKnown: (word: string) => void;
  markUnknown: (word: string) => void;
};

export const useFlashcardStore = create<FlashcardState>((set) => ({
  knownWords: [],
  unknownWords: [],

  markKnown: (word: string) =>
    set((state: FlashcardState) => ({
      knownWords: [...new Set([...state.knownWords, word])],
      unknownWords: state.unknownWords.filter(
        (w: string) => w !== word
      ),
    })),

  markUnknown: (word: string) =>
    set((state: FlashcardState) => ({
      unknownWords: [...new Set([...state.unknownWords, word])],
      knownWords: state.knownWords.filter(
        (w: string) => w !== word
      ),
    })),
}));
