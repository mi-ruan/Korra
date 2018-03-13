import {combineReducers} from 'redux';
import questionsReducer from './questions_reducer';
import usersReducer from './users_reducer';
import answersReducer from './answers_reducer';
import topicsReducer from './topics_reducer';

const entitiesReducer = combineReducers({
  questions: questionsReducer,
  users: usersReducer,
  answers: answersReducer,
  topics: topicsReducer,
});

export default entitiesReducer;
