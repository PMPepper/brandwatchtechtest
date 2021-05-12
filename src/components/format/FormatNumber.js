import PropTypes from 'prop-types';

//Helpers
import formatNumber from 'helpers/format-number';

//Other
import isInteger from 'prop-types/is-integer';


//The component
export default function FormatNumber({value, decimalPlaces = null, options = null, locale = null}) {
  return !value && value !== 0 ?
    '-'
    :
    formatNumber(value, decimalPlaces, locale, options)
}

if(process.env.NODE_ENV !== 'production') {
  FormatNumber.propTypes = {
    value: PropTypes.number,
    locale: PropTypes.string,
    decimalPlaces: isInteger,
    options: PropTypes.object
  }
}
