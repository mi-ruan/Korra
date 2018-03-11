import {connect} from 'react-redux';
import ActionForm from './answer_form';
import {createAnswer} from '../../actions/answer_actions';
import {openDropDownForm,
  closeDropDownForm} from '../../actions/drop_down_form_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    user: state.entities.users[state.session],
    question: state.entities.questions[ownProps.question.id],
    answer: {
      body: "",
      question_id: ownProps.question.id,
      user_id: state.session
    },
    formType: 'createForm',
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    submitAction: (answer, questionId) => dispatch(createAnswer(answer, questionId)),
    openDropDownForm: (type, id) => dispatch(openDropDownForm(type,id)),
    closeDropDownForm: () => dispatch(closeDropDownForm()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionForm);
