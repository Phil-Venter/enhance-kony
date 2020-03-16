const { getType } = require('./getType');

const isArray = ((definition) => {
  if (getType(kony) !== 'undefined') {
    if (getType(kony.utils) !== 'object') {
      kony.utils = {};
    }
    kony.utils.isArray = definition;
  }
  return definition;
})(function isArray(val) {
  return getType(val) === 'array';
});

module.exports = { isArray };
