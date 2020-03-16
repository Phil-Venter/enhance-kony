const { getType } = require('./getType');

exports.isFunction = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isFunction = definition;
  }
  return definition;
})(function isFunction(val) {
  return getType(val) === 'function';
});
