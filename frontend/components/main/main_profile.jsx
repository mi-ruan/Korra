import React from 'react';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';


class MainProfile extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className = "header-profile">
        <div>{this.props.currentUser.username}</div>
        <button className="logout-button"
          onClick={() => this.props.logout()}>Log Out</button>
      </div>
    );
  }
};

export default MainProfile;
