import React from "react";
import { Col } from "../helpers/bootstrap.jsx";

class ModalHeader extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: "Thank You!",
  }

  render() {
    return (
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          <span className="sr-only">Close</span>
        </button>
        <h4 className="modal-title lead">{this.props.title}</h4>
      </div>
    );
  }
}

class ModalFooter extends React.Component {

  static propTypes = {
    buttonText: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    buttonText: "Close",
  }

  render() {
    return (
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary btn-block btn-ghost">{this.props.buttonText}</button>
      </div>
    );
  }
}


export class AlertModal extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    buttonText: React.PropTypes.string.isRequired,
    modalId: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func,
  }

  static defaultProps = {
    title: "Thank You",
    buttonText: "Close",
    modalId: "signup-modal",
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) { this.props.onSubmit(this.state); }
  }

  render() {
    const modalId = this.props.modalId;
    return (
      <div>
        <div className="modal fade neal-signup-modal" key={modalId} id={modalId}
        tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <ModalHeader title={this.props.title}/>
              <form className="form-vertical" onSubmit={this.handleSubmit}>
              <div className="modal-body">
                <p>Thank you for registering! You will receive a confirmation email shortly.</p>
                <p>We are looking forward to see you at the Reackathon!</p>
                <p>Till then connect with fellow developers on our facebook group, organise your team and brainstorm your ideas!</p>
              </div>
              <ModalFooter buttonText={this.props.buttonText} />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
