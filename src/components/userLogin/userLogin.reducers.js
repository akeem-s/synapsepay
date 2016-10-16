import * as actions from './userLogin.actions.js';

export function userLoginReducer(state = {userArray: []}, action){
  switch(action.type){
    case 'USER_NAME_CHANGE':
      return Object.assign({}, state, {
        userName: action.userName
      })

    case 'USER_EMAIL_CHANGE':
      return Object.assign({}, state, {
        userEmail: action.userEmail
      })

    case 'USER_PHONE_CHANGE':
      return Object.assign({}, state, {
        userPhone: action.userPhone
      })

    case 'SAVE_USERS_TO_STATE':
      return Object.assign({}, state, {
        userArray: action.userArray
      })

      default: return state
  }
}

export default userLoginReducer;
