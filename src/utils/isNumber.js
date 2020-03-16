const { getType } = require('./getType');

exports.isNumber = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isNumber = definition;
  }
  return definition;
})(function isNumber(val) {
  return getType(val) === 'number';
});
