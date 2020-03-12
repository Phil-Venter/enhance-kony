// Revealing Module Pattern (RMP) with Enhancements to Kony
const E = ((function() {
  // This RMP contains sub-RMPs so it can be copied to projects if only one sub-RMP is required

  const upper = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  const lower = [...'abcdefghijklmnopqrstuvwxyz'];
  const numeric = [...'0123456789'];
  const unique = [...'~!@#$%^&*()_+-=[]\{}|;:\'",./<>?'];

  // arrays(sets) to beused as validation or for the generation
  const sets = {
    upper,
    lower,
    alpha: [...upper, ...lower],
    numeric,
    alphanumeric: [...upper, ...lower, ...numeric],
    unique,
    all: [...upper, ...lower, ...numeric, ...unique]
  };

  // dynamic solution to getting valid ui elements, does not autocomplete
  // const elements = Object.assign({}, ...Object.keys(kony.ui).filter(_ => _[0] === _[0].toUpperCase()).map(_ => ({[_.toUpperCase()]: _})));

  // static list of valid ui elements
  const elements = {
    ALERT: "Alert",
    BOX: "Box",
    BROWSER: "Browser",
    BUTTON: "Button",
    CALENDAR: "Calendar",
    CAMERA: "Camera",
    CANVAS: "Canvas",
    CHECKBOXGROUP: "CheckBoxGroup",
    COLLECTIONVIEW: "CollectionView",
    COMBOBOX: "ComboBox",
    CONTAINERWIDGET: "ContainerWidget",
    CUSTOMWIDGET: "CustomWidget",
    DATAGRID: "DataGrid",
    FLEXCONTAINER: "FlexContainer",
    FLEXSCROLLCONTAINER: "FlexScrollContainer",
    FORM: "Form",
    FORM2: "Form2",
    GROUPWIDGET: "GroupWidget",
    HORIZONTALIMAGESTRIP: "HorizontalImageStrip",
    HORIZONTALIMAGESTRIP2: "HorizontalImageStrip2",
    IMAGE: "Image",
    IMAGE2: "Image2",
    IMAGEGALLERY: "ImageGallery",
    IMAGEGALLERY2: "ImageGallery2",
    KCOMPONENT: "KComponent",
    KCOMPONENTTEMPLATE: "KComponentTemplate",
    KMASTERTEMPLATE: "KMasterTemplate",
    LABEL: "Label",
    LINE: "Line",
    LINK: "Link",
    LISTBOX: "ListBox",
    MAP: "Map",
    PHONE: "Phone",
    PICKERVIEW: "PickerView",
    POPUP: "Popup",
    RADIOBUTTONGROUP: "RadioButtonGroup",
    RICHTEXT: "RichText",
    SCROLLBOX: "ScrollBox",
    SEGMENTEDUI: "SegmentedUI",
    SEGMENTEDUI2: "SegmentedUI2",
    SLIDER: "Slider",
    SWITCH: "Switch",
    TABPANE: "TabPane",
    TEXTAREA: "TextArea",
    TEXTAREA2: "TextArea2",
    TEXTBOX: "TextBox",
    TEXTBOX2: "TextBox2",
    VIDEO: "Video",
    WIDGET: "Widget"
  };

  // valid properties in generation of ui elements
  const properties = {
    // the basic properties of an element to be generated name in object
    BASIC_PROPERTIES: 'basicProperties',
    // the layout properties of an element to be generated name in object
    LAYOUT_PROPERTIES: 'layoutProperties',
    // the platform spesific properties of an element to be generated name in object
    PLATFORM_SPECIFIC_PROPERTIES: 'platformSpecificProperties',
    // properties that need to be set after the element has been generated
    ADDITIONAL_PROPERTIES: 'additionalProperties',
  };

  // Abstraction of Kony navigate, allows you to return to the previous screen without too much hastle.
  const navigate = ((function() {
    let _history = [];
    let _cache = {};

    // generate kony mvc navigation objects and memoize it for future use
    function _memoizedNavigation(friendlyName) {
      if (!(friendlyName in _cache)) {
        _cache[friendlyName] = kony.mvc.Navigation(friendlyName);
      }

      return _cache[friendlyName];
    }

    // the actual part that does the navigating, abstracted so go and back functions can both use this logic
    function _internalNavigate(obj) {
      if(obj.friendlyName) _memoizedNavigation(obj.friendlyName || '').navigate(obj.params || {});
    }

    // navigate to the form specified, with params set if need be
    function go(friendlyName, params) {
      const obj = {
        friendlyName,
        params
      };

      _history.push(obj);
      _internalNavigate(obj);
    }

    // go back to previous page navigated with the go function with old params, or new ones if set
    function back(params) {
      if (_history.length > 0) {
        _internalNavigate(Object.assign({}, _history.pop(), { params }));
      } else {
        kony.application.exit();
      }
    }

    return {
      back,
      go
    };
  })());

  // publisher/subscriber pattern to be used globally (this is probabably not a good idea, eh)
  const observable = ((function() {
    let _eventCache = {};

    // invoke callback(s) on event when publish with params are called
    function subscribe(eventName, ...callbacks) {
      if (!(eventName in _eventCache) || !(Array.isArray(_eventCache[eventName]))) {
        _eventCache[eventName] = [];
      }

      _eventCache[eventName].push(...callbacks);
    }

    // run all functions and pass params to the lot
    function publish(eventName, ...params) {
      if (!(eventName in _eventCache) || !(Array.isArray(_eventCache[eventName]))) {
        _eventCache[eventName] = [];
      }

      _eventCache[eventName].forEach((event) => {
        event.apply(null, ...params);
      });
    }

    return {
      publish,
      subscribe
    };
  })());

  // GUI generation module (will need to expand in the future)
  const generate = ((function() {

    // generate random string based on an array(set)
    function randomString(base, len) {
      return [...Array(len)]
        .map(i => base[Math.random() * base.length | 0])
        .join('');
    }

    // generate ui element for the propertiesObject i'd reccommend that you use the constants.properties
    function ui(elementString, propertiesObject) {
      // this function requires elements defined somewhere inside this file (mind scope)
      if(Object.values(elements || { elementString }).indexOf(elementString) !== -1) {
        const element = new kony.ui[elementString](
          propertiesObject[properties.BASIC_PROPERTIES || 'basicProperties'] || {},
          propertiesObject[properties.LAYOUT_PROPERTIES || 'layoutProperties'] || {},
          propertiesObject[properties.PLATFORM_SPECIFIC_PROPERTIES || 'platformSpecificProperties'] || {}
        );

        const additionalChangesKeys = Object.keys(propertiesObject[properties.ADDITIONAL_PROPERTIES || 'additionalProperties'] || {});
        let currentKey;

        for(currentKey in additionalChangesKeys) {
          element[currentKey] = propertiesObject[properties.ADDITIONAL_PROPERTIES || 'additionalProperties'][currentKey];
        }

        return element;
      }

      return null;
    }

    return {
      element: ui,
      randomString,
      ui
    };
  })());

  // Utilities function that is mostly used for type checking.
  const utilities = ((function() {

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
      if(type(val) === 'string') val.trim();
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

    return {
      isArray,
      isBoolean,
      isDate,
      isEmpty,
      isError,
      isFunction,
      isNull,
      isNumber,
      isObject,
      isRegExp,
      isString,
      isUndefined,
      type
    };
  })());

  return {
    elements,
    generate,
    navigate,
    properties,
    observable,
    sets,
    utilities
  };
})());

