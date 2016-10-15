import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserLogin from '../components/userLogin/UserLogin.js'
import UserData from '../components/userData/UserData.js'

export default class PageView extends Component{
  render(){
    return(
      <div>
        <header><h1>Akeem's Generic Front End Project</h1></header>
        <UserLogin />
        <UserData />
      </div>
    )
  }
}
