import React from "react";
import Login from "./login";
import Test from "./test/test-redux";
import Test02 from "./test/test02";

import {Link } from 'react-router-dom'

function App() {
    return (
        <div>
            {/* <Login></Login> */}
            {/* <Test></Test>
            <Test02></Test02> */}
            <h1>App</h1>
            {/* 把 <a> 变成 <Link> */}
            {/* <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/inbox">Inbox</Link>
                </li>
            </ul> */}

            {/* {this.props.children} */}
        </div>
    );
}

export default App;
