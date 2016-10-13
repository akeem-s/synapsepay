import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js'

export class UserLogin extends React.Component{
   constructor(props){
     super(props)

     const { dispatch, userLoginReducer } = this.props
     console.log("constructor`")
     dispatch(actions.userLoginActions.createUser()).then((data) => {
       console.log("createUser")
       console.log(data)
     })

    //  dispatch(actions.userLoginActions.getAllUsers()).then((data) => {
    //    console.log(data)
    //  })
   }

   handleSubmit(){
     alert("handleSubmit")
   }

   render(){
     return(
       <div className="userLoginContainer" >
         <h1> User Login </h1>

          <form className="userLoginForm" onSubmit={this.handleSubmit.bind(this)}>
            <label> Name: <input type="text" name="name" placeholder="Name" /> </label>
            <label> Email: <input type="text" name="email" placeholder="Email" /> </label>
            <label> Phone: <input type="password" name="phone" placeholder="Phone" /> </label>
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
