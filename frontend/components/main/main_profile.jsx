import React from 'react';
import Dropdown, {DropdownTrigger, DropdownContent} from 'react-simple-dropdown';


class MainProfile extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Dropdown className="main-dropdown" ref="dropdown">
        <DropdownTrigger className="header-profile" >
        {this.props.currentUser.username}</DropdownTrigger>
        <DropdownContent>
        <div className='main-drop-down'>
          <button className="logout-button"
            onClick={() => this.props.logout()}>Log Out</button>
        </div>
        </DropdownContent>
    </Dropdown>
    );
  }
};

export default MainProfile;
