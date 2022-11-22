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
import { Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import '../../styles/homepage/navbar.styles.css';
var Navbar = function () {
    return (_jsx(AppBar, { children: _jsxs(Toolbar, __assign({ className: "nav-container" }, { children: [_jsx(Fragment, { children: _jsx(Button, __assign({ className: "Home" }, { children: _jsx(HomeIcon, {}, void 0) }), void 0) }, void 0), _jsxs(Fragment, { children: [_jsx(Button, __assign({ color: "inherit" }, { children: "Login" }), void 0), _jsx(Button, __assign({ color: "inherit" }, { children: "Home" }), void 0), _jsx(Button, __assign({ color: "inherit" }, { children: "Signup" }), void 0)] }, void 0)] }), void 0) }, void 0));
};
export default Navbar;
