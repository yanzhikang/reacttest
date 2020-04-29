// reducers.js

import { combineReducers } from "redux";
import defaultState from "./state.js";

function pageTitle(state = defaultState.pageTitle, action) {
    switch (action.type) {
        case "SET_PAGE_TITLE":
            return action.data;
        default:
            return state;
    }
}

function infoList(state = defaultState.infoList, action) {
    switch (action.type) {
        case "SET_INFO_LIST":
            return action.data;
        default:
            return state;
    }
}

function testdata(state = defaultState.testdata, action) {
    switch (action.type) {
        case "SET_TEST_DATA_Add":
            return state + 1;
        case "SET_TEST_DATA_Reduce":
            return state - 1;
        default:
            return state;
    }
}

export default combineReducers({
    pageTitle,
    infoList,
    testdata
});
