import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class UserLogin extends React.Component{
   constructor(props){
     super(props)
   }

   handleSubmit(){
     alert("handleSubmit")
   }

   render(){
     return(
       <div className="userLoginContainer" >
         <h1> User Login </h1>

          <form className="userLoginForm" onSubmit={this.handleSubmit.bind(this)}>
            <label> UserName: <input type="text" name="username" placeholder="User Name" /> </label>
            <label> Password: <input type="password" name="password" placeholder="Password" /> </label>
            <input type="submit" />
          </form>
       </div>
     )
   }
}

export default UserLogin;
