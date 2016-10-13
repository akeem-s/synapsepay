import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js'

export class UserData extends React.Component{
   constructor(props){
     super(props)
   }

   filterBy(){
     alert("Filter By")
   }

   render(){
     return(
       <div className="userDataComponent" >
         <h1> UserData </h1>

         <form className="dataFilterForm" >
           <label>Filter By:</label>
           <select name="filter" onChange={this.filterBy.bind(this)} >
             <option value="mostRecent">option one</option>
             <option value="messengerType">option two</option>
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
