import {useMemo} from 'react';
import ReactWordcloud from 'react-wordcloud';


export default function Wordcloud({width, height, words, onWordClick = null}) {

  const options = useMemo(
    () => {
      const area = width ? width * height : 1000;
      const areaToMaxFontSize = 0.000075;
      const maxFontSize = area * areaToMaxFontSize

      return {
        rotations: 0,
        enableTooltip: false,
        fontFamily: "'Arial', -apple-system, 'Helvetica Neue', 'Droid Sans'",
        fontSizes: [maxFontSize / 5, maxFontSize],
        deterministic: true
      };
    },
    [width, height]
  );

  const wordCloudSize = useMemo(
    () => [width || 100, height || 100],
    [width, height]
  );

  const callbacks = useMemo(
    () => ({
      getWordColor: word => word.colour,
      onWordClick,
    }),
    [onWordClick]
  )

  return <ReactWordcloud
    callbacks={callbacks}
    options={options}
    size={wordCloudSize}
    words={words}
  />
}
