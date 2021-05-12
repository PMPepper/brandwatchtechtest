import { render, screen } from '@testing-library/react';
import SelectedTopic from './SelectedTopic';

const exampleTopic = {
  "id": "1751295897__Code",
  "label": "Code",
  "volume": 16,
  "type": "topic",
  "sentiment": {
      "neutral": 13,
      "positive": 3
  },
  "sentimentScore": 68,
  "burst": 25,
  "days": [
      {
          "date": "2014-06-06T00:00:00.000+0000",
          "volume": 5
      },
      {
          "date": "2014-06-04T00:00:00.000+0000",
          "volume": 2
      },
      {
          "date": "2014-06-07T00:00:00.000+0000",
          "volume": 2
      },
      {
          "date": "2014-06-09T00:00:00.000+0000",
          "volume": 1
      },
      {
          "date": "2014-06-08T00:00:00.000+0000",
          "volume": 1
      },
      {
          "date": "2014-06-03T00:00:00.000+0000",
          "volume": 3
      },
      {
          "date": "2014-06-05T00:00:00.000+0000",
          "volume": 2
      }
  ],
  "pageType": {
      "blog": 2,
      "facebook": 5,
      "forum": 2,
      "general": 2,
      "image": 0,
      "news": 5,
      "review": 0,
      "twitter": 0,
      "video": 0
  },
  "queries": [
      {
          "id": 1751295897,
          "name": "Berghain",
          "volume": 16
      }
  ]
};

describe('SelectedTopic', () => {
  test(`renders correctly`, () => {
    render(<SelectedTopic topic={exampleTopic} />);

    expect(screen.getByText('Code')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('13')).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
