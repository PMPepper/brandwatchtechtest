import { render, screen } from '@testing-library/react';
import Pending from './Pending';

test('renders "Please wait, loading"', () => {
  render(<Pending />);
  const linkElement = screen.getByText(/Please wait, loading/i);
  expect(linkElement).toBeInTheDocument();
});
