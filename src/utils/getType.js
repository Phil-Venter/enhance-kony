const getType = ((definition) => {
  kony.utils.getType = definition;
  return definition;
})(function getType(val) {
  return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
});

module.exports = { getType };
