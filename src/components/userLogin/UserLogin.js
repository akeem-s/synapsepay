import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js'

export class UserLogin extends React.Component{
   constructor(props){
     super(props)
     const { dispatch, userLoginReducer } = this.props
     dispatch(actions.userLoginActions.createUser()).then((data) => {
       console.log(data)
     })
   }

   handleSubmit(e){
    let name = e.target.name.value
    let email = e.target.email.value
    let phone = e.target.phone.value
   }

   render(){
     return(
       <div className="userLoginContainer" >
         <h1> Create User </h1>

          <form className="userLoginForm" onSubmit={this.handleSubmit.bind(this)}>
            <input className="name" type="text" name="name" placeholder="Name" />
            <br/>
            <input className="email" type="text" name="email" placeholder="Email" />
            <br/>
            <input className="phone" type="password" name="phone" placeholder="Phone" />
            <br/>
            <input type="submit" />
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
