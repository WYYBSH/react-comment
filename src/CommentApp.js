import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }

    render() {
        return (
            <div className="wrapper">
                <CommentInput
                    onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments}/>
            </div>

        )
    }
    handleSubmitComment(comment) {
        //console.log(comment)
        this.state.comments.push(comment)
        console.log(this.state.comments)
        this.setState({
            comments: this.state.comments
        })
    }
}

export default CommentApp