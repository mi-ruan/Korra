import {connect} from 'react-redux';
import MainIndex from './main_index';
import {logout} from '../../actions/session_actions';

const mapStateToProps = state => {
  return {user: state.session.currentUser};
};

const mapDispatchToProps = dispatch => {
  return {logout: (() => dispatch(logout()))};
};

export default connect(mapStateToProps, mapDispatchToProps)(MainIndex);
