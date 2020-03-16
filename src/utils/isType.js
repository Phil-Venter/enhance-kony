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
