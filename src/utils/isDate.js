const { getType } = require('./getType');

const isDate = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isDate = definition;
  }
  return definition;
})(function isDate(val) {
  return getType(val) === 'date';
});

module.exports = { isDate };
