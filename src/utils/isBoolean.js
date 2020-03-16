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
