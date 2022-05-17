import React from 'react';
import cn from 'classnames';
import { s as styleInject } from './style-inject.es-1f59c1d0.js';

var css_248z = ".Paper-module_paper__DhNs4 {\n  padding: 16px;\n  border-radius: 4px;\n}";
var classes = {"paper":"Paper-module_paper__DhNs4"};
styleInject(css_248z);

function Paper({ className , children  }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: cn(classes.paper, className)
    }, children);
}

export { Paper as default };
