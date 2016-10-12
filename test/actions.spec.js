import assert from 'assert'
import React from 'react'
import {mount, render, shallow} from 'enzyme'
import Root from '../src/containers/Root'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import TestUtils from 'react-addons-test-utils'
import nock from 'nock'
import * as actions from '../src/actions/actions.js'

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised);

let should = chai.should();
var expect = require('chai').expect;

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

 describe('componentName', () => {
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
 });
