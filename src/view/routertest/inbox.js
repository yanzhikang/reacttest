import React from "react";
import { Route} from "react-router-dom";
import List from "./list";

function Inbox() {
    return (
        <div>
            inbox
            <Route path="/inbox/list" exact component={List}></Route>
        </div>
    );
}

export default Inbox;
