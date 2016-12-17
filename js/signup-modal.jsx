import React from "react";

class ModalHeader extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    title: "Register",
  };

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
  };

  static defaultProps = {
    buttonText: "Register",
  };

  render() {
    return (
      <div className="modal-footer">
        <button type="submit" className="btn btn-primary btn-block btn-dark">{this.props.buttonText}</button>
      </div>
    );
  }
}


export class SignupModal extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired,
    buttonText: React.PropTypes.string.isRequired,
    modalId: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func,
  };

  static defaultProps = {
    title: "Register for the Reackathon",
    buttonText: "Register",
    modalId: "signup-modal",
  };

  state = {
    members: [
      {
        fullname: null,
        email: null,
        phone: null,
        position: null,
        experience: null,
        groupname: null,
        idea: null,
        facebookemail: null,
        comment: null,
        leader: true
      }
    ]
  };

  handleChange = (e) => {
    const membs = this.state.members;
    membs[e.target.dataset.member][`${e.target.name}`] = e.target.value;
    this.setState({ members: membs });
  };

  hasHtml5Validation = () => {
    return typeof document.createElement('input').checkValidity === 'function';
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.hasHtml5Validation()) {
      if (!e.target.checkValidity()) {
        e.preventDefault();
        document.getElementById('errorMessageDiv').style.display = 'block';
        document.getElementById('errorMessageDiv').className = 'blink';
        setTimeout(function(){
          document.getElementById('errorMessageDiv').className = '';
        }, 3000);
      } else {
        document.getElementById('errorMessageDiv').style.display = 'none';
        if (this.props.onSubmit) { this.props.onSubmit(this.state); }
        $('#signup-modal').modal('toggle');
      }
    }
  }

  addMember = (e) => {
    e.preventDefault();
    const membs = this.state.members;
    membs[membs.length] = {
      fullname: null,
      email: null,
      phone: null,
      position: null,
      experience: null,
      groupname: null,
      idea: null,
      facebookemail: null,
      comment: null,
      leader: false
    };
    this.setState({ members: membs });
  }

  removeMember = (e, index) => {
    e.preventDefault();
    const membs = this.state.members;
    membs.splice(index, 1);
    this.setState({ members: membs });
  }

  renderBody = () => {
    if (this.props.children) return this.props.children;
    const items = this.state.members.map((mem, index) => {
      if (index !== 0){
        return(
          <div key={index}>
            <p className="modal-sub-title2">Team Member {index+1}
              <a className="btn btn-text" onClick={(e) => this.removeMember(e, index)}>Remove team member {index+1}</a>
            </p>
            <span className="form-group-first">
              <SignupModal.Input name="fullname" data-member={index} label="Full Name" value={this.state.members[index].name} placeholder={`Enter the full name of team member ${index+1}...`} required={true}/>
            </span>
            <SignupModal.Input type="email" data-member={index} name="email" label="Email" value={this.state.members[index].email} placeholder={`Enter the email address of team member ${index+1}...`} required={true}/>
            <SignupModal.Input name="phone" data-member={index} label="Phone" value={this.state.members[index].phone} placeholder={`Enter the phone number of team member ${index+1}...`}/>
            <SignupModal.Input name="facebookemail" data-member={index} label="Facebook Email Address" placeholder={`Enter the facebook email address of team member ${index+1}...`} value={this.state.members[index].facebook} />
            <SignupModal.Select name="position" data-member='0' label="Position"
              options={[
                { label: 'Developer', value: 'developer'},
                { label: 'Frontend Developer', value: 'frontend'},
                { label: 'Backend Developer', value: 'backend'},
                { label: 'Fullstack Developer', value: 'fullstack'},
                { label: 'Designer', value: 'designer'},
                { label: 'Project Manager', value: 'projectmanager'},
                { label: 'Tester', value: 'tester'},
                { label: 'Other', value: 'other'},
              ]} />
            <SignupModal.Select name="experience" data-member='0' label="Experience" placeholder="Experience"
              options={[
                { label: 'Junior Developer', value: 'junior'},
                { label: 'Developer', value: 'developer'},
                { label: 'Senior Developer', value: 'senior'}
              ]} />
          </div>
        );
      }
    });
    return (
      <div>
        <p>Register now for free for the Reackathon on 17th & 18th December!</p>
        <p>Fill in your details, your team information and then add your team member, so you are listed as one team. You will receive a confirmation email shortly after. For questions, read the FAQ section or contact us: event@8bitrockr.com</p>
        <hr />
        <p className="modal-sub-title">Team Member 1</p>
        <span className="form-group-first">
          <SignupModal.Input name="fullname" data-member='0' label="Full Name" placeholder="Enter your full name..." required={true}/>
        </span>
        <SignupModal.Input type="email" data-member='0' name="email" label="Email" placeholder="Enter your full email address..." required={true}/>
        <SignupModal.Input name="phone" data-member='0' label="Phone" placeholder="Enter your phone number..."/>
        <SignupModal.Input name="facebookemail" data-member='0' label="Facebook Email Address" placeholder="Enter your facebook email address (used to invite you to our event group)..."/>
        <SignupModal.Select name="position" data-member='0' label="Position"
          options={[
            { label: 'Developer', value: 'developer'},
            { label: 'Frontend Developer', value: 'frontend'},
            { label: 'Backend Developer', value: 'backend'},
            { label: 'Fullstack Developer', value: 'fullstack'},
            { label: 'Designer', value: 'designer'},
            { label: 'Project Manager', value: 'projectmanager'},
            { label: 'Tester', value: 'tester'},
            { label: 'Other', value: 'other'},
          ]} />
        <SignupModal.Select name="experience" data-member='0' label="Experience" placeholder="Experience"
          options={[
            { label: 'Junior Developer', value: 'junior'},
            { label: 'Developer', value: 'developer'},
            { label: 'Senior Developer', value: 'senior'}
          ]} />
        <p className="modal-sub-title">Team Infos</p>
        <p style={{fontSize: "12px", textAlign: "center"}}>If you don't have a team yet, don't worry, just register, and you can form a team later.</p>
        <span className="form-group-first">
          <SignupModal.Input name="groupname" data-member='0' label="Team Name" placeholder="Your team name (used to identify you as a team, can be changed later)"/>
        </span>
        <SignupModal.Textarea name="idea" data-member='0' label="Team Idea" placeholder="Describe your general idea what you want to work on during the Hackathon..." rows={3}/>
        <SignupModal.Textarea name="comment" data-member='0' label="Comment" placeholder="Any further questions?" rows={3}/>
        <p className="modal-sub-title">Team Members</p>
        {items}
        <button className="btn btn-primary btn-ghost" onClick={this.addMember}>Add team member</button>
      </div>
    );
  };



  render() {
    const modalId = this.props.modalId;
    var errorStyle = {
      display: 'none',
      color: '#f00',
      textAlign: 'center'
    }
    return (
      <div>
        <div className="modal fade neal-signup-modal" key={modalId} id={modalId} tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <ModalHeader title={this.props.title}/>
              <form className="form-vertical" onSubmit={this.handleSubmit} onChange={this.handleChange}>
              <div className="modal-body">
                { this.renderBody() }
              </div>
              <div id="errorMessageDiv" style={errorStyle} className="blink" >Please fill in all the fields in the form.</div>
              <ModalFooter buttonText={this.props.buttonText} />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

SignupModal.Input = class extends React.Component {
  static propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired,
  };

  static defaultProps = {
    type: "text",
  };


  render() {
    const label = this.props.required ? `${this.props.label}*` : this.props.label;
    return (
      <div className="form-group neal-signup-modal-input">
        <label htmlFor={this.props.name}>{label}</label>
        <input type="text" className="form-control" name={this.props.name}
          placeholder={this.props.placeholder} {... this.props}/>
      </div>
    );
  }
};

SignupModal.Textarea = class extends React.Component {
  static propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className="form-group neal-signup-modal-input neal-signup-modal-textarea">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <textarea className="form-control" name={this.props.name}
          placeholder={this.props.placeholder} {... this.props}/>
      </div>
    );
  }
};

SignupModal.Select = class extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    placeholder: React.PropTypes.string,
    options: React.PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className="form-group neal-signup-modal-input neal-signup-modal-select">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <select
          className="form-control"
          id={this.props.name}
          name={this.props.name}
          placeholder={this.props.placeholder}
          {... this.props}>
          { this.props.options.map((opt, index) => (
            <option key={index} value={opt.value}>{opt.label}</option>
          )) }
        </select>
      </div>
    );
  }
};
