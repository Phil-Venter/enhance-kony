const { getType } = require('./getType');

exports.isRegExp = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isRegExp = definition;
  }
  return definition;
})(function isRegExp(val) {
  return getType(val) === 'regexp';
});
