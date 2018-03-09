import {combineReducers} from 'redux';
import questionReducer from './questions_reducer';
import userReducer from './users_reducer';
import answerReducer from './answers_reducer';

const entitiesReducer = combineReducers({
  questions: questionReducer,
  users: userReducer,
  answers: answerReducer,
});

export default entitiesReducer;
