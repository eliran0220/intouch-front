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
import Posts from './posts';
import Content from './content';
import { PostsDataContext } from '../../utilitis/constants.utilities';
import '../../css/feed.css';
import { useState } from 'react';
var Feed = function () {
    var _a = useState([]), posts = _a[0], setPosts = _a[1];
    return (_jsx(PostsDataContext.Provider, __assign({ value: { posts: posts, setPosts: setPosts } }, { children: _jsxs("div", __assign({ className: "feed" }, { children: [_jsx(Posts, {}), _jsx(Content, {})] })) })));
};
export default Feed;
