import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./view/App";
import About from "./view/routertest/about";
import List from "./view/routertest/list";
import Inbox from "./view/routertest/inbox";

import { Router, Route, Link, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/index.js";

// ReactDOM.render(
//     <div>
//         <Provider store={store}>
//             <App />
//         </Provider>
//     </div>,
//     document.getElementById("root")
// );
function App() {
    return (
        <div>
            <h1>App</h1>
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/inbox">Inbox</Link>
                </li>
            </ul>
            {/* {this.props.children} */}
        </div>
    );
}
// ReactDOM.render(
//     <Router>
//         <Route path="/" component={App}>
//             <Route path="about" component={About} />
//             <Route path="inbox" component={Inbox} />
//         </Route>
//     </Router>,
//     document.getElementById("root")
// );

ReactDOM.render(
    <BrowserRouter>
        <div>
                <Route path="/" exact component={App}></Route>
                <Route path="/about" exact component={About}></Route>
                <Route path="/inbox" exact component={Inbox}></Route>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
);
