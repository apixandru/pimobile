/*!
* KioskBoard - Virtual Keyboard ('https://github.com/furcan/KioskBoard')
* Version: 2.1.0
* Author: Furkan MT ('https://github.com/furcan')
* Copyright 2022 KioskBoard - Virtual Keyboard, MIT Licence ('https://opensource.org/licenses/MIT')*
*/

/* global define */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(root);
  } else {
    root.KioskBoard = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

  'use strict';

  if (typeof window === 'undefined' && typeof window.document === 'undefined') {
    return;
  }
  var kioskBoardInternalCSSCodes = function () {
    var internalCSS = '';
    return internalCSS || null;
  };
  var kioskBoardInternalCSS = function () {
    if (kioskBoardInternalCSSCodes() !== null && !window.document.getElementById('KioskBoardInternalCSS')) {
      var internalCSS = window.document.createElement('style');
      internalCSS.id = 'KioskBoardInternalCSS';
      internalCSS.innerHTML = kioskBoardInternalCSSCodes();
      window.document.head.appendChild(internalCSS);
    }
  };
  var kioskBoardDefaultOptions = {
    keysNumpadArrayOfNumbers: null,
    language: 'en',
    theme: 'light', // "light" || "dark" || "flat" || "material" || "oldschool"
    cssAnimations: true,
    cssAnimationsDuration: 360,
    cssAnimationsStyle: 'slide', // "slide" || "fade"
    keysFontFamily: 'sans-serif',
    keysFontSize: '22px',
    keysFontWeight: 'normal',
  };
  var kioskBoardNewOptions;
  var kioskBoardNumpadKeysObject = {
    '0': '7',
    '1': '8',
    '2': '9',
    '3': '4',
    '4': '5',
    '5': '6',
    '6': '1',
    '7': '2',
    '8': '3',
    '9': '0',
  };
  var kioskBoardExtendObjects = function () {
    var extended = {};
    var deep = false;
    var i = 0;
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }
    var merge = function (obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = kioskBoardExtendObjects(extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };
    for (; i < arguments.length; i++) {
      merge(arguments[i]);
    }
    return extended;
  };
  (function () {
    if (typeof window.Event === 'function') {
      return false;
    }
    function Event(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = window.document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    Event.prototype = window.Event.prototype;
    window.Event = Event;
  })();

  var KioskBoard = {
    init: function (initOptions) {
      initOptions = typeof initOptions === 'object' && Object.keys(initOptions).length > 0 ? initOptions : {};
      kioskBoardNewOptions = kioskBoardExtendObjects(true, kioskBoardDefaultOptions, initOptions);
      kioskBoardInternalCSS();
    },
    run: function (selectorOrElement, options) {

      if (typeof options === 'object' && Object.keys(options).length > 0) {
        KioskBoard.init(options);
      }
      var opt = kioskBoardNewOptions;

      var theInput = window.document.querySelector(selectorOrElement);

      var theInputSelIndex = 0;
      var theInputValArray = [];
      var theInputValLen = (theInput.value || '').length;
      theInputSelIndex = theInput.selectionStart || theInputValLen;

      theInputValArray = theInput.value.split('');

      var keysRowElements = '';

      var fontFamily = typeof opt.keysFontFamily === 'string' && opt.keysFontFamily.length > 0 ? opt.keysFontFamily : 'sans-serif';
      var fontSize = typeof opt.keysFontSize === 'string' && opt.keysFontSize.length > 0 ? opt.keysFontSize : '22px';
      var fontWeight = typeof opt.keysFontWeight === 'string' && opt.keysFontWeight.length > 0 ? opt.keysFontWeight : 'normal';

      var numpadKeysContent = '';
      for (var key3 in kioskBoardNumpadKeysObject) {
        if (Object.prototype.hasOwnProperty.call(kioskBoardNumpadKeysObject, key3)) {
          var index3 = key3;
          var value3 = kioskBoardNumpadKeysObject[key3];
          var eachKey3 = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="kioskboard-key kioskboard-key-' + value3.toString() + ' ' + (index3 === '9' ? 'kioskboard-key-double' : '') + '" data-index="' + index3.toString() + '" data-value="' + value3.toString() + '">' + value3.toString() + '</span>';
          numpadKeysContent += eachKey3;
        }
      }
      var dot = '<span style="font-family:Barlow,sans-serif;font-weight:500;font-size:22px;" class="kioskboard-key" data-value=".">.</span>';
      keysRowElements += '<div class="kioskboard-row kioskboard-row-numpad">' + numpadKeysContent + dot + '</div>';
      var wrapKeysElement = function (stringHtml) {
        var div = window.document.createElement('div');
        div.className = 'kioskboard-wrapper';
        div.innerHTML = stringHtml.trim();
        return div;
      };
      var allKeysElement = wrapKeysElement(keysRowElements); // all keyboard element
      var cssAnimations = opt.cssAnimations === true;
      var cssAnimationsClass = 'no-animation';
      var cssAnimationsStyle = 'no-animation';
      var cssAnimationsDuration = 0;
      if (cssAnimations) {
        cssAnimationsClass = 'kioskboard-with-animation';
        cssAnimationsStyle = 'kioskboard-fade';
        cssAnimationsDuration = typeof opt.cssAnimationsDuration === 'number' ? opt.cssAnimationsDuration : 360;
        if (opt.cssAnimationsStyle === 'slide') {
          cssAnimationsStyle = 'kioskboard-slide';
        }
      }
      var theTheme = typeof opt.theme === 'string' && opt.theme.length > 0 ? opt.theme.trim() : 'light';
      var kioskBoardVirtualKeyboard = window.document.createElement('div');
      kioskBoardVirtualKeyboard.id = 'KioskBoard-VirtualKeyboard';
      kioskBoardVirtualKeyboard.classList.add('kioskboard-theme-' + theTheme);
      kioskBoardVirtualKeyboard.classList.add('kioskboard-placement-bottom');
      kioskBoardVirtualKeyboard.classList.add(cssAnimationsClass);
      kioskBoardVirtualKeyboard.classList.add(cssAnimationsStyle);
      kioskBoardVirtualKeyboard.classList.add('kioskboard-tolowercase');
      kioskBoardVirtualKeyboard.style.animationDuration = cssAnimations ? (cssAnimationsDuration + 'ms') : '';
      kioskBoardVirtualKeyboard.appendChild(allKeysElement);
      var changeEvent = new Event('change', {
        'bubbles': true,
        'cancelable': true,
      });

      var keysClickListeners = function (input) {
        var eachKeyElm = window.document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-key');
        if (eachKeyElm && eachKeyElm.length > 0) {
          for (var ekIndex = 0; ekIndex < eachKeyElm.length; ekIndex++) {
            var keyElm = eachKeyElm[ekIndex];
            keyElm.addEventListener('click', function (e) {
              e.preventDefault();
              var keyValue = e.currentTarget.dataset.value || '';
              var keyValArr = keyValue.split('');
              for (var keyValIndex = 0; keyValIndex < keyValArr.length; keyValIndex++) {
                theInputSelIndex = input.selectionStart || (input.value || '').length;

                theInputValArray.splice(theInputSelIndex, 0, keyValArr[keyValIndex]);

                console.log('updating input value to ' + theInputValArray.join(''));
                input.dispatchEvent(changeEvent);
              }
            }, false);
          }
        }
      };
      var keyboardElement = window.document.getElementById(kioskBoardVirtualKeyboard.id);
      if (!keyboardElement) {
        window.document.body.appendChild(kioskBoardVirtualKeyboard);

        var windowHeight = Math.round(window.innerHeight);
        var keyboardHeight = Math.round(window.document.getElementById(kioskBoardVirtualKeyboard.id).offsetHeight);
        if (keyboardHeight > Math.round((windowHeight / 3) * 2)) {
          var keyboardWrapper = window.document.getElementById(kioskBoardVirtualKeyboard.id).getElementsByClassName('kioskboard-wrapper')[0];
          keyboardWrapper.style.maxHeight = Math.round((windowHeight / 5) * 4) + 'px';
          keyboardWrapper.style.overflowX = 'hidden';
          keyboardWrapper.style.overflowY = 'auto';
          keyboardWrapper.classList.add('kioskboard-overflow');
        }

        keysClickListeners(theInput);
      }
    },
  };

  return KioskBoard;
});
