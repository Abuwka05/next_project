import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Flashcard from '@/components/Flashcard';

// Zustand store mock
jest.mock('@/store/flashcardStore', () => ({
  useFlashcardStore: () => ({
    markKnown: jest.fn(),
    markUnknown: jest.fn(),
  }),
}));

describe('Flashcard component', () => {
  it('renders term by default', () => {
    render(<Flashcard term="Hello" translation="Salom" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('flips card on click', () => {
    render(<Flashcard term="Hello" translation="Salom" />);
    fireEvent.click(screen.getByText('Hello'));
    expect(screen.getByText('Salom')).toBeInTheDocument();
  });

  it('loads definition from API', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ definition: 'A greeting' }),
      } as any)
    );

    render(<Flashcard term="Hello" translation="Salom" />);
    fireEvent.click(screen.getByText('Show definition'));

    await waitFor(() =>
      expect(screen.getByText('A greeting')).toBeInTheDocument()
    );
  });
});
