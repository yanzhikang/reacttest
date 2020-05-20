
import App from "../view/App";
import About from "../view/routertest/about";
import List from "../view/routertest/list";
import Inbox from "../view/routertest/inbox";
const homeRoutes = [
    { path: "/home/app", component: App },
    {
        path: "/home/about",
        component: About
    },
    {
        path: "/home/inbox",
        component: Inbox
    },
    {
        path: "/home/list",
        component: List
    }
];

export default homeRoutes
