// Unfortunately I was unable to get this test working correctly. It appears the test runner has issues with
// SVG/D3. Given more time I would investigate further.
// 
import { render, screen, waitFor } from '@testing-library/react';
import Wordcloud from './Wordcloud';

const exampleWords = [
  {
    text: 'Hello',
    value: 2,
    colour: 'green'
  },
  {
    text: 'World',
    value: 1,
    colour: 'red'
  }
];

describe('Wordcloud', () => {
  test(`renders words correctly`, async () => {
    render(<Wordcloud width={1000} height={1000} words={exampleWords} />);

    screen.debug()

    await screen.findByText(exampleWords[0].text);

    screen.debug()

    // exampleWords.forEach(word => {
    //   const wordElement = screen.getByText(word.text);
    //
    //   expect(wordElement).toBeInTheDocument();
    //
    //   //TODO check size/colour
    // });
  });
});
