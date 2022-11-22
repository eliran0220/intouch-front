import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import App from '../src/app/App';
import { CONSTANTS } from '../src/utilitis/constants.utilities';
var env = process.env.NODE_ENV || 'development';
switch (env) {
    case "production":
        CONSTANTS.BASE_URL = "http://production";
        break;
    case "development":
        CONSTANTS.BASE_URL = "http://3030";
}
console.log("env set to : " + env);
console.log("url is : " + String(CONSTANTS.BASE_URL));
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}, void 0) }, void 0));
