import LessonCard from '@/components/LessonCard';
import { lessons as staticLessons } from '@/lib/lessons';

export default function LessonsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Lessons</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {staticLessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </section>
  );
}
