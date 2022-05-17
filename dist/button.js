import React from 'react';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';
import cn from 'classnames';

var css_248z = ".Button-module_button__wLOHw {\n  background-color: teal;\n  color: white;\n  font-weight: 700;\n  padding: 10px 15px;\n}\n.Button-module_button__wLOHw ::-moz-placeholder {\n  color: black;\n}\n.Button-module_button__wLOHw :-ms-input-placeholder {\n  color: black;\n}\n.Button-module_button__wLOHw ::placeholder {\n  color: black;\n}";
var classes = {"button":"Button-module_button__wLOHw"};
styleInject(css_248z);

function Button({ className , onClick , label , children  }) {
    return /*#__PURE__*/ React.createElement("button", {
        className: cn(classes.button, className),
        onClick: onClick
    }, children && children, label);
}

export { Button as default };
