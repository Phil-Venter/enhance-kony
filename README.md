# enhance-kony
A simple collection of functionality for the Kony SDK. I personally use this and [Krōnin](https://github.com/mig82/kronin) by [Miguelángel Fernández](https://github.com/mig82).

## ```kony.ui```
---
### ```components```
An object of all valid components in the Kony SDK, generated from the kony.ui object.
This is used internally in ```kony.ui.generateComponent(...)``` to ensure only valid components can be generated.
This can also be used to ensure only valid component names are passed to ```kony.ui.generateComponent(...)```.

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
---
### ```type(any)```
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

kony.utils.type({a: 4}); //"object"
kony.utils.type([1, 2, 3]); //"array"
kony.utils.type(new ReferenceError); //"error"
kony.utils.type(new Date); //"date"
kony.utils.type(/a-z/); //"regexp"
kony.utils.type(Math); //"math"
kony.utils.type(JSON); //"json"
kony.utils.type(new Number(4)); //"number"
kony.utils.type(new String("abc")); //"string"
kony.utils.type(new Boolean(true)); //"boolean"
```

### ```isString(any)```
#### returns: boolean
checks to see if passed variable is a string, uses ```kony.utils.type(...)``` internally.

### ```isNumber(any)```
#### returns: boolean
checks to see if passed variable is a number, uses ```kony.utils.type(...)``` internally.

### ```isBoolean(any)```
#### returns: boolean
checks to see if passed variable is a boolean, uses ```kony.utils.type(...)``` internally.

### ```isArray(any)```
#### returns: boolean
checks to see if passed variable is an array, uses ```kony.utils.type(...)``` internally.

### ```isFunction(any)```
#### returns: boolean
checks to see if passed variable is a function, uses ```kony.utils.type(...)``` internally.

### ```isObject(any)```
#### returns: boolean
checks to see if passed variable is an object, uses ```kony.utils.type(...)``` internally.

### ```isEmpty(any)```
#### returns: boolean
checks to see if passed variable is empty (falsey).

### ```isNull(any)```
#### returns: boolean
checks to see if passed variable is null, uses ```kony.utils.type(...)``` internally.

### ```isUndefined(any)```
#### returns: boolean
checks to see if passed variable is undefined, uses ```kony.utils.type(...)``` internally.

### ```isRegExp(any)```
#### returns: boolean
checks to see if passed variable is a regular expression instance, uses ```kony.utils.type(...)``` internally.

### ```isError(any)```
#### returns: boolean
checks to see if passed variable is an error instance, uses ```kony.utils.type(...)``` internally.

### ```isDate(any)```
#### returns: boolean
checks to see if passed variable is a date instance, uses ```kony.utils.type(...)``` internally.
