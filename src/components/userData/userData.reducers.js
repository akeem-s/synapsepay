import * as actions from './userData.actions.js';

export function userDataReducer(state = {}, action){
  switch(action.type){
    case 'FILTER_BY_NAME':
      return Object.assign({}, state, {
        filterType: "name"
      })

    case 'FILTER_BY_EMAIL':
      return Object.assign({}, state, {
        filterType: "email"
      })

    case 'FILTER_BY_PHONE':
      return Object.assign({}, state, {
        filterType: "phone"
      })

    case 'FILTER_BY_ID':
      return Object.assign({}, state, {
        filterType: "id"
      })

    case 'FILTER_BY_DATE_JOINED':
      return Object.assign({}, state, {
        filterType: "dateJoined"
      })

    case 'FILTER_BY_EXTRA_SECURITY_STATUS':
      return Object.assign({}, state, {
        filterType: "securityStatus"
      })

    case 'FILTER_BY_BUSINESS_STATUS':
      return Object.assign({}, state, {
        filterType: "businessStatus"
      })

    case 'FILTER_BY_PERMISSION_TYPE':
      return Object.assign({}, state, {
        filterType: "permissionType"
      })

      default: return state
  }
}

export default userDataReducer;
