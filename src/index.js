import React from "react";
import ReactDOM from "react-dom";

import App from "./view/App";
import About from "./view/routertest/about";
import Inbox from "./view/routertest/inbox";

import { Route, Link, BrowserRouter, Switch, Redirect } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/index.js";

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={App}>
					{/* <Redirect to="/about" /> */}
				</Route>
				<Route path="/about" exact component={About}></Route>
				<Route path="/inbox" component={Inbox}></Route>
				{/* <Route path="/inbox/list" exact component={List}></Route> */}
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
