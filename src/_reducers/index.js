import { combineReducers } from 'redux';

import { users } from './users.reducer';
import { authentication } from './authentication.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  users,
  authentication,
  alert
});

export default rootReducer;