import {connect} from 'react-redux';
import MainProfile from './main_profile';
import {logout} from '../../actions/session_actions';
import {closeDropDown} from '../../actions/drop_down_actions';

const mapStateToProps = state => {
  return {
    users: state.entities.users || {},
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: (() => dispatch(logout())),
    closeDropDown: (() => dispatch(closeDropDown())),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainProfile);
