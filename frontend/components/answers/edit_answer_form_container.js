import {connect} from 'react-redux';
import ActionForm from './answer_form';
import {updateAnswer} from '../../actions/answer_actions';
import {closeDropDownForm} from '../../actions/drop_down_form_actions';

const mapStateToProps = (state, ownProps) => {
  const answer = state.entities.answers[ownProps.question.id] || {};
  return({
    user: state.entities.users[state.session],
    question: state.entities.questions[ownProps.question.id],
    answer,
    formType: 'updateForm',
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    submitAction: (answer) => dispatch(updateAnswer(answer)),
    closeDropDownForm: () => dispatch(closeDropDownForm()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionForm);
