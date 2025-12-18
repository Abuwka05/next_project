import { useFlashcardStore } from '@/store/flashcardStore';

export function useFlashcardStats() {
  const known = useFlashcardStore(
    (state) => state.knownWords.length
  );
  const unknown = useFlashcardStore(
    (state) => state.unknownWords.length
  );

  return { known, unknown };
}
