import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import '../css/homepage.css';
import Homepage from '../components/homepage/homepage.components';
import ProfilePage from '../components/profile/profile-page';
import Settings from '../components/settings/settings';
import Lead from '../components/lead/lead';
var App = function () {
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: '/', element: _jsx(Homepage, {}) }), _jsx(Route, { path: '/profile', element: _jsx(ProfilePage, {}) }), _jsx(Route, { path: '/settings', element: _jsx(Settings, {}) }), _jsx(Route, { path: '/lead/:username', element: _jsx(Lead, {}) })] }) }));
};
export default App;
