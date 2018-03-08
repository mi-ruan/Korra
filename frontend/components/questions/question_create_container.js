import {connect} from 'react-redux';
import QuestionCreate from './question_create';
import {createQuestion} from '../../actions/question_actions';

const mapStateToProps = state => {
  return {
    question: {
      title: "",
      user_id: state.session,
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createQuestion: (question) => dispatch(createQuestion(question)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCreate);
