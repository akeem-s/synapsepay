import _ from 'underscore';

const CLIENT_ID_SECRET = "f1b94439-fa16-49f2-8a4d-b67c7574a43c|85f1b65e-74fa-4aee-8330-b2ccb2c54f9e"
const IP_ADDRESS = "24.5.43.201"
const X_SP_USER = "57ff87b786c2730e00d31cbc|2672593661"
export const CREATE_USER_FORM_SUBMIT = 'CREATE_USER_FORM_SUBMIT'
export const USER_NAME_CHANGE = 'USER_NAME_CHANGE'
export const USER_EMAIL_CHANGE = 'USER_EMAIL_CHANGE'
export const USER_PHONE_CHANGE = 'USER_PHONE_CHANGE'
export const SAVE_USERS_TO_STATE = 'SAVE_USERS_TO_STATE'
export const FILTER_BY_NAME = 'FILTER_BY_NAME'
export const FILTER_BY_EMAIL = 'FILTER_BY_EMAIL'
export const FILTER_BY_PHONE = 'FILTER_BY_PHONE'
export const FILTER_BY_ID = 'FILTER_BY_ID'
export const FILTER_BY_DATE_JOINED = 'FILTER_BY_DATE_JOINED'
export const FILTER_BY_EXTRA_SECURITY_STATUS = 'FILTER_BY_EXTRA_SECURITY_STATUS'
export const FILTER_BY_BUSINESS_STATUS = 'FILTER_BY_BUSINESS_STATUS'
export const FILTER_BY_PERMISSION_TYPE = 'FILTER_BY_PERMISSION_TYPE'
export const FILTER_BY_SCOPE = 'FILTER_BY_SCOPE'

export function filterByName(input){
  // _.sortBy(arr, function(o) { return o.start.dateTime; })
  var sortedArray = []
  sortedArray = _.sortBy(input, function(userArray) { return userArray.legal_names })
  return{
    type: FILTER_BY_NAME,
    userArray: sortedArray
  }
}

export function filterByEmail(input){
  var sortedArray = []
  sortedArray = _.sortBy(input, function(userArray) { return userArray.logins[0].email })
  return{
    type: FILTER_BY_EMAIL,
    userArray: sortedArray
  }
}

export function filterByPhone(input){
  var sortedArray = []
  sortedArray = _.sortBy(input, function(userArray) { return userArray.phone_numbers[0] })

  return{
    type: FILTER_BY_PHONE,
    userArray: sortedArray
  }
}

export function filterByDateJoined(input){
  var sortedArray = []
  sortedArray = _.sortBy(input, function(userArray) { return userArray.extra.date_joined })

  return{
    type: FILTER_BY_DATE_JOINED,
    userArray: sortedArray
  }
}

export function filterByBusinessStatus(input){
  var sortedArray = []
  sortedArray = _.sortBy(input, function(userArray) { return userArray.extra.is_business })

  return{
    type: FILTER_BY_BUSINESS_STATUS,
    userArray: sortedArray
  }
}

export function filterByPermissionType(input){
  var sortedArray = []
  sortedArray = _.sortBy(input, function(userArray) { return userArray.permission })

  return{
    type: FILTER_BY_PERMISSION_TYPE,
    userArray: sortedArray
  }
}

export function userNameChange(input){
  return{
    type: USER_NAME_CHANGE,
    userName: input
  }
}

export function userEmailChange(input){
  return{
    type: USER_EMAIL_CHANGE,
    userEmail: input
  }
}

export function userPhoneChange(input){
  return{
    type: USER_PHONE_CHANGE,
    userPhone: input
  }
}

export function saveUsersToState(userArray){
  return{
    type: SAVE_USERS_TO_STATE,
    userArray: userArray
  }
}

export function createUser(name, email, phone){
  return function(dispatch){
    return new Promise(function(resolve, reject){
      fetch('https://sandbox.synapsepay.com/api/3/users', {
        "async": true,
        "crossDomain": true,
        headers: new Headers({
          "content-type": "application/json",
          "x-sp-gateway": "id-f1b94439-fa16-49f2-8a4d-b67c7574a43c|secret-85f1b65e-74fa-4aee-8330-b2ccb2c54f9e",
          "x-sp-user-ip": "24.5.43.201",
          "x-sp-user": "\\\"\\\"",
          "cache-control": "no-cache"
        }),
        "processData": false,
        method: 'POST',
        "body": JSON.stringify({
          "logins": [
            {
              "email": email
            }
          ],
          "phone_numbers": [
            phone
          ],
          "legal_names": [
            name
          ],
          "extra": {
            "supp_id": "5303f4ddb4e7b810bf000173",
            "note": null,
            "is_business": false,
            "cip_tag":1
          }
        })
      }).then((response) => {
        if(response.status >= 400){
          reject(new Error('Bad response from server!'));
        }
        response.json().then((body)=>{
          resolve(body)
        }, (err)=>{
          reject(err)
        });
      }, (err) => {
        reject(err)
      });
    });
  }
}

export function getAllUsers(){
  return function(dispatch){
    return new Promise(function(resolve, reject){

      fetch('https://sandbox.synapsepay.com/api/3/users', {
        "method": 'GET',
        "headers": {
          "content-type": "application/json",
          "x-sp-gateway": "id-f1b94439-fa16-49f2-8a4d-b67c7574a43c|secret-85f1b65e-74fa-4aee-8330-b2ccb2c54f9e",
          "x-sp-user-ip": "24.5.43.201",
          "x-sp-user": "\\\"\\\"",
          "cache-control": "no-cache"
        }
      }).then((response) => {
        if(response.status >= 400){
          reject(new Error('Bad response from server!'));
        }
        response.json().then((body)=>{
          resolve(body)
        }, (err)=>{
          reject(err)
        });
      }, (err) => {
        reject(err)
      });
    });
  }
}
