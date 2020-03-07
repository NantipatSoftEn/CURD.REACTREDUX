import React, { Component } from "react";
import { connect } from "react-redux";
import { Toast, ToastBody, ToastHeader, Button, ButtonGroup } from "reactstrap";
import { delComment } from "../actions";
const Comment = ({comment, dispatch}) => (

  <div className="p-3 my-2 rounded">
    <Toast>
      <ToastHeader>
        {comment.name}
      </ToastHeader>
      <ToastBody>{comment.message}</ToastBody>
      <ButtonGroup>

        <Button color="danger" onClick={()=> dispatch(delComment(comment.id))}>Delete</Button>
        <Button color="warning">Edit</Button>
      </ButtonGroup>
    </Toast>
  </div>
);

// class Comment extends Component {
//   render() {
//     return (
//       <div className="p-3 my-2 rounded">
//         <Toast>
//           <ToastHeader>{this.props.comment.name}</ToastHeader>
//           <ToastBody>{this.props.comment.message}</ToastBody>
//           <ButtonGroup>
//             <Button
//               color="danger"
//               //   onClick={() => this.props.dispatch(delComment(id))}
//             >
//               Delete
//             </Button>
//             <Button color="warning">Edit</Button>
//           </ButtonGroup>
//         </Toast>
//       </div>
//     );
//   }
// }
export default connect()(Comment);
