import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js'

export class UserData extends React.Component{
   constructor(props){
     super(props)
   }

   filterBy(e){
     const { dispatch, userDataReducer } = this.props

     let val = e.target.value

     if(val == 'name'){
       dispatch(actions.userDataActions.filterByName)
     }
     else if ('email') {
       dispatch(actions.userDataActions.filterByEmail)
     }
     else if ('phoneNumber') {
       dispatch(actions.userDataActions.filterByPhone)
     }
     else if ('idStatus') {
       dispatch(actions.userDataActions.filterById)
     }
     else if ('dateJoined') {
       dispatch(actions.userDataActions.filterByDateJoined)
     }
     else if ('extraSecurity') {
       dispatch(actions.userDataActions.filterByExtraSecurityStatus)
     }
     else if ('isBusiness') {
       dispatch(actions.userDataActions.filterByBusinessStatus)
     }
     else if ('permissionType') {
       dispatch(actions.userDataActions.filterByPermissionType)
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
