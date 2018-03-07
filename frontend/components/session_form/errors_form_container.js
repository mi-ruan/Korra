import {connect} from 'react-redux';
import ErrorsForm from './errors_form';

const mapStateToProps = state => {

  return {
    errors: state.errors,
  };
};

export default connect(mapStateToProps, null)(ErrorsForm);
