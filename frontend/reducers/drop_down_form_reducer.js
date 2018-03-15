import { OPEN_DROP_DOWN_FORM,
  CLOSE_DROP_DOWN_FORM } from '../actions/drop_down_form_actions';

const defaultState = {
  type: null,
  questionId: null,
  answerId: null
};

export default function dropDownFormReducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_DROP_DOWN_FORM:
      return Object.assign({},
        {type: action.dropDownForm,
        questionId: action.questionId,
        answerId: action.answerId});
    case CLOSE_DROP_DOWN_FORM:
      return defaultState;
    default:
      return state;
  }
}
