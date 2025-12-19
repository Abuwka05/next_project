'use client';

import { useState } from 'react';
import { useFlashcardStore } from '@/store/flashcardStore';

type Props = {
  term: string;
  translation: string;
};

export default function Flashcard({ term, translation }: Props) {
  const [flipped, setFlipped] = useState(false);
  const [definition, setDefinition] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { markKnown, markUnknown } = useFlashcardStore();

  const loadDefinition = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`/api/dictionary?word=${term}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error);
      }

      setDefinition(data.definition);
    } catch {
      setError('Definition not available');
    } finally {
      setLoading(false);
    }
  };

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

      <div>
        <button
          onClick={loadDefinition}
          className="text-blue-600 underline"
        >
          Show definition
        </button>

        {loading && <p className="text-sm">Loading...</p>}
        {error && <p className="text-sm text-red-600">{error}</p>}
        {definition && (
          <p className="mt-2 text-sm text-gray-700">
            {definition}
          </p>
        )}
      </div>
    </div>
  );
}
