const { getType } = require('./getType');

exports.isObject = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isObject = definition;
  }
  return definition;
})(function isObject(val) {
  return getType(val) === 'object';
});
