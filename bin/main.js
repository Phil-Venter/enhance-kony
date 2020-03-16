(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const ui = require('./ui/_index');
const utils = require('./utils/_index');

module.exports = { ui, utils };

},{"./ui/_index":2,"./utils/_index":4}],2:[function(require,module,exports){
const { generateComponent } = require('./generateComponent');

module.exports = { generateComponent };

},{"./generateComponent":3}],3:[function(require,module,exports){
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

},{"../utils/getType":5,"../utils/isObject":14,"../utils/isString":16,"../utils/isUndefined":18}],4:[function(require,module,exports){
const { getType } = require('./getType');
const { isArray } = require('./isArray');
const { isBoolean } = require('./isBoolean');
const { isDate } = require('./isDate');
const { isEmpty } = require('./isEmpty');
const { isError } = require('./isError');
const { isFunction } = require('./isFunction');
const { isNull } = require('./isNull');
const { isNumber } = require('./isNumber');
const { isObject } = require('./isObject');
const { isRegExp } = require('./isRegExp');
const { isString } = require('./isString');
const { isType } = require('./isType');
const { isUndefined } = require('./isUndefined');

module.exports = { getType, isArray, isBoolean, isDate, isEmpty, isError, isFunction, isNull, isNumber, isObject, isRegExp, isString, isType, isUndefined };

},{"./getType":5,"./isArray":6,"./isBoolean":7,"./isDate":8,"./isEmpty":9,"./isError":10,"./isFunction":11,"./isNull":12,"./isNumber":13,"./isObject":14,"./isRegExp":15,"./isString":16,"./isType":17,"./isUndefined":18}],5:[function(require,module,exports){
const getType = ((definition) => {
  kony.utils.getType = definition;
  return definition;
})(function getType(val) {
  return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
});

module.exports = { getType };

},{}],6:[function(require,module,exports){
const { getType } = require('./getType');

const isArray = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isArray = definition;
  }
  return definition;
})(function isArray(val) {
  return getType(val) === 'array';
});

module.exports = { isArray };

},{"./getType":5}],7:[function(require,module,exports){
const { getType } = require('./getType');

const isBoolean = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isBoolean = definition;
  }
  return definition;
})(function isBoolean(val) {
  return getType(val) === 'boolean';
});

module.exports = { isBoolean };

},{"./getType":5}],8:[function(require,module,exports){
const { getType } = require('./getType');

const isDate = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isDate = definition;
  }
  return definition;
})(function isDate(val) {
  return getType(val) === 'date';
});

module.exports = { isDate };

},{"./getType":5}],9:[function(require,module,exports){
const { getType } = require('./getType');

const isEmpty = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isEmpty = definition;
  }
  return definition;
})(function isEmpty(val) {
  if (getType(val) === 'string') {
    val.trim();
  }

  return !val;
});

module.exports = { isEmpty };

},{"./getType":5}],10:[function(require,module,exports){
const { getType } = require('./getType');

const isError = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isError = definition;
  }
  return definition;
})(function isError(val) {
  return getType(val) === 'error';
});

module.exports = { isError };

},{"./getType":5}],11:[function(require,module,exports){
const { getType } = require('./getType');

const isFunction = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isFunction = definition;
  }
  return definition;
})(function isFunction(val) {
  return getType(val) === 'function';
});

module.exports = { isFunction };

},{"./getType":5}],12:[function(require,module,exports){
const { getType } = require('./getType');

const isNull = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isNull = definition;
  }
  return definition;
})(function isNull(val) {
  return getType(val) === 'null';
});

module.exports = { isNull };

},{"./getType":5}],13:[function(require,module,exports){
const { getType } = require('./getType');

const isNumber = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isNumber = definition;
  }
  return definition;
})(function isNumber(val) {
  return getType(val) === 'number';
});

module.exports = { isNumber };

},{"./getType":5}],14:[function(require,module,exports){
const { getType } = require('./getType');

const isObject = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isObject = definition;
  }
  return definition;
})(function isObject(val) {
  return getType(val) === 'object';
});

module.exports = { isObject };

},{"./getType":5}],15:[function(require,module,exports){
const { getType } = require('./getType');

const isRegExp = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isRegExp = definition;
  }
  return definition;
})(function isRegExp(val) {
  return getType(val) === 'regexp';
});

module.exports = { isRegExp };

},{"./getType":5}],16:[function(require,module,exports){
const { getType } = require('./getType');

const isString = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isString = definition;
  }
  return definition;
})(function isString(val) {
  return getType(val) === 'string';
});

module.exports = { isString };

},{"./getType":5}],17:[function(require,module,exports){
const { getType } = require('./getType');

const isType = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isType = definition;
  }
  return definition;
})(function isType(val, type) {
  if (getType(type) === 'string') {
    return getType(val) === type.toLowerCase();
  }
  return false;
});

module.exports = { isType };

},{"./getType":5}],18:[function(require,module,exports){
const { getType } = require('./getType');

const isUndefined = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isUndefined = definition;
  }
  return definition;
})(function isUndefined(val) {
  return getType(val) === 'undefined';
});

module.exports = { isUndefined };

},{"./getType":5}]},{},[1]);
