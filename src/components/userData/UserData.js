import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js'

export class UserData extends React.Component{
   constructor(props){
     super(props)
   }

   render(){
     const { userLoginReducer } = this.props
     let totalUsers = this.props.userLoginReducer.userArray.length
     let htmlArray = [];
     let row = '';
     let testTable = []
     let testRow = ''

    if(this.props.userLoginReducer.userArray.length > 0){
      for(let i = 0; i < this.props.userLoginReducer.userArray.length; i ++){
        row = <li key={i} className="row"> <h4 className="cell">  {this.props.userLoginReducer.userArray[i].legal_names[0]}</h4> <h4 className="cell"> {this.props.userLoginReducer.userArray[i].logins[0].email} </h4> <h4 className="cell"> {this.props.userLoginReducer.userArray[i].extra.is_business}</h4> <h4 className="cell"> {this.props.userLoginReducer.userArray[i].phone_numbers[0] }</h4>  <h4 className="cell"> {this.props.userLoginReducer.userArray[i].extra.date_joined}</h4> <h4 className="cell"> {this.props.userLoginReducer.userArray[i].permission}</h4>  </li>
        htmlArray.push(row)
      }
    }
    else {
      htmlArray = <li key={0}></li>
    }

     return(
       <div className="userDataComponent" >
         <div className="userStats">
            <h1>Users</h1>
             <h3>Total Users: {totalUsers}</h3>
         </div>

         <ul className="userDataUl">
           <li className="row"> <h4 className="cell" >Name</h4> <h4 className="cell">Email</h4> <h4 className="cell">Business</h4>  <h4 className="cell">Phone</h4> <h4 className="cell">Date Joined</h4> <h4 className="cell">Permission Type</h4>   </li>
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
