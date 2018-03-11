import {connect} from 'react-redux';
import AnswerItem from './answer_item';
import {openDropDownForm} from '../../actions/drop_down_form_actions';
import {deleteAnswer} from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => {
  const answer = state.entities.answers[ownProps.answer.id] || {};
  return ({
      users: Object.assign({}, state.entities.users),
      currentUser: state.entities.users[state.session.id],
      answer: answer,
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    deleteAnswer: (id) => dispatch(deleteAnswer(id)),
    openDropDownForm: (type, id) => dispatch(openDropDownForm(type,id)),
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerItem);
