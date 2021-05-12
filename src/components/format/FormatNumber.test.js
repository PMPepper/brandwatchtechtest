import { render, screen } from '@testing-library/react';
import FormatNumber from './FormatNumber';

const exampleNumber = 123456.78;
const locale1 = 'en-GB';
const locale2 = 'fr';

describe('FormatNumber', () => {
  test(`renders value correctly for ${locale1}`, () => {
    render(<FormatNumber value={exampleNumber} locale={locale1} />);

    expect(screen.getByText('123,456.78')).toBeInTheDocument();
  });

  test(`renders value correctly for ${locale1} + 1 decimal place`, () => {
    render(<FormatNumber value={exampleNumber} decimalPlaces={1} locale={locale1} />);

    expect(screen.getByText('123,456.8')).toBeInTheDocument();
  });

  test(`renders value correctly for ${locale2}`, () => {
    render(<FormatNumber value={exampleNumber} locale={locale2} />);

    expect(screen.getByText('123 456,78')).toBeInTheDocument();
  });

  test(`renders value correctly for ${locale2} + 1 decimal place`, () => {
    render(<FormatNumber value={exampleNumber} locale={locale2} decimalPlaces={1} />);

    expect(screen.getByText('123 456,8')).toBeInTheDocument();
  });
});
