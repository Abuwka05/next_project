import Link from 'next/link';
import { Lesson } from '@/lib/lessons';

type Props = {
  lesson: Lesson;
};

export default function LessonCard({ lesson }: Props) {
  return (
    <article className="border rounded p-4 hover:shadow">
      <h3 className="text-xl font-semibold">{lesson.title}</h3>
      <p className="text-gray-600 mb-2">{lesson.description}</p>
      <Link
        href={`/lessons/${lesson.id}`}
        className="text-blue-600 underline"
      >
        Start lesson
      </Link>
    </article>
  );
}
