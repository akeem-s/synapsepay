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
     let totalUsers = this.props.userLoginReducer.userArray.length;
     let htmlArray = [];
     let row = '';
     let testTable = []
     let testRow = ''

    //  if(this.props.userLoginReducer.userArray.length > 0){
    //    for(let i = 0; i < this.props.userLoginReducer.userArray.length; i ++){
    //      row = <li key={i}> <h4>  {this.props.userLoginReducer.userArray[i].legal_names[0]}</h4> <h4> {this.props.userLoginReducer.userArray[i].logins[0].email} </h4> <h4> {this.props.userLoginReducer.userArray[i].logins[0].scope}</h4> <h4> {this.props.userLoginReducer.userArray[i]._links.self.href} </h4> <h4> {this.props.userLoginReducer.userArray[i].phone_numbers[0] }</h4> <h4> {this.props.userLoginReducer.userArray[i].doc_status.physical_doc}</h4> <h4> {this.props.userLoginReducer.userArray[i].doc_status.virtual_doc}</h4> <h4> {this.props.userLoginReducer.userArray[i].extra.date_joined}</h4> <h4> {this.props.userLoginReducer.userArray[i].extra.is_business}</h4> <h4> {this.props.userLoginReducer.userArray[i].permission}</h4> <h4> {this.props.userLoginReducer.userArray[i]._id}</h4> </li>
    //      htmlArray.push(row)
    //    }
    //  }
    //  else {
    //    htmlArray = <li key={0}></li>
    //  }

    if(this.props.userLoginReducer.userArray.length > 0){
      for(let i = 0; i < this.props.userLoginReducer.userArray.length; i ++){
        row = <li key={i} className="row"> <h4 className="cell">  {this.props.userLoginReducer.userArray[i].legal_names[0]}</h4> <h4 className="cell"> {this.props.userLoginReducer.userArray[i].logins[0].email} </h4> <h4 className="cell"> {this.props.userLoginReducer.userArray[i].logins[0].scope}</h4> <h4 className="cell"> {this.props.userLoginReducer.userArray[i].phone_numbers[0] }</h4>  <h4 className="cell"> {this.props.userLoginReducer.userArray[i].extra.date_joined}</h4> <h4 className="cell"> {this.props.userLoginReducer.userArray[i].permission}</h4>  </li>
        htmlArray.push(row)
      }


    }
    else {
      htmlArray = <li key={0}></li>
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

         <ul className="userDataUl">
           <li className="row"> <h4 className="cell" >Name</h4> <h4 className="cell">Email</h4> <h4 className="cell">Scope</h4>  <h4 className="cell">Phone</h4> <h4 className="cell">Date Joined</h4> <h4 className="cell">Business?</h4>   </li>
           <br></br>
           {htmlArray}
         </ul>
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
