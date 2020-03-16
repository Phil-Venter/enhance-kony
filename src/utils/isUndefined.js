const { getType } = require('./getType');

exports.isUndefined = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isUndefined = definition;
  }
  return definition;
})(function isUndefined(val) {
  return getType(val) === 'undefined';
});
