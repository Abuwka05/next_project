import { render, screen } from '@testing-library/react';
import LessonCard from '@/components/LessonCard';
import { Lesson } from '@/lib/lessons';

const mockLesson: Lesson = {
  id: 'test',
  title: 'Test Lesson',
  description: 'Test description',
  words: [],
};

describe('LessonCard', () => {
  it('renders lesson info', () => {
    render(<LessonCard lesson={mockLesson} />);

    expect(screen.getByText('Test Lesson')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Start lesson')).toBeInTheDocument();
  });
});
