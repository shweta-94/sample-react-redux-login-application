let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {

    case 'USER_LOGIN_SUCCESS':
      return {
        loggedIn: true,
        user: action.user
      };
    case 'USERS_LOGIN_FAILURE':
      return {};
    case 'USER_LOGIN_LOGOUT':
      return {};
    default:
      return state
  }
}