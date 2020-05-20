import React, { Component } from "react";
import { connect } from "react-redux";
import {
    setPageTitle,
    setInfoList,
    setTestdataAdd,
    setTestdataReduce,
    getUsersInfo
} from "../../store/action";
import axios from "axios";

class Test02 extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        var data = {
            id:1
        }
        this.props.getUsersInfo(data)
    }
    reduce = () => {
        console.log("reduce");
        this.props.setTestdataReduce();
    };
    add = () => {
        console.log("add");
        this.props.setTestdataAdd();
    };
    getUsersInfo=()=>{
        var data = {
            id:2
        }
        this.props.getUsersInfo(data)
    }
    render() {
        let { pageTitle, infoList, testdata,usersInfo} = this.props;
        return (
            <div>
                <button onClick={this.reduce}>-1</button>
                {testdata}
                <button onClick={this.add}>+1</button>
                <br/>
                <p>{usersInfo}</p>
                <button onClick={this.getUsersInfo}>get</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        pageTitle: state.pageTitle,
        infoList: state.infoList,
        testdata: state.testdata,
        usersInfo:state.usersInfo
    };
};

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setPageTitle(data) {
            // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
            dispatch(setPageTitle(data));
            // 执行setPageTitle会返回一个函数
            // 这正是redux-thunk的所用之处:异步action
            // 上行代码相当于
            /*dispatch((dispatch, getState) => {
              dispatch({ type: 'SET_PAGE_TITLE', data: data })
          )*/
        },
        setInfoList(data) {
            dispatch(setInfoList(data));
        },
        setTestdataReduce: data => dispatch(setTestdataReduce(data)),
        setTestdataAdd: data => dispatch(setTestdataAdd(data)),
        getUsersInfo:data=>dispatch(getUsersInfo(data))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Test02);
