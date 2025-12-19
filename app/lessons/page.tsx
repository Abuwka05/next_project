import type { Metadata } from 'next';
import LessonCard from '@/components/LessonCard';
import { Lesson } from '@/lib/lessons';

export const metadata: Metadata = {
  title: 'Lessons | Language Learning App',
  description: 'Browse and start language lessons',
};

async function getLessons(): Promise<Lesson[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/lessons`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch lessons');
  }

  return res.json();
}

export default async function LessonsPage() {
  const lessons = await getLessons();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Lessons</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  );
}
