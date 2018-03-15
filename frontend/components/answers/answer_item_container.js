import {connect} from 'react-redux';
import AnswerItem from './answer_item';
import {openDropDownForm} from '../../actions/drop_down_form_actions';
import {fetchQuestions, fetchQuestion} from '../../actions/question_actions';
import {deleteAnswer} from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {

  const answer = state.entities.answers[ownProps.answerId] || {};
  return ({
      users: Object.assign({}, state.entities.users),
      currentUser: state.entities.users[state.session.id],
      question: state.entities.questions[answer.question_id],
      answer: answer,
      dropDownQuestionId: state.ui.dropDownForm.questionId || null,
      dropDownAnswerId: state.ui.dropDownForm.answerId || null,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    deleteAnswer: (id) => dispatch(deleteAnswer(id)),
    openDropDownForm: (type, questionId, answerId) => dispatch(openDropDownForm(type,questionId, answerId)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerItem);
