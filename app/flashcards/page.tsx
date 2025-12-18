'use client';

import Flashcard from '@/components/Flashcard';
import { lessons } from '@/lib/lessons';

export default function FlashcardsPage() {
  const words = lessons.flatMap(lesson => lesson.words);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Flashcards</h1>

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
