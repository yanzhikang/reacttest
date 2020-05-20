// actions.js

import axios from "axios";
// action也是函数
export function setPageTitle(data) {
	return (dispatch, getState) => {
		dispatch({ type: "SET_PAGE_TITLE", data: data });
	};
}

export function setInfoList(data) {
	return (dispatch, getState) => {
		// 使用fetch实现异步请求
		// window
		//     .fetch("/api/getInfoList", {
		//         method: "GET",
		//         headers: {
		//             "Content-Type": "application/json"
		//         }
		//     })
		//     .then(res => {
		//         return res.json();
		//     })
		//     .then(data => {
		//         let { code, data } = data;
		//         if (code === 0) {
		//             dispatch({ type: "SET_INFO_LIST", data: data });
		//         }
		//     });
	};
}

export function setTestdataAdd(data) {
    return { type: "SET_TEST_DATA_Add", data: data };
}

export function setTestdataReduce(data) {
    return { type: "SET_TEST_DATA_Reduce", data: data };
}

export function getUsersInfo(data) {
    return (dispatch, getState) => {
        // axios.get("http://localhost:3000/users").then(res => {
        //     dispatch({ type: "SET_USERS_INFO", data: res.data });
        // });
        axios.get("http://localhost:3000/users",{
            params:data
        }).then(res => {
            dispatch({ type: "SET_USERS_INFO", data: res.data });
        });
    };
}
