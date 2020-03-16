const { getType } = require('./getType');

exports.isType = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isType = definition;
  }
  return definition;
})(function isType(val, type) {
  if (getType(type) === 'string') {
    return getType(val) === type.toLowerCase();
  }
  return false;
});
