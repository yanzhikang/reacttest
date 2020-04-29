import React, { Component } from "react";
import { connect } from "react-redux";
import {
	setPageTitle,
	setInfoList,
	setTestdataAdd,
    setTestdataReduce,
    setAxiosdata
} from "../../store/action";
import axios from "axios";

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
	myClick = () => {
		console.log("myclick");
		this.props.setTestdataBymyclick();
	};
	axiosTest = () => {
		console.log("axiosTest");
		this.props.setAxiosdata();
	};
	render() {
		let { pageTitle, infoList, testdata ,axiosTest} = this.props;
		return (
			<div>
				<button onClick={this.reduce}>-1</button>
				{testdata}
				<button onClick={this.add}>+1</button>
				<br></br>
				MY NAME IS {axiosTest}!
				<button onClick={this.myClick}>click</button>
				<button onClick={this.axiosTest}>axios_test</button>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		pageTitle: state.pageTitle,
		infoList: state.infoList,
		testdata: state.testdata,
		axiosTest: state.axiosTest,
	};
};

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setPageTitle(data) {
			dispatch(setPageTitle(data));
		},
		setInfoList(data) {
			dispatch(setInfoList(data));
		},
		setTestdataReduce: (data) => dispatch(setTestdataReduce(data)),
		setTestdataAdd: (data) => dispatch(setTestdataAdd(data)),
		setTestdataBymyclick(data) {
			dispatch(setTestdataAdd(data));
		},
		setAxiosdata(data) {
			dispatch(setAxiosdata(data));
		},
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Test02);
