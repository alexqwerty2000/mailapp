import React, { Component } from 'react';
import MailItem from './MailItem';
import NewMailForm from '../NewMailForm'
import { delEmail, updateEmail } from '../../../action/mails'
// import store from '../../../store'
// import { mailList } from '../../../dummy';
import { connect } from 'react-redux'

class MailList extends Component {

  state = {
      openId: ''
  }

  onOpenLetter = (id) => {
    if(this.state.openId !==id){
      this.setState({
        openId:id
      })
    }else{
      this.setState({
        openId : ''
      })
    }
    
  }

  render() {
    let {activeFolder, isUpdating} = this.props
    let mails = this.props.mailsFromStore[activeFolder].map((mail) => {
      return (
        <div>
            <MailItem key={mail.id} mail={mail} openLetter ={this.onOpenLetter} activeLetter = {this.state.openId}/>
        </div>
      )
    })
    return (
      <>
        <button onClick ={this.props.updateEmail}>Update</button>
        <ul>
          {isUpdating ? <li>Updating...</li> : mails}
        </ul>
          {this.props.newLetter ? <NewMailForm/> : false}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    mailsFromStore: state.mails.mailList,
    isUpdeting: state.mails.isUpdeting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateEmail: () => {
        dispatch(updateEmail())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MailList)