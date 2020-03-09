import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import {updateComment} from '../actions/'
export class EditForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const newname = this.getName.value;
    const newmessage = this.getMessage.value;
    const data = {
        newname,
        newmessage
    };
    this.props.dispatch(updateComment(this.props.comment.id,data))
  };
  render() {
    return (
      <div>
        <h3>Add Comment</h3>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input type="text" innerRef={node => (this.getName = node)} 
              defaultValue={this.props.comment.name}/>
            </Col>
          </FormGroup>
          <FormGroup>
            <Label for="" sm={2}>
              Mesage
            </Label>
            <Col sm={10}>
              <Input
                type="textarea"
                innerRef={node => (this.getMessage = node)}
                defaultValue={this.props.comment.message}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Button>Update</Button>
          </FormGroup>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
