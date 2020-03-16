const { getType } = require('./getType');

exports.isNull = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isNull = definition;
  }
  return definition;
})(function isNull(val) {
  return getType(val) === 'null';
});
