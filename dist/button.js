import * as React from 'react';

function Button({ onClick , children  }) {
    return /*#__PURE__*/ React.createElement("button", {
        onClick: onClick
    }, children);
}

export { Button as default };
