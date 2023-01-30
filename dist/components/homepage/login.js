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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import '../../css/homepage.css';
import { useState } from 'react';
import { apiLoginRequest } from '../../controllers/homepage';
//import {login} from '../../redux/dispatchers';
//import {State} from '../../redux/utilitis';
import { useNavigate } from 'react-router-dom';
var Login = function () {
    var _a = useState(""), email = _a[0], setEmail = _a[1];
    var _b = useState(""), password = _b[0], setPassword = _b[1];
    //const dispatch = useDispatch();
    var navigate = useNavigate();
    var handleLogin = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var result, full_name, user_id, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    return [4 /*yield*/, apiLoginRequest(email, password)];
                case 1:
                    result = _a.sent();
                    if (result.data.status === 200) {
                        console.log(result);
                        full_name = result.data.data.full_name;
                        user_id = result.data.data.user_id;
                        console.log(typeof full_name);
                        //dispatch<any>(login(email));
                        console.log("Logged in!");
                        console.log(result.data.data);
                        localStorage.setItem('full_name', JSON.stringify(full_name));
                        localStorage.setItem('user_id', JSON.stringify(user_id));
                        localStorage.setItem('user_email', email);
                        localStorage.setItem('is_logged_in', 'true');
                        navigate('/profile');
                    }
                    else {
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx("div", __assign({ className: "right-container" }, { children: _jsx("div", __assign({ className: "login-container" }, { children: _jsxs("form", __assign({ className: "form-container" }, { children: [_jsx("h1", { children: "Login" }), _jsxs("div", __assign({ className: "login-input" }, { children: [_jsx("span", { children: "Username" }), _jsx("input", { type: "email", id: "Email", onChange: function (e) { return setEmail(e.target.value); } })] })), _jsxs("div", __assign({ className: "login-input" }, { children: [_jsx("span", { children: "Password" }), _jsx("input", { type: "password", onChange: function (e) { return setPassword(e.target.value); } })] })), _jsx("button", __assign({ className: "form-button", onClick: handleLogin }, { children: "Login" }))] })) })) })));
};
export default Login;
