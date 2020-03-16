require('./utils');

((definition) => {
  kony.ui = Object.assign({}, kony.ui, definition);
})(() => {

  // get all the components specified in kony.ui
  const components = Object
    .assign({}, ...Object
      .keys(kony.ui)
      .filter(_ => _[0] === _[0].toUpperCase()
        && kony.utils.isFunction(kony.ui[_]))
      .map(_ => ({ [_.toUpperCase()]: _ })));

  // generate a component, designed mainly to abstract the additional properties you want to apply to an component
  function generateComponent(componentName, basicProperties, layoutProperties, platformSpecificProperties, additionalProperties) {
    try {
      // basic type checks
      if (!kony.utils.isString(componentName))
        throw new Error(`componentName was given the incorrect type; expected: 'string', got: '${kony.utils.type(componentName)}'.`);
      if (Object.values(components()).indexOf(componentName) === -1)
        throw new Error(`${componentName} is not a valid ui component.`);
      if (!kony.utils.isObject(basicProperties))
        throw new Error(`basicProperties was given the incorrect type; expected: 'object', got: '${kony.utils.type(basicProperties)}'.`);
      if (!kony.utils.isObject(layoutProperties))
        throw new Error(`layoutProperties was given the incorrect type; expected: 'object', got: '${kony.utils.type(layoutProperties)}'.`);
      if (!kony.utils.isObject(platformSpecificProperties))
        throw new Error(`platformSpecificProperties was given the incorrect type; expected: 'object', got: '${kony.utils.type(platformSpecificProperties)}'.`);
      if (!kony.utils.isObject(additionalProperties))
        throw new Error(`additionalProperties was given the incorrect type; expected: 'object', got: '${kony.utils.type(additionalProperties)}'.`);

      const component = new kony.ui[componentName](basicProperties, layoutProperties, platformSpecificProperties);

      if (!kony.utils.isObject(component))
        throw new Error(`Invalid basicProperties, layoutProperties, or platformSpecificProperties were passed.`);

      let currentProperty;
      for (currentProperty in additionalProperties) {
        if (!(currentProperty in component))
          throw new Error(`${currentProperty} is not a valid property or method on the ${componentName} ui component.`);
        component[currentProperty] = additionalProperties[currentProperty];
      }

      return component;
    } catch (error) {
      return null;
    }
  }

  return { components, generateComponent };
});
