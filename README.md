# enhance-kony
A simple collection of functionality for the Kony SDK. I personally use this and [Krōnin](https://github.com/mig82/kronin) by [Miguelángel Fernández](https://github.com/mig82).

## ```kony.ui```
### ```generateComponent(string, object, object, object, object)```
#### returns: object
A function that generates components much like calling ```kony.ui.<component name here>(...)``` would.
What makes this function different is that it is more geared towards applying additional properties.

Traditional way of creating button and setting it's width and adding an onClick method:
```
const btn = new kony.ui.Button(...);
btn.width = '100dp';
btn.onClick = <some function>
```
This library's way of doing so:
```
const btn = kony.ui.generateComponent('Button', ..., {
  width: '100dp',
  onClick: <some function>
});
```
In the end it boils down to preference...

## ```kony.utils```
### ```getType(any)```
#### returns: string
typeof is very limited in its use some might even call it broken, Angus Croll is one of them [read more](https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/). This uses his code that aims to fix that issue.
```
typeof {a: 4}; //"object"
typeof [1, 2, 3]; //"object"
typeof new ReferenceError; //"object"
typeof new Date; //"object"
typeof /a-z/; //"object"
typeof Math; //"object"
typeof JSON; //"object"
typeof new Number(4); //"object"
typeof new String("abc"); //"object"
typeof new Boolean(true); //"object"

kony.utils.getType({a: 4}); //"object"
kony.utils.getType([1, 2, 3]); //"array"
kony.utils.getType(new ReferenceError); //"error"
kony.utils.getType(new Date); //"date"
kony.utils.getType(/a-z/); //"regexp"
kony.utils.getType(Math); //"math"
kony.utils.getType(JSON); //"json"
kony.utils.getType(new Number(4)); //"number"
kony.utils.getType(new String("abc")); //"string"
kony.utils.getType(new Boolean(true)); //"boolean"
```

### ```isArray(any)```
#### returns: boolean
checks to see if passed variable is an array, uses ```kony.utils.getType(...)``` internally.

### ```isBoolean(any)```
#### returns: boolean
checks to see if passed variable is a boolean, uses ```kony.utils.getType(...)``` internally.

### ```isDate(any)```
#### returns: boolean
checks to see if passed variable is a date instance, uses ```kony.utils.getType(...)``` internally.

### ```isEmpty(any)```
#### returns: boolean
checks to see if passed variable is empty (falsey).

### ```isError(any)```
#### returns: boolean
checks to see if passed variable is an error instance, uses ```kony.utils.getType(...)``` internally.

### ```isFunction(any)```
#### returns: boolean
checks to see if passed variable is a function, uses ```kony.utils.getType(...)``` internally.

### ```isNull(any)```
#### returns: boolean
checks to see if passed variable is null, uses ```kony.utils.getType(...)``` internally.

### ```isNumber(any)```
#### returns: boolean
checks to see if passed variable is a number, uses ```kony.utils.getType(...)``` internally.

### ```isObject(any)```
#### returns: boolean
checks to see if passed variable is an object, uses ```kony.utils.getType(...)``` internally.

### ```isRegExp(any)```
#### returns: boolean
checks to see if passed variable is a regular expression instance, uses ```kony.utils.getType(...)``` internally.

### ```isString(any)```
#### returns: boolean
checks to see if passed variable is a string, uses ```kony.utils.getType(...)``` internally.

### ```isType(any, string)```
#### returns: boolean
checks to see if passed variable is of type passed, uses ```kony.utils.getType(...)``` internally.

### ```isUndefined(any)```
#### returns: boolean
checks to see if passed variable is undefined, uses ```kony.utils.getType(...)``` internally.
