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
