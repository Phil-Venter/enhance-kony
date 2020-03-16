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
