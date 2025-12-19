import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Language Learning App',
  description: 'Learn languages effectively with interactive lessons and flashcards',
};

export default function HomePage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">
        Learn Languages Effectively
      </h1>
      <p className="text-gray-600">
        Take short lessons, practice with flashcards, and track your progress.
      </p>
    </section>
  );
}
