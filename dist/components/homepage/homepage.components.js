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
import Login from '../../components/homepage/login';
import BgVideo from '../homepage/background-video';
import CreateAccount from '../homepage/create-account';
import Signup from '../homepage/signup';
;
var Homepage = function () {
    return (_jsxs("div", __assign({ className: "homepage-container" }, { children: [_jsx(Signup, {}, void 0), _jsx(CreateAccount, {}, void 0), _jsx(Login, {}, void 0), _jsx(BgVideo, {}, void 0)] }), void 0));
};
export default Homepage;
