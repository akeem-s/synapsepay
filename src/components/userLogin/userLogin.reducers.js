import * as actions from './userLogin.actions.js';

export function userLoginReducer(state = {}, action){
  switch(action.type){
    // case 'CREATE_USER_FORM_SUBMIT':
    //   return Object.assign({}, state, {
    //     name: name,
    //     phone: phone,
    //     email: email
    //   })

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

      default: return state
  }
}

export default userLoginReducer;
