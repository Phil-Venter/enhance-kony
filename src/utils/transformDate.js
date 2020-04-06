const { getType } = require('./getType');

exports.transformDate = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.transformDate = definition;
  }
  return definition;
})(function transformDate(object) {
  function pad(str, pad) {
    return pad.substring(0, pad.length - String(str).length) + str;
  }

  if (getType(object) !== 'date') {
    return null;
  }

  return `${pad(object.getFullYear(), '0000')}-${
    pad(object.getMonth() + 1, '00')}-${
    pad(object.getDate(), '00')}T${
    pad(object.getHours(), '00')}:${
    pad(object.getMinutes(), '00')}:${
    pad(object.getSeconds(), '00')}Z`;
});
