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
export var handlePopupSignup = function () {
    var popup_container = document.getElementsByClassName("popup-container")[0];
    var left_container = document.getElementsByClassName("left-container")[0];
    var right_container = document.getElementsByClassName("right-container")[0];
    var bg_vid = document.getElementsByClassName("video-container")[0];
    popup_container.className = "active-popup-container";
    left_container.classList.add("blured");
    right_container.classList.add("blured");
    bg_vid.classList.add("blured");
};
export var handleExitSignup = function () {
    var popup_container = document.getElementsByClassName("active-popup-container")[0];
    var left_container = document.getElementsByClassName("left-container blured")[0];
    var right_container = document.getElementsByClassName("right-container blured")[0];
    var bg_vid = document.getElementsByClassName("video-container blured")[0];
    var active_creation_status_container = document.getElementsByClassName("active-creation-status-container")[0];
    popup_container.className = "popup-container";
    left_container.classList.remove("blured");
    right_container.classList.remove("blured");
    bg_vid.classList.remove("blured");
    active_creation_status_container.className = "creation-status-container";
};
export var handleSignupMessage = function () {
    var popup_container = document.getElementsByClassName("creation-status-container ")[0];
    popup_container.className = "active-creation-status-container";
};
export var closeSignupMessage = function () {
    var active_creation_status_container = document.getElementsByClassName("active-creation-status-container")[0];
    if (active_creation_status_container) {
        active_creation_status_container.className = "creation-status-container";
    }
};
export var parseErrosSignup = function (data) {
    console.log(data);
    var errors = '';
    Object.entries(data).forEach(function (_a) {
        var key = _a[0], value = _a[1];
        errors += "".concat(value, "\n");
    });
    console.log(errors);
    return errors;
};
export var delay = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        setTimeout(function () {
        }, 3000);
        return [2 /*return*/];
    });
}); };
