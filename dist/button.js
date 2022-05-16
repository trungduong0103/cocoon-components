function Button(param) {
    var onClick = param.onClick;
    return /*#__PURE__*/ React.createElement("button", {
        onClick: onClick
    }, children);
}

export { Button as default };
