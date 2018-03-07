import React from 'react';

class DemoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: "demo",
      password: "123456",
      email: "demo"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  render() {
    return (
      <div className="session-demo">
        <button className="demo-button" onClick={this.handleSubmit}>Demo</button>
      </div>
    );
  }

}

export default DemoForm;
