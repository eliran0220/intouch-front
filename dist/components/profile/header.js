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
import { useState } from 'react';
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../css/profile.css';
import user_logo from '../../assets/profile/user.png';
import '../../css/profile-header.css';
var Header = function () {
    var _a = useState(''), search = _a[0], setSearch = _a[1];
    var handleSearch = function (e) {
        e.preventDefault();
        setSearch(e.target.value);
    };
    return (_jsxs("div", __assign({ className: "header" }, { children: [_jsxs("div", __assign({ className: "left-panel" }, { children: [_jsx("div", __assign({ className: "intouch-text" }, { children: _jsx("h1", { children: "inTouch" }) })), _jsxs("div", __assign({ className: "search" }, { children: [_jsx(FontAwesomeIcon, { icon: faMagnifyingGlass }), _jsx("input", { className: "input", type: "text", placeholder: 'Search', onChange: handleSearch })] }))] })), _jsxs("div", __assign({ className: "right-panel" }, { children: [_jsx("div", __assign({ className: "notifications" }, { children: _jsx(FontAwesomeIcon, { icon: faBell, style: { color: '#0082c8' } }) })), _jsx("div", __assign({ className: "profile" }, { children: _jsx("img", { className: "profile-pic", src: user_logo, alt: "" }) }))] }))] })));
};
export default Header;
