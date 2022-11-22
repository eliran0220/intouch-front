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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../css/homepage.css';
;
var CreateAccount = function () {
    var popupSignup = function () {
        var homepage_container = document.getElementsByClassName("homepage-container")[0];
        var popup_container = document.getElementsByClassName("popup-container")[0];
        homepage_container.classList.add("blured");
        popup_container.classList.add("active");
    };
    return (_jsx("div", __assign({ className: "left-container" }, { children: _jsxs("div", __assign({ className: "create-account-container" }, { children: [_jsx("h1", { children: "Don't have an account yet?" }, void 0), _jsx("p", { children: "Join many others and start connecting" }, void 0), _jsx("button", __assign({ onClick: popupSignup }, { children: "Create an account" }), void 0)] }), void 0) }), void 0));
};
export default CreateAccount;
