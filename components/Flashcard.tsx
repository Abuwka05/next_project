'use client';

import { useState } from 'react';
import { useFlashcardStore } from '@/store/flashcardStore';

type Props = {
  term: string;
  translation: string;
};

export default function Flashcard({ term, translation }: Props) {
  const [flipped, setFlipped] = useState(false);
  const { markKnown, markUnknown } = useFlashcardStore();

  return (
    <div className="border rounded p-6 text-center space-y-4">
      <div
        onClick={() => setFlipped(!flipped)}
        className="cursor-pointer text-xl font-semibold"
      >
        {flipped ? translation : term}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => markKnown(term)}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          I know
        </button>
        <button
          onClick={() => markUnknown(term)}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          I don’t know
        </button>
      </div>
    </div>
  );
}
