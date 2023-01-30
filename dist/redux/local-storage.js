export var saveState = function (state) {
    try {
        var serializedState = JSON.stringify(state);
        localStorage.setItem('email', serializedState);
    }
    catch (_a) {
        // We'll just ignore write errors
    }
};
// Loads the state and returns an object that can be provided as the
// preloadedState parameter of store.js's call to configureStore
export var loadState = function () {
    try {
        var serializedState = localStorage.getItem('email');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    }
    catch (error) {
        return undefined;
    }
};
