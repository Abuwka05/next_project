'use client';

import LessonCard from '@/components/LessonCard';
import { useLessons } from '@/hooks/useLessons';

export default function LessonsPage() {
  const { lessons, loading } = useLessons();

  if (loading) return <p>Loading lessons...</p>;

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Lessons</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {lessons.map(lesson => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  );
}
