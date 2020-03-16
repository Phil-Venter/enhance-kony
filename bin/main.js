(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
exports.ui = require('./ui/_index');
exports.utils = require('./utils/_index');

},{"./ui/_index":2,"./utils/_index":4}],2:[function(require,module,exports){
exports.generateComponent = require('./generateComponent');

},{"./generateComponent":3}],3:[function(require,module,exports){
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

},{"../utils/_index":4}],4:[function(require,module,exports){
exports.getType = require('./getType');
exports.isArray = require('./isArray');
exports.isBoolean = require('./isBoolean');
exports.isDate = require('./isDate');
exports.isEmpty = require('./isEmpty');
exports.isError = require('./isError');
exports.isFunction = require('./isFunction');
exports.isNull = require('./isNull');
exports.isNumber = require('./isNumber');
exports.isObject = require('./isObject');
exports.isRegExp = require('./isRegExp');
exports.isString = require('./isString');
exports.isType = require('./isType');
exports.isUndefined = require('./isUndefined');

},{"./getType":5,"./isArray":6,"./isBoolean":7,"./isDate":8,"./isEmpty":9,"./isError":10,"./isFunction":11,"./isNull":12,"./isNumber":13,"./isObject":14,"./isRegExp":15,"./isString":16,"./isType":17,"./isUndefined":18}],5:[function(require,module,exports){
exports.getType = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.getType = definition;
  }
  return definition;
})(function getType(val) {
  return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
});

},{}],6:[function(require,module,exports){
const { getType } = require('./getType');

exports.isArray = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isArray = definition;
  }
  return definition;
})(function isArray(val) {
  return getType(val) === 'array';
});

},{"./getType":5}],7:[function(require,module,exports){
const { getType } = require('./getType');

exports.isBoolean = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isBoolean = definition;
  }
  return definition;
})(function isBoolean(val) {
  return getType(val) === 'boolean';
});

},{"./getType":5}],8:[function(require,module,exports){
const { getType } = require('./getType');

exports.isDate = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isDate = definition;
  }
  return definition;
})(function isDate(val) {
  return getType(val) === 'date';
});

},{"./getType":5}],9:[function(require,module,exports){
const { getType } = require('./getType');

exports.isEmpty = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
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

},{"./getType":5}],10:[function(require,module,exports){
const { getType } = require('./getType');

exports.isError = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isError = definition;
  }
  return definition;
})(function isError(val) {
  return getType(val) === 'error';
});

},{"./getType":5}],11:[function(require,module,exports){
const { getType } = require('./getType');

exports.isFunction = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isFunction = definition;
  }
  return definition;
})(function isFunction(val) {
  return getType(val) === 'function';
});

},{"./getType":5}],12:[function(require,module,exports){
const { getType } = require('./getType');

exports.isNull = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isNull = definition;
  }
  return definition;
})(function isNull(val) {
  return getType(val) === 'null';
});

},{"./getType":5}],13:[function(require,module,exports){
const { getType } = require('./getType');

exports.isNumber = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isNumber = definition;
  }
  return definition;
})(function isNumber(val) {
  return getType(val) === 'number';
});

},{"./getType":5}],14:[function(require,module,exports){
const { getType } = require('./getType');

exports.isObject = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isObject = definition;
  }
  return definition;
})(function isObject(val) {
  return getType(val) === 'object';
});

},{"./getType":5}],15:[function(require,module,exports){
const { getType } = require('./getType');

exports.isRegExp = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isRegExp = definition;
  }
  return definition;
})(function isRegExp(val) {
  return getType(val) === 'regexp';
});

},{"./getType":5}],16:[function(require,module,exports){
const { getType } = require('./getType');

exports.isString = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isString = definition;
  }
  return definition;
})(function isString(val) {
  return getType(val) === 'string';
});

},{"./getType":5}],17:[function(require,module,exports){
const { getType } = require('./getType');

exports.isType = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
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

},{"./getType":5}],18:[function(require,module,exports){
const { getType } = require('./getType');

exports.isUndefined = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isUndefined = definition;
  }
  return definition;
})(function isUndefined(val) {
  return getType(val) === 'undefined';
});

},{"./getType":5}]},{},[1]);
