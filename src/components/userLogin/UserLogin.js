import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

export class UserLogin extends React.Component{
   constructor(props){
     super(props)
   }

   render(){
     return(
       <div className="userLoginContainer" >
         <h1> componentName </h1>
       </div>
     )
   }
}
export default UserLogin;
