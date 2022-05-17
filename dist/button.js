import React from 'react';
import cn from 'classnames';

var classes = ".button {\n  background-color: teal;\n  color: white;\n  font-weight: 700;\n  padding: 10px 15px;\n}";

function Button({ onClick , children , label  }) {
    return /*#__PURE__*/ React.createElement("button", {
        className: cn(classes.button),
        onClick: onClick
    }, children && children, label);
}

export { Button as default };
