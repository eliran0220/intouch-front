var CONSTANTS = /** @class */ (function () {
    function CONSTANTS() {
    }
    CONSTANTS.BASE_URL = "localhost://3031/v1";
    CONSTANTS.ENV = "development";
    return CONSTANTS;
}());
export { CONSTANTS };
export var ROUTES;
(function (ROUTES) {
    ROUTES["LOGIN"] = "user/login";
    ROUTES["SIGNUP"] = "user/signup";
    ROUTES["IS_LOGGED_IN"] = "user/authorize";
})(ROUTES || (ROUTES = {}));
export var HTTP_METHODS;
(function (HTTP_METHODS) {
    HTTP_METHODS["POST"] = "post";
    HTTP_METHODS["GET"] = "get";
    HTTP_METHODS["DELETE"] = "delete";
    HTTP_METHODS["UPDATE"] = "update";
})(HTTP_METHODS || (HTTP_METHODS = {}));
export var BASE_URL = 'http://localhost:3030/v1/';
