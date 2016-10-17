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
import UserLogin from '../../../src/components/userLogin/UserLogin.js'
import UserLoginReducer from '../../../src/components/userLogin/userLogin.reducers.js'

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);

let should = chai.should();
var expect = require('chai').expect;

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

const noStore = mockStore({
  userLoginReducer:{
    userArray: []
  }
})

 describe('componentName', () => {
   describe('Actions', () => {

     describe('Async Actions', () => {

     })
     describe('Async HTTP Actions', () => {
       afterEach(() => {
         nock.cleanAll();
       })
     })
   })

   describe('Reducers', () => {
     describe('reducerName', () => {
       it('should return initial state', () => {
         expect(UserLoginReducer(undefined, {})).to.eql({ userArray: [] })
       })
     })
   })

   describe('Component Functionality', () => {
     it('it should render', () => {
        const wrapper = mount(<UserLogin store={noStore}/>);
        expect(wrapper.find(UserLogin)).to.have.length(1);
      })

     it('userLoginContainer should render', () => {
       const wrapper = mount(<UserLogin store={noStore}/>);
       expect(wrapper.find('.userLoginContainer')).to.have.length(1)
      })

     it('userLoginForm should render', () => {
       const wrapper = mount(<UserLogin store={noStore}/>);
       expect(wrapper.find('.userLoginForm')).to.have.length(1)
      })

      it('dataFilterForm should render', () => {
        const wrapper = mount(<UserLogin store={noStore}/>);
        expect(wrapper.find('.dataFilterForm')).to.have.length(1)
      })
   });
 });
