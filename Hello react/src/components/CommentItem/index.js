import React from 'react'
//import {变量名} from

class CommentItem extends React.Component{
    constructor(props){
        super(props)
    }
    deleteItem = ()=>{
        this.props.item = {}
    }
    render(){
        const {item} = this.props//要习惯这种写法，this.props是一个对象，有item属性
        return(
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:" onClick={this.deleteItem}>删除</a>
                </div>
                <p className="user"><span >{item.username}</span><span>说:</span></p>
                <p className="centence">{item.userComment}</p>
            </li>
        )
    }
}
CommentItem.propTypes={
    item: React.PropTypes.object.isRequired
}
export default CommentItem
//暴露组件
//export{变量名} 这里的大括号是不能省略的，否则就是输出变量所代表的值，
// 但是加default就可以了，相当于把变量的值赋给新变量default，
// 其实此处相当于起了一个系统默认的变量名default，自然default只能有一个值，所以一个文件内不能有多个export default。