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
