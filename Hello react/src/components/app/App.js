import React from 'react'
import CommentAdd from '../CommentAdd' //引入文件夹，默认加载文件夹中的index.js文件，
import CommentList from '../CommentList'
// import CommentItem from '../CommentItem'
import '../../index.css'
//组件名CommentAdd的首字母一定要大写，否则无法渲染，并且不会有error提示，你找也找不到bug，找了好长时间。
//另外，引入模块时，路径要正确，注意路径名称的大小写，如CommentAdd和commentAdd。真要注意这些细节，否则浪费时间。

class App extends React.Component{
    constructor(props){
        super(props)
            this.state={
            comments:[
                {
                    username: "yang",
                    userComment: "喜欢react"
                },
                {
                    username: "jian",
                    userComment: "不喜欢react"
                },
            ]
        }
    }
    addComment = (comment)=>{
        const comments= this.state.comments//首先把state中的数组提取出来
        comments.unshift(comment)//修改后,放到setState中去。
        //其实不是用unshift改变了state。不能直接用this.state.comments方式赋值。

        //问题喜欢在setState后面加等号。
        this.setState({
            // comments 变量表示一个新的数组，在setState直接写变量就行，但直接放入数组就不行，需要写名值对。
            //setState 是异步的. 组件在还没有渲染之前, this.setState 还没有被调用.
            comments
        })
    }

  render() {
      return (
        //选中区域，按ctrl+R 快捷键可以将区域内的class替换成className。可以花时间了解webstorm2017
        <div>
            <header className="site-header jumbotron">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1>请发表对React的评论</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container">
                <CommentAdd addComment={this.addComment}/>
                <CommentList comments={this.state.comments}/>
            </div>
        </div>
    );
  }
}

export default App
