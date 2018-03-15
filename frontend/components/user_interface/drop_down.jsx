import React from 'react';
import { closeDropDown } from '../../actions/drop_down_actions';
import { connect } from 'react-redux';
import ProfileListContainer from '../main/main_profile_container';

function DropDown({dropDown, closeDropDown}) {
  if (!dropDown) {
    return null;
  }
  let component;
  switch (dropDown) {
    case 'profile':
      component = <ProfileListContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="dropDown-background" onClick={closeDropDown}>
      <div className="dropDown-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    dropDown: state.ui.dropDown.type,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeDropDown: () => dispatch(closeDropDown())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
