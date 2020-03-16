const { getType } = require('./getType');

exports.isString = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isString = definition;
  }
  return definition;
})(function isString(val) {
  return getType(val) === 'string';
});
