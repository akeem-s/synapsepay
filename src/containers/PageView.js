import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserLogin from '../components/userLogin/UserLogin.js'

export default class PageView extends Component{
  render(){
    return(
      <div>
        <UserLogin />
      </div>
    )
  }
}
