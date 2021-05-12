import makePropType from './make-prop-type';


export default makePropType(function isInteger(props, propName, componentName) {
  const prop = props[propName];

  if(!Number.isInteger(prop)) {
    return new Error(`Invalid prop '${propName}' supplied to '${componentName}'. Must be an integer, was '${prop}'`);
  }

  return null;
});
