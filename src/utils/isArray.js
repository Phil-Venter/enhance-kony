const { getType } = require('./getType');

exports.isArray = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isArray = definition;
  }
  return definition;
})(function isArray(val) {
  return getType(val) === 'array';
});
