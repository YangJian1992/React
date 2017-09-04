import React from 'react'
//import {变量名} from

class CommentAdd extends React.Component{
    constructor(props){
        super(props)
        this.addItem = this.addItem.bind(this)

    }
    addItem = ()=>{
        //当用户名和评论内容都不为空时，才能提交。使用trim(),使空白串和空串均为空串，逻辑结果为false
        const username =  this.refs.input.value.trim()
        const userComment = this.refs.textarea.value.trim()
        if(username&&userComment){
            const comment ={
                username:  this.refs.input.value,
                userComment: this.refs.textarea.value
            }
            //在addItem函数中执行App中的函数addComment，并把参数传进去
            this.props.addComment(comment)
            this.refs.input.value = ''
            this.refs.textarea.value = ''
        }

    }
    render(){
        //html中的input没有结束标签，转化成jsxj时，要记得修改。
        return(
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" className="form-control" placeholder="用户名"
                        ref = 'input'/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" rows="6" placeholder="评论内容"
                       ref="textarea"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right"
                            onClick={this.addItem}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
CommentAdd.propTypes={
    addComment: React.PropTypes.func.isRequired
}
export  default CommentAdd
//暴露组件
//export{变量名} 这里的大括号是不能省略的，否则就是输出变量所代表的值，
// 但是加default就可以了，相当于把变量的值赋给新变量default，
// 其实此处相当于起了一个系统默认的变量名default，自然default只能有一个值，所以一个文件内不能有多个export default。