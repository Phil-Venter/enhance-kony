const { getType } = require('./getType');

exports.isDate = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isDate = definition;
  }
  return definition;
})(function isDate(val) {
  return getType(val) === 'date';
});
