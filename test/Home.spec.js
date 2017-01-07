import React from 'react';
import { shallow, mount, render, simulate } from 'enzyme';
import { assert, expect } from 'chai';
import Home from '../lib/components/displays/Home'
const sinon = require('sinon')

describe ('Home', ()=>{

  it('should render as a div', ()=>{
    const wrapper = shallow(<Home />)
    assert.equal(wrapper.type(), 'div');
  });
  it('should select the onFollowUpzz when display FollowUpzz is run', ()=>{
    let displayFollowUpzz = sinon.spy();
    const wrapper = mount(<Home displayFollowUpzz={displayFollowUpzz} />)
    wrapper.find('.follow-ups').simulate('click');
    expect(displayFollowUpzz).to.have.property('callCount',1)
  });
  it('should select the displayContactzz when display Contactzz is run', ()=>{
    let displayContactzz = sinon.spy();
    const wrapper = mount(<Home displayContactzz={displayContactzz} />)
    wrapper.find('.display-contactzz').simulate('click');
    expect(displayContactzz).to.have.property('callCount',1)
  });
});
