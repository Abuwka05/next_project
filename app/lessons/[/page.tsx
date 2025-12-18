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
      <h1>{lesson.title}</h1>
      <p>{lesson.description}</p>

      <ul>
        {lesson.words.map(word => (
          <li key={word.term}>
            {word.term} - {word.translation}
          </li>
        ))}
      </ul>
    </section>
  );
}
