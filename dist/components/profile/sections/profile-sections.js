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
import '../../../css/profile.css';
import Profile from './components/profile/profile';
var ProfileSections = function () {
    return (_jsxs("div", __assign({ className: "sections-container" }, { children: [_jsx(Profile, {}), _jsx("div", __assign({ className: "posts" }, { children: "posts" })), _jsx("div", __assign({ className: "navigator" }, { children: "navigator" }))] })));
};
export default ProfileSections;
