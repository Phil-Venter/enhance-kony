const { getType } = require('./getType');

const isNull = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isNull = definition;
  }
  return definition;
})(function isNull(val) {
  return getType(val) === 'null';
});

module.exports = { isNull };
