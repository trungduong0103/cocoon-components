import t from"react";var r,e={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
r=e,function(){var t={}.hasOwnProperty;function e(){for(var r=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var a=typeof o;if("string"===a||"number"===a)r.push(o);else if(Array.isArray(o)){if(o.length){var i=e.apply(null,o);i&&r.push(i)}}else if("object"===a)if(o.toString===Object.prototype.toString)for(var l in o)t.call(o,l)&&o[l]&&r.push(l);else r.push(o.toString())}}return r.join(" ")}r.exports?(e.default=e,r.exports=e):window.classNames=e}();var n=e.exports;function o({onClick:r,children:e,label:o}){return t.createElement("button",{className:n("._button_1xmoa_1 {\n  background-color: teal;\n  color: white;\n  font-weight: 700;\n  padding: 10px 15px;\n}".button),onClick:r},e&&e,o)}export{o as default};
