import React, { Component } from 'react';
import filter from 'lodash';
import FollowUpCard from '../FollowUpCard'

export default class FollowUpzz extends Component {
  constructor(){
    super()
    this.state = {
      filtered:[]
    }
  }

  componentDidMount(){
    this.getFilteredFollowUp(this.props.contactzz)
  }

  getFilteredFollowUp(contact){
    let filteredArray = _.filter(this.props.contactzz, (contact)=>{
      return contact.followUp;
    })
    let contactInfo = filteredArray.map((contact)=>{
      return contact
    })
    this.setState({filtered:contactInfo})
  }

  render(){
    return(
      <div>
        {this.state.filtered ? this.state.filtered.map((contact)=>{
          const allFollowUp =
          <div className='displayed-follow-up' >
            <FollowUpCard contact = { contact } />
          </div>
          return allFollowUp
        }) : '' }

      </div>
    )
  }
}
