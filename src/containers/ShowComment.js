import React, { Component } from "react";
import { connect } from "react-redux";
import Comment from "../components/Comment";
import { delComment } from "../actions/";
import { EditForm } from "../components/EditForm";
class ShowComment extends Component {
  render() {
    return (
      <div>
        <h3>Show AllComment</h3>

        {this.props.comments.commentReducer.map(comment => (
          <div key={comment.id}>
            {comment.editing ? (
              <EditForm
                comment={comment}
                key={comment.id}
                dispatch={this.props.dispatch}
              />
            ) : (
              <Comment
                key={comment.id}
                comment={comment}
                dispatch={this.props.dispatch}
              />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { comments: state };
};

export default connect(mapStateToProps)(ShowComment);
