const { getType } = require('./getType');
const { prePad } = require('./prePad');

exports.transformDate = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.transformDate = definition;
  }
  return definition;
})(function transformDate(object) {
  if (getType(object) !== 'date') {
    return null;
  }

  return `${prePad(object.getFullYear(), '0000')}-${
    prePad(object.getMonth() + 1, '00')}-${
    prePad(object.getDate(), '00')}T${
    prePad(object.getHours(), '00')}:${
    prePad(object.getMinutes(), '00')}:${
    prePad(object.getSeconds(), '00')}Z`;
});
