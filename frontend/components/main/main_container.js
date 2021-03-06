import {connect} from 'react-redux';
import MainIndex from './main_index';
import {logout} from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    users: state.entities.users || {},
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {logout: (() => dispatch(logout()))};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainIndex);
