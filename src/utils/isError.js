const { getType } = require('./getType');

exports.isError = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.isError = definition;
  }
  return definition;
})(function isError(val) {
  return getType(val) === 'error';
});
