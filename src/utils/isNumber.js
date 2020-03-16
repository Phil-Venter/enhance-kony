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
