import * as react from 'react';

function Button({ onClick , children  }) {
    return /*#__PURE__*/ react.exports.createElement("button", {
        onClick: onClick
    }, children);
}

export { Button as default };
