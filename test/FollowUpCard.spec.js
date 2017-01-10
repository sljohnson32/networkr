import React from 'react';
import { shallow, mount, render, simulate } from 'enzyme';
import { assert, expect } from 'chai';
import FollowUpCard from '../lib/components/FollowUpCard'
const sinon = require('sinon')

describe ('FollowUpCard', ()=>{
  let contact = {
    contactID: 123,
    existingContact: true,
    firstName: 'Mike',
    lastName: 'Ziccardi',
    organization: 'turing',
    email: 'mikeziccardi@gmail.com',
    followUp: true,
}

  it('should mount with no properties', ()=>{
    const wrapper = shallow(<FollowUpCard contact ={contact} />)
  });
  it('should render as a div',()=>{
    const wrapper = shallow(<FollowUpCard contact = {contact} />)
    assert.equal(wrapper.type(),'div')
  })
  it.skip('should run the toggle follow up function on button click', ()=>{
    let toggleFollowUp = sinon.spy()
    let editContact = sinon.stub()
    let updatedContact= sinon.spy()

    const wrapper = mount(<FollowUpCard contact = {contact}  editContact = {editContact} toggleFollowUp = {toggleFollowUp} />)
    wrapper.find('.follow-up-toggle').simulate('click')
    expect(toggleFollowUp.callCount).to.equal(1)
  })
  it('should have a button with 1 prop', ()=>{
  const wrapper = render(<FollowUpCard contact ={contact} />)
  assert.equal(wrapper.find('.follow-up-toggle').length, 1)
})
})
