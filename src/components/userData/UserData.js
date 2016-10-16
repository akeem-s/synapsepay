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
       dispatch(actions.userDataActions.filterByName())
     }
     else if (val == 'email') {
       dispatch(actions.userDataActions.filterByEmail())
     }
     else if (val == 'phoneNumber') {
       dispatch(actions.userDataActions.filterByPhone())
     }
     else if (val == 'idStatus') {
       dispatch(actions.userDataActions.filterById())
     }
     else if (val == 'dateJoined') {
       dispatch(actions.userDataActions.filterByDateJoined())
     }
     else if (val == 'extraSecurity') {
       dispatch(actions.userDataActions.filterByExtraSecurityStatus())
     }
     else if (val == 'isBusiness') {
       dispatch(actions.userDataActions.filterByBusinessStatus())
     }
     else if (val == 'permissionType') {
       dispatch(actions.userDataActions.filterByPermissionType())
     }

     else if(val == 'scope'){
       dispatch(actions.userDataActions.filterByScope())
     }
   }

   render(){
     const { userLoginReducer } = this.props

     let userArray = [];
     let totalUsers = '';
     let totalBusinesses = '';

     if(this.props.userLoginReducer.userArray.length > 0){
       for(let i = 0; i < this.props.userLoginReducer.userArray.length; i ++){
         <tr>
           <td> this.props.userLoginReducer.userArray[i].legal_names[0]</td>
           <td> this.props.userLoginReducer.userArray[i].logins[0].email</td>
           <td> this.props.userLoginReducer.userArray[i].logins[0].scope</td>
           <td> this.props.userLoginReducer.userArray[i]._links.self.href</td>
           <td> this.props.userLoginReducer.userArray[i].doc_status.physical_doc</td>
           <td> this.props.userLoginReducer.userArray[i].doc_status.virtual_doc</td>
           <td> this.props.userLoginReducer.userArray[i].extra.date_joined</td>
           <td> this.props.userLoginReducer.userArray[i].</td>
           <td> this.props.userLoginReducer.userArray[i]._id</td>
         </tr>
       }
     }

     return(
       <div className="userDataComponent" >

         <div className="userStats">
           <tr>
             <th>Total Users</th>
             <th>Total Businesses</th>
           </tr>
           <tr>
             <td>total users</td>
             <td>total businesses</td>
           </tr>
         </div>

         <form className="dataFilterForm" >
           <br/>
           <br/>
           <label>Filter By: </label>
           <select name="filter" onChange={this.filterBy.bind(this)} >
             <option value="name">name</option>
             <option value="email">Email</option>
             <option value="email">Scope</option>
             <option value="phoneNumber">Phone</option>
             <option value="idStatus">ID Status</option>
             <option value="dateJoined">Date Joined</option>
             <option value="extraSecurity">Extra Security</option>
             <option value="isBusiness">Is Business</option>
             <option value="permissionType">Permission Type</option>
           </select>
         </form>

         <div className="userDataTable">
           <table>
             <tr className="tableHeaders">
               <th>Name</th>
               <th>Email</th>
               <th>Scope</th>
               <th>Phone</th>
               <th>ID Status</th>
               <th>Date Joined</th>
               <th>Extra Security</th>
               <th>Business?</th>
               <th>Permission Type</th>
             </tr>



           </table>
         </div>
       </div>
     )
   }
}

function mapStateToProps(state) {
  const { userDataReducer, userLoginReducer } = state

  return {
	  userDataReducer,
    userLoginReducer
  }
}

export default connect(mapStateToProps)(UserData);
