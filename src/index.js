// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./view/App";
// import About from "./view/routertest/about";
// import List from "./view/routertest/list";
// import Inbox from "./view/routertest/inbox";

// import { Router, Route, Link } from 'react-router'


// // Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// // 第二个工具是connect，稍后会作介绍
// import { Provider } from "react-redux";
// // 引入创建好的store实例
// import store from "./store/index.js";

// // import { Router } from "react-router";

// ReactDOM.render(
//     <div>
//         {/* 将store作为prop传入，即可使应用中的所有组件使用store */}
//         {/* <Provider store={store}>
//             <App />
//         </Provider> */}

//         <Router>
//             <Route path="/" component={App}>
//                 <Route path="about" component={About} />
//                 <Route path="list" component={Inbox} />
//                 <Route path="inbox" component={Inbox} />
//             </Route>
//         </Router>
//     </div>,
//     document.getElementById("root")
// );

import React from 'react'
import { render } from 'react-dom'
import About from "./view/routertest/about";
import List from "./view/routertest/list";
import Inbox from "./view/routertest/inbox";

// 首先我们需要导入一些组件...
import { Router, Route, Link } from 'react-router-dom'

// 然后我们从应用中删除一堆代码和
// 增加一些 <Link> 元素...
// const App = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/inbox">Inbox</Link></li>
//         </ul>
//         {this.props.children}
//       </div>
//     )
//   }
// })

function App() {
    return (
        <div>
          <h1>App</h1>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
          </ul>
          {this.props.children}
        </div>
    );
}
// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.body)