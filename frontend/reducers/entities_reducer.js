import {combineReducers} from 'redux';
import questionReducer from './questions_reducer';
import userReducer from './users_reducer';

const entitiesReducer = combineReducers({
  questions: questionReducer,
  users: userReducer,
});

export default entitiesReducer;
