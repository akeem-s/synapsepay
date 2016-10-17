import assert from 'assert'
import React from 'react'
import {mount, render, shallow} from 'enzyme'
import Root from '../../../src/containers/Root'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import TestUtils from 'react-addons-test-utils'
import nock from 'nock'
import * as actions from '../../../src/actions/actions.js'
import UserData from '../../../src/components/userData/UserData.js'
import UserDataReducer from '../../../src/components/userData/userData.reducers.js'
import UserLoginReducer from '../../../src/components/userLogin/userLogin.reducers.js'

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);

let should = chai.should();
var expect = require('chai').expect;

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

const noStoreUserData = mockStore({
  userDataReducer:{
  }
})

 describe('User Data', () => {
   describe('Actions', () => {
     describe('Sync Actions', () => {

     })
     describe('Async Actions', () => {

     })
     describe('Async HTTP Actions', () => {
       afterEach(() => {
         nock.cleanAll();
       })
     })
   })

   describe('Reducers', () => {
     describe('UserData', () => {
       it('should return initial state', () => {
         expect(UserDataReducer(undefined, {})).to.eql({})
       })
     })
   })

   describe('Component Functionality', () => {
     
   });
 });
