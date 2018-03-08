export const getSelectedUser = ({entities}, userId) => {
  const nullUser = {
    id: null,
    username: '',
    email: ''
  };
  return entities.users[userId] || nullUser;
};
