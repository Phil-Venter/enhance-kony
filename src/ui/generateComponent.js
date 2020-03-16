const { isString } = require('../utils/isString');
const { isObject } = require('../utils/isObject');
const { isUndefined } = require('../utils/isUndefined');
const { getType } = require('../utils/getType');

const generateComponent = ((definition) => {
  if (!isUndefined(kony)) {
    if (!isObject(kony.utils)) {
      kony.utils = {};
    }
    kony.ui.generateComponent = definition;
  }
  return definition;
})(function generateComponent(componentName, basicProperties, layoutProperties, platformSpecificProperties, additionalProperties) {
  try {
    if (isUndefined(kony)) {
      throw new Error(`Kony SDK is required`);
    } else if (isUndefined(kony.ui)) {
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
    if (isObject(kony)
      && isObject(kony.constants)
      && isString(kony.constants.RUNMODE)
      && kony.constants.RUNMODE === 'debug') {
      console.log(error);
    }

    return null;
  }
});

module.exports = { generateComponent };
