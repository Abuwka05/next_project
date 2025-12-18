'use client';

import { useProgress } from '@/hooks/useProgress';

export default function ProgressPage() {
  const { knownWords, totalWords, progress } = useProgress();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">My Progress</h1>
      <p>
        Known words: {knownWords} / {totalWords}
      </p>
      <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
        <div
          className="bg-green-600 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-2">{progress}% completed</p>
    </section>
  );
}
