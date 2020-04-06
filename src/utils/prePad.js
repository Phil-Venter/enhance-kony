exports.prePad = ((definition) => {
  if (typeof kony !== 'undefined') {
    if (typeof kony.utils !== 'object') {
      kony.utils = {};
    }
    kony.utils.prePad = definition;
  }
  return definition;
})(function prePad(str, pad) {
  return pad.substring(0, pad.length - String(str).length) + str;
});
