import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addUsername = this.addUsername.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field){
    return (e) => this.setState({[field]: e.target.value});
  }

  addUsername() {
    if(this.props.formType === "Sign Up") {
      return (<label>USERNAME
        <input type="text" onChange={this.update("username")}
          className= "username"
          value={this.state.username}/>
      </label>
      );
    }
  }

  render() {
    return (
      <div className ="session-form">
        <form onSubmit={this.handleSubmit}>
          <h3 className="session-type">{this.props.formType}</h3>
          {this.addUsername()}
          <label>EMAIL
            <input type="text" onChange={this.update("email")}
              className="email"
              value={this.state.email}/>
          </label>
          <label>PASSWORD
            <input type="password" onChange={this.update("password")}
              className="password"
              value={this.state.password}/>
          </label>
          <span id={this.props.klass}>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </span>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
