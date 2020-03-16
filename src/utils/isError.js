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
