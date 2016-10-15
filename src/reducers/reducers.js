import {combineReducers} from 'redux';
import {userLoginReducer} from '../components/userLogin/userLogin.reducers.js';
import {userDataReducer} from '../components/userData/userData.reducers.js';

const rootReducer = combineReducers({
  userLoginReducer,
  userDataReducer
})

export default rootReducer;
