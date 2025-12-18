import { useProgressStore } from '@/store/progressStore';

export function useProgress() {
  const knownWords = useProgressStore((state) => state.knownWords.length);
  const totalWords = useProgressStore((state) => state.totalWords);

  const progress = totalWords > 0 ? Math.round((knownWords / totalWords) * 100) : 0;

  return { knownWords, totalWords, progress };
}
