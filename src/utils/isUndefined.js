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
