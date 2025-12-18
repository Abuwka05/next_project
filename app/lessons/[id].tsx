import { lessons } from '@/lib/lessons';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

export default function LessonDetailPage({ params }: Props) {
  const lesson = lessons.find(l => l.id === params.id);

  if (!lesson) return notFound();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-2">{lesson.title}</h1>
      <p className="mb-4 text-gray-600">{lesson.description}</p>

      <ul className="space-y-2">
        {lesson.words.map(word => (
          <li
            key={word.term}
            className="border p-2 rounded flex justify-between"
          >
            <span>{word.term}</span>
            <span className="text-gray-500">{word.translation}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
