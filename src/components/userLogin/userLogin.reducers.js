import * as actions from './userLogin.actions.js';

export function userLoginReducer(state = {userArray: []}, action){
  switch(action.type){
    case 'FILTER_BY_NAME':
      return Object.assign({}, state, {
        filterType: "name",
        userArray: action.userArray
      })

    case 'FILTER_BY_EMAIL':
      return Object.assign({}, state, {
        filterType: "email",
        userArray: action.userArray
      })

    case 'FILTER_BY_PHONE':
      return Object.assign({}, state, {
        filterType: "phone",
        userArray: action.userArray
      })

    case 'FILTER_BY_DATE_JOINED':
      return Object.assign({}, state, {
        filterType: "dateJoined",
        userArray: action.userArray
      })

    case 'FILTER_BY_BUSINESS_STATUS':
      return Object.assign({}, state, {
        filterType: "businessStatus",
        userArray: action.userArray
      })

    case 'FILTER_BY_PERMISSION_TYPE':
      return Object.assign({}, state, {
        filterType: "permissionType",
        userArray: action.userArray
      })

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
