import ReactDOM from "react-dom/client";
import App from '../src/app/App';
import {CONSTANTS} from '../src/utilitis/constants.utilities';
const env = process.env.NODE_ENV || 'development';
switch (env) {
    case "production":
        CONSTANTS.BASE_URL = "http://production";
        break;
    case "development":
        CONSTANTS.BASE_URL = "http://3030";
}
console.log(`env set to : ${env}`);
console.log(`url is : ${String(CONSTANTS.BASE_URL)}` ,)
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
        <App/>
);