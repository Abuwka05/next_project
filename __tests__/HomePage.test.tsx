import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders main heading', () => {
    render(<HomePage />);
    expect(
      screen.getByText('Learn Languages Effectively')
    ).toBeInTheDocument();
  });
});
