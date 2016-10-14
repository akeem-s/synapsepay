import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js'

export class UserData extends React.Component{
   constructor(props){
     super(props)
   }

   filterBy(e){
     let val = e.target.value

     if(val == 'name'){
       alert(e.target.value)
     }
     else if ('email') {
       alert(e.target.value)
     }
     else if ('phoneNumber') {
       alert(e.target.value)
     }
     else if ('messengerType') {
       alert(e.target.value)
     }
     else if ('dateJoined') {
       alert(e.target.value)
     }
     else if ('extraSecurity') {
       alert(e.target.value)
     }
     else if ('isBusiness') {
       alert(e.target.value)
     }
     else if ('permissionType') {
       alert(e.target.value)
     }
   }

   render(){
     return(
       <div className="userDataComponent" >
         <h1> UserData </h1>

         <form className="dataFilterForm" >
           <label>Filter By: </label>
           <select name="filter" onChange={this.filterBy.bind(this)} >
             <option value="name">name</option>
             <option value="email">Email</option>
             <option value="phoneNumber">Phone</option>
             <option value="idStatus">ID Status</option>
             <option value="dateJoined">Date Joined</option>
             <option value="extraSecurity">Extra Security</option>
             <option value="isBusiness">Is Business</option>
             <option value="permissionType">Permission Type</option>
           </select>
         </form>
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
