const { getType } = require('./getType');

exports.isBoolean = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isBoolean = definition;
  }
  return definition;
})(function isBoolean(val) {
  return getType(val) === 'boolean';
});
