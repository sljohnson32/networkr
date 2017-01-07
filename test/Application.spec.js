import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { assert } from 'chai';

import Application from '../lib/components/Application';
const sinon = require('sinon')

describe('Application', () => {

  it('renders as a <div>', () => {
    const wrapper = shallow(<Application />)
    assert.equal(wrapper.type(), 'div');
  });
  it('can mount with no properties', () => {
    const wrapper = shallow(<Application />)
  });
  it.skip('can call component did mount method', ()=> {
    sinon.spy(Application.prototype, 'componentDidMount')
    const wrapper = mount(<Application />)
    assert.equal(Application.prototype.componentDidMount.calledOnce, true)
  });
  it('should have user state of null',()=>{
  const wrapper = shallow(<Application />)
 assert.equal(wrapper.state('user'),(null))
  });
  it('should have WelcomeScreen component with 1 prop', function(){
    const wrapper = render(<Application />)
    assert.equal(wrapper.find('.Application').length,1)
  });
  it.only('should have a sign in button', ()=>{
    const wrapper = render(<Application />)
    assert.equal(wrapper.find('.sign-in-btn').length,1)
  });
});
