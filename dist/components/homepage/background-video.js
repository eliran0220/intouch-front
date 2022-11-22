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
import bg_video from '../../assets/homepage/bg_video.mp4';
import '../../css/homepage.css';
var BgVideo = function () {
    return (_jsx("div", __assign({ className: "video-container" }, { children: _jsx("video", { src: bg_video, typeof: "video/mp4", loop: true, muted: true, autoPlay: true, className: "video" }, void 0) }), void 0));
};
export default BgVideo;
