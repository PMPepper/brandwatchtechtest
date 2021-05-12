import makePropType from './make-prop-type';


export default makePropType(function isPositiveNonZeroNumber(props, propName, componentName) {
  const prop = +props[propName];

  if(isNaN(prop) || prop <= 0) {
    return new Error(`Invalid prop '${propName}' supplied to '${componentName}'. Must be a number greater than 0, was '${prop}'`);
  }

  return null;
});
