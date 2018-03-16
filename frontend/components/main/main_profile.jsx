import React from 'react';

const MainProfile = (props) => {

  return (
    <div className='main-drop-down'>
      <button className="logout-button"
        onClick={() => props.logout()}>Log Out</button>
    </div>
  );
};

export default MainProfile;
