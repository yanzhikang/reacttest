import React from "react";
import "./login.css";
import { Form, Input, Button } from "antd";

// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [
                {
                    id: 1,
                    title: "Hello World",
                    content: "Welcome to learning React!"
                },
                {
                    id: 2,
                    title: "Installation",
                    content: "You can install React from npm."
                }
            ],
            layout: {
                labelCol: {
                    span: 6
                },
                wrapperCol: {
                    span: 16
                }
            },
            tailLayout: {
                wrapperCol: {
                    offset: 6,
                    span: 16
                }
            }
        };
    }
    onSubmit = e => {
        e.preventDefault();

        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values);
                console.log(this.props.history)
                this.props.history.push('/home');
            }
        });
    };
    loginClick(){
        console.log('login')
    }
    render() {
        var { getFieldDecorator } = this.props.form;
        return (
            <Form {...this.state.layout} name="basic" onSubmit={this.onSubmit}>
                <Form.Item label="用户名" name="username">
                    {getFieldDecorator("username", {
                        rules: [
                            {
                                required: true,
                                message: "请输入用户名!"
                            }
                        ]
                    })(<Input placeholder="请输入用户名!" />)}
                </Form.Item>

                <Form.Item label="密码" name="password">
                    {getFieldDecorator("password", {
                        rules: [
                            {
                                required: true,
                                message: "请输入密码!"
                            }
                        ]
                    })(<Input.Password placeholder="请输入密码!" />)}
                </Form.Item>

                <Form.Item {...this.state.tailLayout}>
                    <Button type="primary" htmlType="submit" onClick={this.loginClick}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
const LoginForm2 = withRouter(LoginForm)
const Lf = Form.create({ name: "login" })(LoginForm2);

class Login extends React.Component {
    render() {
        return (
            <div className="loginContain">
                <Lf></Lf>
            </div>
        );
    }
}

export default Login;
