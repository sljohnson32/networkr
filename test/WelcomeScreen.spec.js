import React from 'react';
import { shallow, mount, render, simulate } from 'enzyme';
import { assert, expect } from 'chai';
import WelcomeScreen from '../lib/components/WelcomeScreen'
const sinon = require('sinon')

describe('WelcomeScreen', ()=>{
  it('renders as a div', ()=>{
    const wrapper = shallow(<WelcomeScreen />)
    assert.equal(wrapper.type(), 'div')
  });
  it('should sign into the app on button click', ()=>{
    let signIn = sinon.spy()
    const wrapper = mount(<WelcomeScreen signIn = {signIn} />)
    wrapper.find('button').simulate('click');
    expect(signIn).to.have.property('callCount',1)
  });
});
