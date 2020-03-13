((definition) => {
  kony.utils = Object.assign({}, kony.utils, definition);
})(function () {
  // get the true type of val (typeof is limited) this is the heart of the utils module
  function type(val) {
    return ({}).toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  // returns bool value, if string true else false
  function isString(val) {
    return type(val) === 'string';
  }

  // returns bool value, if number true else false
  function isNumber(val) {
    return type(val) === 'number';
  }

  // returns bool value, if bool true else false
  function isBoolean(val) {
    return type(val) === 'boolean';
  }

  // returns bool value, if array true else false
  function isArray(val) {
    return type(val) === 'array';
  }

  // returns bool value, if function true else false
  function isFunction(val) {
    return type(val) === 'function';
  }

  // returns bool value, if object true else false
  function isObject(val) {
    return type(val) === 'object';
  }

  // returns bool value, if empty true else false
  function isEmpty(val) {
    if (type(val) === 'string') val.trim();
    return !val;
  }

  // returns bool value, if null true else false
  function isNull(val) {
    return type(val) === 'null';
  }

  // returns bool value, if undefined true else false
  function isUndefined(val) {
    return type(val) === 'undefined';
  }

  // returns bool value, if regular expression true else false
  function isRegExp(val) {
    return type(val) === 'regexp';
  }

  // returns bool value, if error object true else false
  function isError(val) {
    return type(val) === 'error';
  }

  // returns bool value, if date object true else false
  function isDate(val) {
    return type(val) === 'date';
  }

  return { isArray, isBoolean, isDate, isEmpty, isError, isFunction, isNull, isNumber, isObject, isRegExp, isString, isUndefined, type };
});
