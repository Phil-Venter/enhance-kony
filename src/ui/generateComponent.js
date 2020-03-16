const { isString, isObject, getType } = require('../utils/_index');

const generateComponent = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.ui.generateComponent = definition;
  }
  return definition;
})(function generateComponent(componentName, basicProperties, layoutProperties, platformSpecificProperties, additionalProperties) {
  try {
    if (typeof kony === 'undefined') {
      throw new Error(`Kony SDK is required`);
    } else if (typeof kony.ui === 'undefined') {
      throw new Error(`UI API from Kony SDK is required`);
    } else if (!isString(componentName)) {
      throw new Error(`componentName was given the incorrect type; expected: 'string', got: '${getType(componentName)}'.`);
    } else if (!isObject(basicProperties)) {
      throw new Error(`basicProperties was given the incorrect type; expected: 'object', got: '${getType(basicProperties)}'.`);
    } else if (!isObject(layoutProperties)) {
      throw new Error(`layoutProperties was given the incorrect type; expected: 'object', got: '${getType(layoutProperties)}'.`);
    } else if (!isObject(platformSpecificProperties)) {
      throw new Error(`platformSpecificProperties was given the incorrect type; expected: 'object', got: '${getType(platformSpecificProperties)}'.`);
    } else if (!isObject(additionalProperties)) {
      throw new Error(`additionalProperties was given the incorrect type; expected: 'object', got: '${getType(additionalProperties)}'.`);
    }

    const component = new kony.ui[componentName](basicProperties, layoutProperties, platformSpecificProperties);

    if (!isObject(component)) {
      throw new Error(`Invalid componentName, basicProperties, layoutProperties, or platformSpecificProperties were passed.`);
    }

    let currentProperty;
    for (currentProperty in additionalProperties) {
      if (!(currentProperty in component)) {
        throw new Error(`${currentProperty} is not a valid property or method on the ${componentName} ui component.`);
      }
      component[currentProperty] = additionalProperties[currentProperty];
    }

    return component;
  } catch (error) {
    if (typeof kony === 'object'
      && typeof kony.constants === 'object'
      && typeof kony.constants.RUNMODE === 'string'
      && kony.constants.RUNMODE === 'debug') {
      console.log(error);
    }

    return null;
  }
});

module.exports = { generateComponent };
