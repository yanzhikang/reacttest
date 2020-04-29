import React, { Component } from "react";
import { connect } from "react-redux";
import {
	setPageTitle,
	setInfoList,
	setTestdataAdd,
	setTestdataReduce,
} from "../../store/action";

class Test02 extends Component {
	constructor(props) {
		super(props);
	}
	reduce = () => {
		console.log("reduce");
		this.props.setTestdataReduce();
	};
	add = () => {
		console.log("add");
		this.props.setTestdataAdd();
	};
	render() {
		let { pageTitle, infoList, testdata } = this.props;
		return (
			<div>
				<button onClick={this.reduce}>-1</button>
				{testdata}
				<button onClick={this.add}>+1</button>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		pageTitle: state.pageTitle,
		infoList: state.infoList,
		testdata: state.testdata,
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
		setTestdataReduce: (data) => dispatch(setTestdataReduce(data)),
		setTestdataAdd: (data) => dispatch(setTestdataAdd(data)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Test02);
