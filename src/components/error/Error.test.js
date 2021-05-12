import { render, screen } from '@testing-library/react';
import ErrorComponent from './Error';

const exampleMessage = 'Hello world';
const exampleError = new Error('Example error');

describe('Error', () => {
  test('renders message and error', () => {
    render(<ErrorComponent message={exampleMessage} error={exampleError} />);

    expect(screen.getByText(exampleMessage)).toBeInTheDocument();
    expect(screen.getByText(exampleError.message)).toBeInTheDocument();
    expect(screen.queryByRole('button')).toBeNull();
  });

  test('renders message and error with retry button', () => {
    render(<ErrorComponent message="Hello world" error={exampleError} retry={() => {}} />);

    expect(screen.getByText(exampleMessage)).toBeInTheDocument();
    expect(screen.getByText(exampleError.message)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
