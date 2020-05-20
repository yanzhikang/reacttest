import React from "react";
import Sider from "../sider";
import "./home.css";
import { Switch } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "../../router/home";
class Home extends React.Component {
    render() {
        return (
            <div>
                <Sider></Sider>
                <div className="body-contain">
                    <div>
                        <Switch>{renderRoutes(routes)}</Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
