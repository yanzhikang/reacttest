import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import Login from "./view/login";
import Home from "./view/home";

import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/index.js";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/login" />
                </Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/home"  component={Home}></Route>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
