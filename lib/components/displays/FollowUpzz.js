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

  // getFilteredFollowUp(contactzz){
  //   debugger
  //   const filteredFollowUp = contactzz.filter(contact=>{
  //     return
  //     contact.followUp ===true
  //   })
  //   this.setState({ filtered:filteredFollowUp })
  // }

  getFilteredFollowUp(contact){
    debugger
    let filteredArray = _.filter(this.props.contactzz, (contact)=>{
      return contact.followUp;
    })
    let contactInfo = filteredArray.map((contact)=>{
      return contact
    })
    this.setState({filtered:contactInfo})
  }

//   export const filterMsgs = (msgs, filterText, selectedUser) => {
//   const filteredArray = msgs.filter(msgs => {
//     return msgs.content.toLowerCase().indexOf(filterText.toLowerCase()) >= 0;
//   }).filter((msgs) => {
//     return msgs.user.email.indexOf(selectedUser) >= 0;
//   });
//   return filteredArray;
// };




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
