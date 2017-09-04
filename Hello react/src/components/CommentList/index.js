import React from 'react'
import CommentItem from '../CommentItem'
//import {变量名} from

class CommentList extends React.Component{
    render(){
        const {comments} = this.props //对象的解构赋值this.props是一个对象。
        //例如：var { foo, bar } = { foo: "lorem", bar: "ipsum" };这种写法要求变量名与属性名一致。
        //不一致用这种方式，var robotA = { name: "Bender" };  var { name: nameA } = robotA;

        let display = comments.length>0 ? 'none': 'block'//评论内容为空时，display变量为none。
        return(
            // h2标签中的style应该改成{{}}来表示，但是none在js表达式中是变量，所以用引号括起来。
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display: display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((item, index) => <CommentItem item={item} key={index}/>)
                    }
                </ul>
            </div>
        )
    }
}
CommentList.propTypes={
    comments: React.PropTypes.array.isRequired
}
// 约束条件

export default CommentList
//暴露组件
//export{变量名} 这里的大括号是不能省略的，否则就是输出变量所代表的值，
// 但是加default就可以了，相当于把变量的值赋给新变量default，
// 其实此处相当于起了一个系统默认的变量名default，自然default只能有一个值，所以一个文件内不能有多个export default。