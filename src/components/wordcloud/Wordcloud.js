import {useMemo} from 'react';
import PropTypes from 'prop-types';
import ReactWordcloud from 'react-wordcloud';

import isPositiveNonzeroNumber from 'prop-types/is-positive-nonzero-number';

// Test runner errors if we do not do this. Probably some issue with how the module
// is being exported
const ReactWordcloudComponent = ReactWordcloud.default || ReactWordcloud;

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
        fontSizes: [Math.max(maxFontSize / 5, 12), maxFontSize],
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

  return <ReactWordcloudComponent
    callbacks={callbacks}
    options={options}
    size={wordCloudSize}
    words={words}
  />
}

if(process.env.NODE_ENV !== 'production') {
  Wordcloud.propTypes = {
    width: isPositiveNonzeroNumber.isRequired,
    height: isPositiveNonzeroNumber.isRequired,
    words: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      colour: PropTypes.string.isRequired
    })).isRequired,
    onWordClick: PropTypes.func
  };
}
