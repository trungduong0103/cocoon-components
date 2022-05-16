import React from 'react';

function Button({ onClick , children  }) {
    return /*#__PURE__*/ React.createElement("button", {
        style: {
            color: "red"
        },
        onClick: onClick
    }, children);
}

export { Button as default };
