import {connect} from 'react-redux';
import ActionForm from './answer_form';
import {createAnswer} from '../../actions/answer_actions';
import {closeDropDownForm} from '../../actions/drop_down_form_actions';
import {fetchQuestions} from '../../actions/question_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    user: state.entities.users[state.session],
    question: state.entities.questions[ownProps.questionId],
    answer: {
      body: "",
      question_id: ownProps.questionId,
      user_id: state.session
    },
    formType: 'createForm',
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    submitAction: (answer, questionId) => dispatch(createAnswer(answer, questionId)),
    fetchQuestions: () => dispatch(fetchQuestions()),
    closeDropDownForm: () => dispatch(closeDropDownForm()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ActionForm);
