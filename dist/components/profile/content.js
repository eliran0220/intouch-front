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
import { useState, useEffect } from 'react';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user_logo from '../../assets/profile/user.png';
import { getAllPostsRelated } from '../../controllers/profile';
import '../../css/content.css';
import { initialUserState, usePostsDataContext } from '../../utilitis/constants.utilities';
var Content = function () {
    var _a = usePostsDataContext(), posts = _a.posts, setPosts = _a.setPosts;
    var _b = useState(initialUserState), user = _b[0], setUser = _b[1];
    useEffect(function () {
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a, user, posts;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, getAllPostsRelated()];
                    case 1:
                        _a = _b.sent(), user = _a.user, posts = _a.posts;
                        console.log(posts);
                        posts.sort(function (prev, next) { return next.created_at_timestamp - prev.created_at_timestamp; });
                        console.log(posts);
                        setPosts(posts);
                        setUser(user);
                        return [2 /*return*/];
                }
            });
        }); })();
    }, []);
    return (_jsx("div", __assign({ className: "content" }, { children: posts.map(function (post, id) { return (_jsxs("div", __assign({ className: "feed-post" }, { children: [_jsxs("div", __assign({ className: "feed-post-top" }, { children: [_jsx("div", __assign({ className: "post-profile-pic" }, { children: _jsx("img", { className: "profile-pic", src: user_logo, alt: "" }) })), _jsxs("div", __assign({ className: "post-info" }, { children: [_jsx("h1", { children: user.first_name + ' ' + user.last_name }), _jsx("small", { children: post.created_at_standart })] }))] })), _jsx("div", __assign({ className: "feed-post-middle" }, { children: _jsx("div", __assign({ className: "post-content" }, { children: _jsx("p", { children: post.post_input }) })) })), _jsx("hr", { style: { width: '90%', margin: 'auto', color: 'gray' } }), _jsxs("div", __assign({ className: "feed-post-buttom" }, { children: [_jsxs("div", __assign({ className: "feed-post-buttom-item" }, { children: [_jsx(FontAwesomeIcon, { icon: faHeart, className: "feed-post-icon" }), _jsx("h2", { children: "Like" })] })), _jsxs("div", __assign({ className: "feed-post-buttom-item" }, { children: [_jsx(FontAwesomeIcon, { icon: faComment, className: "feed-post-icon" }), _jsx("h2", { children: "Comment" })] }))] }))] }), id)); }) })));
};
export default Content;
