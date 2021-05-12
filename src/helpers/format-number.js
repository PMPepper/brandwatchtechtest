import roundTo from './round-to';
import userLocale from './user-locale';


export default function formatNumber(n, decimalPlaces = null, culture = userLocale, options = null) {
  if(decimalPlaces !== null && decimalPlaces !== undefined) {
    if(!Number.isInteger(+decimalPlaces)) {
      throw new Error('formatNumber:: decimalPlaces must be an integer, was :'+decimalPlaces);
    }

    n = roundTo(n, decimalPlaces);
  }

  if(culture || options) {
    if(!(culture instanceof Intl.NumberFormat)) {
      culture = new Intl.NumberFormat(culture || undefined, options || undefined);
    }
  } else {
    culture = defaultNumberformat;
  }

  return culture.format(n);
}


const defaultNumberformat = Intl.NumberFormat();
