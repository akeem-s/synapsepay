import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js'

export class UserData extends React.Component{
   constructor(props){
     super(props)
   }

   render(){
     return(
       <div className="userDataComponent" >
         <h1> UserData </h1>
       </div>
     )
   }
}

function mapStateToProps(state) {
  const { userDataReducer } = state

  return {
	  userDataReducer
  }
}

export default connect(mapStateToProps)(UserData);
