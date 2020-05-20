import React from "react";
import axios from 'axios'

// function List() {
//     return (
//         <div>list
//         </div>
//     );
// }
class List extends React.Component {
    componentDidMount(){
        console.log('list mount')
        axios.get('http://localhost:3000/users').then((res)=>{
            console.log(res)
        })
    }
    render() {
        return <div>list</div>;
    }
}

export default List;
