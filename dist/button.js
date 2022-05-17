import { R as React } from './index-543901a8.js';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Button-module_button__wLOHw {\n  background-color: teal;\n  color: white;\n  font-weight: 700;\n  padding: 10px 15px;\n}\n.Button-module_button__wLOHw ::-moz-placeholder {\n  color: black;\n}\n.Button-module_button__wLOHw :-ms-input-placeholder {\n  color: black;\n}\n.Button-module_button__wLOHw ::placeholder {\n  color: black;\n}";
var classes = {"button":"Button-module_button__wLOHw"};
styleInject(css_248z);

function Button({ onClick , children , label  }) {
    return /*#__PURE__*/ React.createElement("button", {
        className: classes.button,
        onClick: onClick
    }, children && children, label);
}

export { Button as default };
