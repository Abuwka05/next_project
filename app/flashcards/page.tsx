'use client';

import Flashcard from '@/components/Flashcard';
import { lessons } from '@/lib/lessons';
import { useProgress } from '@/hooks/useProgress';

export default function FlashcardsPage() {
  const words = lessons.flatMap(lesson => lesson.words);
  const { knownWords, totalWords, progress } = useProgress();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Flashcards</h1>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div
          className="bg-green-600 h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {words.map(word => (
          <Flashcard
            key={word.term}
            term={word.term}
            translation={word.translation}
          />
        ))}
      </div>
    </section>
  );
}
