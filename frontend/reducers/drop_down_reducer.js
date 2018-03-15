import { OPEN_DROP_DOWN,
  CLOSE_DROP_DOWN } from '../actions/drop_down_actions';

const defaultState = {
  type: null,
};

export default function dropDownReducer(state = defaultState, action) {
  switch (action.type) {
    case OPEN_DROP_DOWN:
      return Object.assign({},
        {type: action.dropDown});
    case CLOSE_DROP_DOWN:
      return defaultState;
    default:
      return state;
  }
}
