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
