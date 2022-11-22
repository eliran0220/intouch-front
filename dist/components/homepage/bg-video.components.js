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
import { jsx as _jsx } from "react/jsx-runtime";
import video from '../../assets/homepage/background_vid.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/homepage/login.styles.css';
var Video = function () {
    return (_jsx("div", __assign({ className: "video" }, { children: _jsx("div", __assign({ className: "relative w-full h-full" }, { children: _jsx("video", { src: video, typeof: "video/mp4", loop: true, controls: false, muted: true, autoPlay: true, className: "video" }, void 0) }), void 0) }), void 0));
};
export default Video;
