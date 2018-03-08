export const getselectedUser = (state, id) => {
  id = state.questions[id].user_id;
  const nullUser = {
    id: null,
    username: '',
    email: ''
  };
  return state.users[id] || nullUser;
};
