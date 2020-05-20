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
<<<<<<< HEAD
function usersInfo(state = defaultState.usersInfo, action) {
    switch (action.type) {
        case "SET_USERS_INFO":
            return action.data;
=======
function axiosTest(state = defaultState.axiosTest, action) {
    switch (action.type) {
        case "SET_AXIOSTEST":
            return action.data;
        case "SET_TEST_DATA_Reduce":
            return state;
>>>>>>> 6ec921bf644924cad129a59d640efbccf7b2aad9
        default:
            return state;
    }
}
<<<<<<< HEAD
// 导出所有reducer
=======

>>>>>>> 6ec921bf644924cad129a59d640efbccf7b2aad9
export default combineReducers({
    pageTitle,
    infoList,
    testdata,
<<<<<<< HEAD
    usersInfo
=======
    axiosTest
>>>>>>> 6ec921bf644924cad129a59d640efbccf7b2aad9
});
