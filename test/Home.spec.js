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

});
