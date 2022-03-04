/*!
* KioskBoard - Virtual Keyboard ('https://github.com/furcan/KioskBoard')
* Description: This file contains the KioskBoard CSS codes as internal to use the KioskBoard as one file. This file has been created automatically from using the "kioskboard.js", and "kioskboard.css" files.
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
    var internalCSS = '#KioskBoard-VirtualKeyboard{box-sizing:border-box!important;position:fixed;z-index:2000;width:100%;max-width:1440px;background:#e3e3e3;background:linear-gradient(to right bottom,#eee,#ebebeb,#e8e8e8,#e6e6e6,#e3e3e3);-webkit-box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);padding:25px 20px 20px;left:0;right:0;margin:auto}#KioskBoard-VirtualKeyboard.kioskboard-placement-bottom{top:unset;bottom:0;border-radius:10px 10px 0 0}#KioskBoard-VirtualKeyboard.kioskboard-placement-top{top:0;bottom:unset;border-radius:0 0 10px 10px}#KioskBoard-VirtualKeyboard *{box-sizing:border-box!important}#KioskBoard-VirtualKeyboard .kioskboard-wrapper{position:relative;background:inherit;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}#KioskBoard-VirtualKeyboard .kioskboard-wrapper.kioskboard-overflow{padding-right:12px!important;overflow:hidden auto}#KioskBoard-VirtualKeyboard .kioskboard-wrapper.kioskboard-overflow::-webkit-scrollbar{height:6px;width:6px}#KioskBoard-VirtualKeyboard .kioskboard-wrapper.kioskboard-overflow::-webkit-scrollbar-track{border-radius:3px;background:rgba(255,255,255,.75)}#KioskBoard-VirtualKeyboard .kioskboard-wrapper.kioskboard-overflow::-webkit-scrollbar-thumb{border-radius:3px;background:rgba(0,0,0,.25);cursor:pointer}#KioskBoard-VirtualKeyboard .kioskboard-row{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}#KioskBoard-VirtualKeyboard .kioskboard-row span[class^=kioskboard-key]{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;position:relative;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;-webkit-transform-origin:bottom center;transform-origin:bottom center;cursor:pointer;font-size:22px;line-height:1;font-weight:normal;font-family:sans-serif;max-width:6.25%;margin:8px 8px 12px;padding:12px 12px 22px;border-radius:8px;background:#fafafa;color:#707070;border:2px solid rgba(255,255,255,.04);-webkit-box-shadow:0 4px 0 .04px rgba(0,0,0,.1);box-shadow:0 4px 0 .04px rgba(0,0,0,.1);border-bottom-color:rgba(255,255,255,.1);border-bottom-width:4px;-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;text-align:left}#KioskBoard-VirtualKeyboard.kioskboard-tolowercase .kioskboard-row-dynamic span[class^=kioskboard-key]{text-transform:lowercase}#KioskBoard-VirtualKeyboard.kioskboard-touppercase .kioskboard-row-dynamic span[class^=kioskboard-key]{text-transform:uppercase}#KioskBoard-VirtualKeyboard .kioskboard-row span[class^=kioskboard-key]:not(.spacebar-denied):hover{-webkit-transform:scaleY(.98) translateY(1px);transform:scaleY(.98) translateY(1px)}#KioskBoard-VirtualKeyboard .kioskboard-row span[class^=kioskboard-key]:not(.spacebar-denied):active{-webkit-transform:scaleY(.95) translateY(4px);transform:scaleY(.95) translateY(4px)}#KioskBoard-VirtualKeyboard .kioskboard-row span[class^=kioskboard-key] svg{position:absolute;z-index:10;left:10px;top:10px}#KioskBoard-VirtualKeyboard .kioskboard-row-top{padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.06);margin:0 0 10px}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom{padding:10px 0 0;border-top:1px solid rgba(0,0,0,.06);margin:10px 0 0}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-capslock{max-width:100%;min-height:60px;width:140px;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-capslock::before{content:"";position:absolute;z-index:2;width:10px;height:10px;border-radius:10px;right:6px;top:6px;background:#c4c4c4}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-capslock.capslock-active::before{background:#5decaa}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-backspace{position:relative;max-width:100%;min-height:60px;width:140px;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-space{min-height:60px;max-width:100%;width:calc(100% - 16px - 140px - 16px - 140px - 16px);-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom.kioskboard-with-specialcharacter span.kioskboard-key-space{width:calc(100% - 16px - 140px - 16px - 140px - 16px - 140px - 16px)}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-space.spacebar-denied{opacity:.4!important;cursor:not-allowed!important}#KioskBoard-VirtualKeyboard .kioskboard-with-specialcharacter span.kioskboard-key-specialcharacter{position:relative;max-width:100%;min-height:60px;width:140px;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#KioskBoard-VirtualKeyboard .kioskboard-row-numpad{display:block;max-width:320px;margin:auto}#KioskBoard-VirtualKeyboard .kioskboard-row-numpad span[class^=kioskboard-key]{max-width:100%;min-height:60px;width:calc(33.3333% - 16px);-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#KioskBoard-VirtualKeyboard .kioskboard-row-numpad span.kioskboard-key-backspace,#KioskBoard-VirtualKeyboard .kioskboard-row-numpad span.kioskboard-key-last{max-width:100%;width:calc(50% - 16px)}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters{-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;visibility:hidden;opacity:0;position:absolute;background:inherit;padding:20px;z-index:20;left:0;top:0;height:100%;width:100%}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters.kioskboard-specialcharacter-show{visibility:visible;opacity:1}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters span.kioskboard-specialcharacter-close{-webkit-transition:all .36s ease-in-out;-o-transition:all .36s ease-in-out;transition:all .36s ease-in-out;cursor:pointer;position:absolute;z-index:30;right:0;top:-42.5px;width:40px;height:40px;background:#a9a9a9;border-radius:20px;-webkit-box-shadow:0 0 16px -6px rgba(0,0,0,.25);box-shadow:0 0 16px -6px rgba(0,0,0,.25)}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters span.kioskboard-specialcharacter-close svg{position:absolute;left:0;top:0;right:0;bottom:0;margin:auto;fill:#fff!important;width:16px!important;height:16px!important}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters span.kioskboard-specialcharacter-close:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}#KioskBoard-VirtualKeyboard .kioskboard-specialcharacters-content{width:100%;max-height:100%;padding-right:5px;overflow-x:hidden;overflow-y:auto}#KioskBoard-VirtualKeyboard .kioskboard-specialcharacters-content::-webkit-scrollbar{height:6px;width:6px}#KioskBoard-VirtualKeyboard .kioskboard-specialcharacters-content::-webkit-scrollbar-track{border-radius:3px;background:rgba(255,255,255,.75)}#KioskBoard-VirtualKeyboard .kioskboard-specialcharacters-content::-webkit-scrollbar-thumb{border-radius:3px;background:rgba(0,0,0,.25);cursor:pointer}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters span.kioskboard-key{min-width:60px;min-height:30px}#KioskBoard-VirtualKeyboard.kioskboard-theme-light,#KioskBoard-VirtualKeyboard.kioskboard-theme-material{-webkit-box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);background:#e3e3e3;background:linear-gradient(to right bottom,#eee,#ebebeb,#e8e8e8,#e6e6e6,#e3e3e3)}#KioskBoard-VirtualKeyboard.kioskboard-theme-dark{-webkit-box-shadow:inset 1px 1px 0 rgba(0,0,0,.25),0 0 20px -8px rgba(0,0,0,.15);box-shadow:inset 1px 1px 0 rgba(0,0,0,.25),0 0 20px -8px rgba(0,0,0,.15);background:#151515;background:linear-gradient(to left top,#151515,#171717,#1a1a1a,#1c1c1c,#1e1e1e)}#KioskBoard-VirtualKeyboard.kioskboard-theme-flat{-webkit-box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);background:#dfdfdf}#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool{-webkit-box-shadow:inset 4px 4px 4px rgba(0,0,0,.02),0 0 20px -8px rgba(0,0,0,.1);box-shadow:inset 4px 4px 4px rgba(0,0,0,.02),0 0 20px -8px rgba(0,0,0,.1);background:#e5e5e5;background:linear-gradient(to right bottom,#e5e5e5,#e6e6e6,#e7e7e7,#e7e7e7,#e8e8e8)}#KioskBoard-VirtualKeyboard.kioskboard-theme-light .kioskboard-row span[class^=kioskboard-key],#KioskBoard-VirtualKeyboard.kioskboard-theme-material .kioskboard-row span[class^=kioskboard-key]{color:#707070;background:#fafafa}#KioskBoard-VirtualKeyboard.kioskboard-theme-dark .kioskboard-row span[class^=kioskboard-key]{border-color:rgba(255,255,255,.02);border-bottom-color:rgba(255,255,255,.04);-webkit-box-shadow:0 5px 0 .05px rgba(255,255,255,.2);box-shadow:0 5px 0 .05px rgba(255,255,255,.2);color:#b7b7b7;background:#323232}#KioskBoard-VirtualKeyboard.kioskboard-theme-flat .kioskboard-row span[class^=kioskboard-key]{color:#707070;background:#fafafa;border-color:#fafafa;border-bottom-color:#fafafa;-webkit-box-shadow:0 2px 0 .05px #fafafa;box-shadow:0 2px 0 .05px #fafafa}#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool .kioskboard-row span[class^=kioskboard-key]{color:#8f8f8f;text-shadow:0 0 1px rgba(0,0,0,.2);background:#fafafa;-webkit-box-shadow:0 4px 6px .06px rgba(0,0,0,.05);box-shadow:0 4px 6px .06px rgba(0,0,0,.05)}#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool .kioskboard-row span[class^=kioskboard-key]::after{content:"";position:absolute;left:0;top:-5px;right:0;bottom:0;width:100%;height:calc(100% - 5px);background:rgba(255,255,255,.1);-webkit-box-shadow:0 5px 15px -10px rgba(0,0,0,.4);box-shadow:0 5px 15px -10px rgba(0,0,0,.4);margin:auto;border-radius:inherit;border:4px solid rgba(0,0,0,.06);border-top-color:rgba(0,0,0,.02);border-bottom-color:transparent;box-sizing:border-box;border-top-width:2px;border-bottom-width:6px}#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool span.kioskboard-key-capslock::before{right:9px;top:9px}#KioskBoard-VirtualKeyboard.kioskboard-theme-flat span.kioskboard-key-capslock::before,#KioskBoard-VirtualKeyboard.kioskboard-theme-light span.kioskboard-key-capslock::before,#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool span.kioskboard-key-capslock::before{background:#c4c4c4}#KioskBoard-VirtualKeyboard.kioskboard-theme-dark span.kioskboard-key-capslock::before{background:#a9a9a9}#KioskBoard-VirtualKeyboard.kioskboard-theme-material span.kioskboard-key-capslock::before{background:#e6e6e6}#KioskBoard-VirtualKeyboard.kioskboard-theme-dark span.kioskboard-key-capslock.capslock-active::before,#KioskBoard-VirtualKeyboard.kioskboard-theme-flat span.kioskboard-key-capslock.capslock-active::before,#KioskBoard-VirtualKeyboard.kioskboard-theme-light span.kioskboard-key-capslock.capslock-active::before,#KioskBoard-VirtualKeyboard.kioskboard-theme-material span.kioskboard-key-capslock.capslock-active::before,#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool span.kioskboard-key-capslock.capslock-active::before{background:#5decaa}#KioskBoard-VirtualKeyboard.kioskboard-theme-flat .kioskboard-row span[class^=kioskboard-key] svg,#KioskBoard-VirtualKeyboard.kioskboard-theme-light .kioskboard-row span[class^=kioskboard-key] svg{fill:#707070!important}#KioskBoard-VirtualKeyboard.kioskboard-theme-dark .kioskboard-row span[class^=kioskboard-key] svg{fill:#a9a9a9!important}#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool .kioskboard-row span[class^=kioskboard-key] svg{left:12px;fill:#a1a1a1!important}#KioskBoard-VirtualKeyboard.kioskboard-theme-material .kioskboard-row span[class^=kioskboard-key] svg{fill:#fafafa!important}#KioskBoard-VirtualKeyboard.kioskboard-theme-material .kioskboard-row-bottom span.kioskboard-key-backspace,#KioskBoard-VirtualKeyboard.kioskboard-theme-material .kioskboard-row-bottom span.kioskboard-key-capslock,#KioskBoard-VirtualKeyboard.kioskboard-theme-material .kioskboard-row-bottom span.kioskboard-key-specialcharacter,#KioskBoard-VirtualKeyboard.kioskboard-theme-material .kioskboard-row-numpad span.kioskboard-key-backspace{-webkit-box-shadow:0 4px 0 .04px rgba(0,0,0,.3);box-shadow:0 4px 0 .04px rgba(0,0,0,.3);border-bottom-color:rgba(0,0,0,.03);color:#fafafa;background:#b0b0b0}#KioskBoard-VirtualKeyboard.kioskboard-theme-flat span.kioskboard-specialcharacter-close,#KioskBoard-VirtualKeyboard.kioskboard-theme-light span.kioskboard-specialcharacter-close,#KioskBoard-VirtualKeyboard.kioskboard-theme-material span.kioskboard-specialcharacter-close,#KioskBoard-VirtualKeyboard.kioskboard-theme-oldschool span.kioskboard-specialcharacter-close{background:#a9a9a9}#KioskBoard-VirtualKeyboard.kioskboard-theme-dark span.kioskboard-specialcharacter-close{background:#323232}#KioskBoard-VirtualKeyboard.kioskboard-theme-dark span.kioskboard-specialcharacter-close svg{fill:#b7b7b7!important}@media only screen and (max-width:767px){#KioskBoard-VirtualKeyboard{min-height:210px;padding:12px 6px}#KioskBoard-VirtualKeyboard .kioskboard-row span[class^=kioskboard-key]{font-size:13px!important;margin:2px 2px 12px;padding:8px 0;width:auto;min-width:22.5px;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;text-align:center;border-radius:4px}#KioskBoard-VirtualKeyboard .kioskboard-row-numpad span[class^=kioskboard-key]{margin:4px 4px 12px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:16px!important;width:calc(33.3333% - 16px);min-height:55px}#KioskBoard-VirtualKeyboard .kioskboard-row-numpad span.kioskboard-key-backspace,#KioskBoard-VirtualKeyboard .kioskboard-row-numpad span.kioskboard-key-last{width:calc(50% - 20px)}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-backspace,#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-capslock,#KioskBoard-VirtualKeyboard .kioskboard-with-specialcharacter span.kioskboard-key-specialcharacter{max-width:60px;min-height:45px;margin-bottom:4px}#KioskBoard-VirtualKeyboard .kioskboard-row-bottom span.kioskboard-key-space{padding-top:10px;min-height:45px;margin-bottom:4px}#KioskBoard-VirtualKeyboard .kioskboard-row span[class^=kioskboard-key] svg{-webkit-transform:scale(.7);transform:scale(.7);-webkit-transform-origin:left top;transform-origin:left top;left:8px;top:8px}#KioskBoard-VirtualKeyboard .kioskboard-row-numpad span[class^=kioskboard-key] svg{top:0;left:18px;bottom:0;margin:auto;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;transform-origin:center center}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters{padding:15px 15px 10px}#KioskBoard-VirtualKeyboard .kioskboard-row-specialcharacters span.kioskboard-specialcharacter-close{width:30px;height:30px;top:-27px;right:5px}}#KioskBoard-VirtualKeyboard.kioskboard-with-animation.kioskboard-fade{opacity:1;-webkit-animation:kioskboard-animation-fade .36s ease-in-out 0s normal;animation:kioskboard-animation-fade .36s ease-in-out 0s normal}@-webkit-keyframes kioskboard-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes kioskboard-animation-fade{0%{opacity:0}100%{opacity:1}}#KioskBoard-VirtualKeyboard.kioskboard-with-animation.kioskboard-fade.kioskboard-fade-remove{opacity:0;-webkit-animation:kioskboard-animation-fade-remove .36s ease-in-out 0s normal;animation:kioskboard-animation-fade-remove .36s ease-in-out 0s normal}@-webkit-keyframes kioskboard-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes kioskboard-animation-fade-remove{0%{opacity:1}100%{opacity:0}}#KioskBoard-VirtualKeyboard.kioskboard-with-animation.kioskboard-placement-bottom.kioskboard-slide{bottom:0;-webkit-animation:kioskboard-animation-slide-bottom 1.2s ease-in-out 0s normal;animation:kioskboard-animation-slide-bottom 1.2s ease-in-out 0s normal}@-webkit-keyframes kioskboard-animation-slide-bottom{0%{bottom:-100%}100%{bottom:0}}@keyframes kioskboard-animation-slide-bottom{0%{bottom:-100%}100%{bottom:0}}#KioskBoard-VirtualKeyboard.kioskboard-with-animation.kioskboard-slide.kioskboard-placement-bottom.kioskboard-slide-remove{bottom:-100%;-webkit-animation:kioskboard-animation-slide-bottom-remove 1.2s ease-in-out 0s normal;animation:kioskboard-animation-slide-bottom-remove 1.2s ease-in-out 0s normal}@-webkit-keyframes kioskboard-animation-slide-bottom-remove{0%{bottom:0}100%{bottom:-100%}}@keyframes kioskboard-animation-slide-bottom-remove{0%{bottom:0}100%{bottom:-100%}}#KioskBoard-VirtualKeyboard.kioskboard-with-animation.kioskboard-placement-top.kioskboard-slide{top:0;-webkit-animation:kioskboard-animation-slide-top 1.2s ease-in-out 0s normal;animation:kioskboard-animation-slide-top 1.2s ease-in-out 0s normal}@-webkit-keyframes kioskboard-animation-slide-top{0%{top:-100%}100%{top:0}}@keyframes kioskboard-animation-slide-top{0%{top:-100%}100%{top:0}}#KioskBoard-VirtualKeyboard.kioskboard-with-animation.kioskboard-slide.kioskboard-placement-top.kioskboard-slide-remove{top:-100%;-webkit-animation:kioskboard-animation-slide-top-remove 1.2s ease-in-out 0s normal;animation:kioskboard-animation-slide-top-remove 1.2s ease-in-out 0s normal}@-webkit-keyframes kioskboard-animation-slide-top-remove{0%{top:0}100%{top:-100%}}@keyframes kioskboard-animation-slide-top-remove{0%{top:0}100%{top:-100%}}';
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
