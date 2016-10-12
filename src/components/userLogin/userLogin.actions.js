export const CREATE_NEW_USER = 'CREATE_NEW_USER'

export function createNewUser(username, password){
  return{
    type: CREATE_NEW_USER,
    userName: username,
    password: password
  }
}
