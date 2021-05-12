export default function makeProp(test) {
  function propTest(props, propName, componentName, ...rest) {
    if(isNotSet(props, propName)) {
      return null;
    }

    return test(props, propName, componentName, ...rest);
  }

  propTest.isRequired = test;

  return propTest;
}

function isNotSet(props, propName) {
  return !props.hasOwnProperty(propName) || props[propName] === null || props[propName] === undefined;
}
