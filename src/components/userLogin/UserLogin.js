import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js'

export class UserLogin extends React.Component{
   constructor(props){
     super(props)

     const { dispatch, userLoginReducer } = this.props

     dispatch(actions.userLoginActions.getAllUsers()).then((data) => {
       dispatch(actions.userLoginActions.saveUsersToState(data.users))
     })
   }

   handleSubmit(e){
     e.preventDefault();
     const { dispatch, userLoginReducer } = this.props

     dispatch(actions.userLoginActions.createUser(userLoginReducer.userName, userLoginReducer.userEmail, userLoginReducer.userPhone)).then((data) => {
       console.log(data)
       dispatch(actions.userLoginActions.getAllUsers()).then((response) => {
         dispatch(actions.userLoginActions.saveUsersToState(response.users))
       })
     })
     e.target.reset()
    }

    userNameChange(e){
  		const { dispatch } = this.props
  		dispatch(actions.userLoginActions.userNameChange(e.target.value))
  	}

    userEmailChange(e){
      const { dispatch } = this.props
  		dispatch(actions.userLoginActions.userEmailChange(e.target.value))
    }

    userPhoneChange(e){
      const { dispatch } = this.props
  		dispatch(actions.userLoginActions.userPhoneChange(e.target.value))
    }

    filterBy(e){
      const { dispatch, userDataReducer, userLoginReducer } = this.props

      let val = e.target.value

      if(val == 'name'){
        dispatch(actions.userLoginActions.filterByName(this.props.userLoginReducer.userArray))
      }

      else if (val == 'email') {
        dispatch(actions.userLoginActions.filterByEmail(this.props.userLoginReducer.userArray))
      }

      else if (val == 'phoneNumber') {
        dispatch(actions.userLoginActions.filterByPhone(this.props.userLoginReducer.userArray))
      }

      else if (val == 'dateJoined') {
        dispatch(actions.userLoginActions.filterByDateJoined(this.props.userLoginReducer.userArray))
      }

      else if (val == 'isBusiness') {
        dispatch(actions.userLoginActions.filterByBusinessStatus(this.props.userLoginReducer.userArray))
      }
      else if (val == 'permissionType') {
        dispatch(actions.userLoginActions.filterByPermissionType(this.props.userLoginReducer.userArray))
      }
    }

   render(){
     return(
       <div className="userLoginContainer" >
         <h1> Create User </h1>

          <form className="userLoginForm" onSubmit={this.handleSubmit.bind(this)}>
            <input className="name" type="text" name="name" placeholder="Name" onChange={this.userNameChange.bind(this)}/>
            <br/>
            <input className="email" type="text" name="email" placeholder="Email" onChange={this.userEmailChange.bind(this)}/>
            <br/>
            <input className="phone" type="tel" name="phone" placeholder="Phone" onChange={this.userPhoneChange.bind(this)}/>
            <br/>
            <input type="submit" />
          </form>

          <form className="dataFilterForm" >
            <br/>
            <br/>
            <label>Filter By: </label>
            <select name="filter" onChange={this.filterBy.bind(this)} >
              <option value="name">name</option>
              <option value="email">Email</option>
              <option value="isBusiness">Is Business</option>
              <option value="phoneNumber">Phone</option>
              <option value="dateJoined">Date Joined</option>
              <option value="permissionType">Permission Type</option>
            </select>
          </form>
       </div>
     )
   }
}

function mapStateToProps(state) {
  const { userLoginReducer } = state

  return {
	  userLoginReducer
  }
}

export default connect(mapStateToProps)(UserLogin);
