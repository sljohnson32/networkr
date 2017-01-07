import React from 'react';
import { shallow, mount, render, simulate } from 'enzyme';
import { assert, expect } from 'chai';
import HomeScreen from '../lib/components/HomeScreen'
const sinon = require('sinon')

describe ('HomeScreen', ()=>{

  it('should render as a div', ()=>{
    const wrapper = shallow(<HomeScreen />)
    assert.equal(wrapper.type(), 'div');
  });
  it('should have an onHome state of true', ()=>{
    const wrapper = shallow(<HomeScreen />)
    assert.equal(wrapper.state('onHome'),true)
  });
  it('should have a onFollowUpzz state of false', ()=>{
    const wrapper = shallow(<HomeScreen />)
    assert.equal(wrapper.state('onFollowUpzz'),false)
  });
  it('should have a onContactzz state of false', ()=>{
    const wrapper = shallow(<HomeScreen />)
    assert.equal(wrapper.state('onContactzz'),false)
  });
  it('should have a onNewContact state of false', ()=>{
    const wrapper = shallow(<HomeScreen />)
    assert.equal(wrapper.state('onNewContact'),false)
  });
  it('should have a home component',()=>{
    const wrapper = render(<HomeScreen />)
    assert.equal(wrapper.find('.home-container').length,1)
  });
  it('should sign out of the app on button click', ()=>{
    let signOut = sinon.spy()
    const wrapper = mount(<HomeScreen signOut = {signOut} />)
    wrapper.find('.btn-signout').simulate('click');
    expect(signOut).to.have.property('callCount',1)
  });
  it.only('should select the displayNewContactForm when display Contact form is run', ()=>{
    let displayNewContactForm = sinon.spy();
    const wrapper = mount(<HomeScreen displayNewContactForm={displayNewContactForm} />)
    wrapper.find('.btn-addnew').simulate('click');
    expect(displayNewContactForm).to.have.property('callCount',1)
  });

});
