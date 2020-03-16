const { getType } = require('./getType');

const isRegExp = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isRegExp = definition;
  }
  return definition;
})(function isRegExp(val) {
  return getType(val) === 'regexp';
});

module.exports = { isRegExp };
