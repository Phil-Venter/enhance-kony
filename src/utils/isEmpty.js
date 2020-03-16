const { getType } = require('./getType');

exports.isEmpty = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isEmpty = definition;
  }
  return definition;
})(function isEmpty(val) {
  if (getType(val) === 'string') {
    val.trim();
  }

  return !val;
});
