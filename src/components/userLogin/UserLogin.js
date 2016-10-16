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

   render(){
     return(
       <div className="userLoginContainer" >
         <h1> Create User </h1>

          <form className="userLoginForm" onSubmit={this.handleSubmit.bind(this)}>
            <input className="name" type="text" name="name" placeholder="Name" onChange={this.userNameChange.bind(this)}/>
            <br/>
            <input className="email" type="text" name="email" placeholder="Email" onChange={this.userEmailChange.bind(this)}/>
            <br/>
            <input className="phone" type="number" name="phone" placeholder="Phone" onChange={this.userPhoneChange.bind(this)}/>
            <br/>
            <input type="submit" onSubmit={this.handleSubmit.bind(this)}/>
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
