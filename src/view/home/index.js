import React from "react";
import Sider from "../sider";
import "./home.css";
import App from "../App";
import About from "../routertest/about";
import List from "../routertest/list";
import Inbox from "../routertest/inbox";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "../../router/home";
class Home extends React.Component {
    render() {
        return (
            <div>
                <Sider></Sider>
                <div className="body-contain">
                    <div>
                        <Switch>
                        {renderRoutes(routes)}
                            {/* <Route path="/home/app" component={App}></Route>
                            <Route path="/home/about" component={About}></Route>
                            <Route path="/home/inbox" component={Inbox}></Route>
                            <Route path="/home/list" component={List}></Route> */}
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
