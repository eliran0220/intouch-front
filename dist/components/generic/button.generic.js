var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Button } from 'react-bootstrap';
var GenericButton = function (props) {
    var _a = useState(false), is_clicked = _a[0], useIsClicked = _a[1];
    return (_jsxs(Button, __assign({ onClick: props.onClick, variant: props.variant, color: props.color }, { children: [props.text, " "] }), void 0));
};
export default GenericButton;
