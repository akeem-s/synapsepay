import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class UserLogin extends React.Component{
   constructor(props){
     super(props)
   }

   render(){
     return(
       <div className="userLoginContainer" >
         <h1> User Login </h1>
          <form className="userLoginForm" action="action_page.php">
            <input type="text" value="Mickey" />
            <input type="text" name="lastname" value="Mouse" />
            <input type="submit" value="Submit" />
          </form>
       </div>
     )
   }
}
export default UserLogin;
