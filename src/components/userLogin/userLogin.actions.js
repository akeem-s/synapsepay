const CLIENT_ID = "f1b94439-fa16-49f2-8a4d-b67c7574a43c"
const CLIENT_SECRET = "85f1b65e-74fa-4aee-8330-b2ccb2c54f9e"
const CLIENT_ID_SECRET = "f1b94439-fa16-49f2-8a4d-b67c7574a43c|85f1b65e-74fa-4aee-8330-b2ccb2c54f9e"
const IP_ADDRESS = "2604:2000:f0c1:c200:408b:ead5:16c8:37d9"
const X_SP_USER = "57ff87b786c2730e00d31cbc|2672593661"

export function createOauth(input){
  return function(dispatch){
    return new Promise(function(resolve, reject){

      fetch('https://sandbox.synapsepay.com/api/3/users', {
        "mode": 'no-cors',
        "Content-Type": "application/json",
        "method": 'POST',
        "headers": {
          "X-SP-GATEWAY": "f1b94439-fa16-49f2-8a4d-b67c7574a43c|85f1b65e-74fa-4aee-8330-b2ccb2c54f9e",
          "X-SP-USER-IP": "2604:2000:f0c1:c200:408b:ead5:16c8:37d9",
          "X-SP-USER": "|asgFw3Qx3oYtQqPxBpzt"
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

export function createUser(){
  return function(dispatch){
    return new Promise(function(resolve, reject){

      fetch('https://sandbox.synapsepay.com/api/3/users', {
        "mode": 'no-cors',
        "Content-Type": "application/json",
        "method": 'POST',
        "headers": {
          "X-SP-GATEWAY": "f1b94439-fa16-49f2-8a4d-b67c7574a43c|85f1b65e-74fa-4aee-8330-b2ccb2c54f9e",
          "X-SP-USER-IP": "2604:2000:f0c1:c200:408b:ead5:16c8:37d9"
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
        ],
        "extra": {
          "supp_id": "5303f4ddb4e7b810bf000173",
          "note": null,
          "is_business": false,
          "cip_tag":1
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

export function getAllUsers(){
  return function(dispatch){
    return new Promise(function(resolve, reject){

      fetch('https://sandbox.synapsepay.com/api/3/users', {
        "mode": 'no-cors',
        "Content-Type": "application/json",
        "method": 'POST',
        "headers": {
          "X-SP-GATEWAY": "f1b94439-fa16-49f2-8a4d-b67c7574a43c|85f1b65e-74fa-4aee-8330-b2ccb2c54f9e",
          "X-SP-USER-IP": "2604:2000:f0c1:c200:408b:ead5:16c8:37d9",
          "X-SP-USER": "|e716990e50b67a1177736960b6357524b22090ccab093d068b3d7a18dbde3f4c"
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
