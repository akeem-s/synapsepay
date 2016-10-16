const CLIENT_ID_SECRET = "f1b94439-fa16-49f2-8a4d-b67c7574a43c|85f1b65e-74fa-4aee-8330-b2ccb2c54f9e"
const IP_ADDRESS = "24.5.43.201"
const X_SP_USER = "57ff87b786c2730e00d31cbc|2672593661"
export const CREATE_USER_FORM_SUBMIT = 'CREATE_USER_FORM_SUBMIT'
export const USER_NAME_CHANGE = 'USER_NAME_CHANGE'
export const USER_EMAIL_CHANGE = 'USER_EMAIL_CHANGE'
export const USER_PHONE_CHANGE = 'USER_PHONE_CHANGE'

// export function formSubmit(name, phone, email){
//   return{
//     type: CREATE_USER_FORM_SUBMIT,
//     name: name,
//     phone: phone,
//     email: email
//   }
// }

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

export function createUser(name, email, phone){
  return function(dispatch){
    return new Promise(function(resolve, reject){
      fetch('https://sandbox.synapsepay.com/api/3/users', {
        "async": true,
        "crossDomain": true,
        headers: new Headers({
          // "Content-Type": "application/json",
          // "X-SP-GATEWAY": "id-f1b94439-fa16-49f2-8a4d-b67c7574a43c|secret-85f1b65e-74fa-4aee-8330-b2ccb2c54f9e",
          // "X-SP-USER-IP": "24.5.43.201",
          // "X-SP-USER": ""
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
        "Content-Type": "application/json",
        "method": 'GET',
        "headers": {
          "X-SP-GATEWAY": "f1b94439-fa16-49f2-8a4d-b67c7574a43c|85f1b65e-74fa-4aee-8330-b2ccb2c54f9e",
          "X-SP-USER-IP": "2604:2000:f0c1:c200:408b:ead5:16c8:37d9",
          "X-SP-USER": ""
        },
        "logins": [
          {
            "email": "test@test.com"
          }
        ],
        "phone_numbers": [
          "9019428167"
        ],
        "legal_names": [
          "Test User"
        ]
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
