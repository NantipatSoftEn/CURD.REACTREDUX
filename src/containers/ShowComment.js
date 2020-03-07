import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "../components/Comment";
import {delComment} from '../actions/'
class ShowComment extends Component {
  render() {
    return (
      <div>
        <h3>Show AllComment</h3>
    
        {this.props.comments.commentReducer.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            dispatch={this.props.dispatch}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { comments: state };
};

export default connect(mapStateToProps)(ShowComment);
