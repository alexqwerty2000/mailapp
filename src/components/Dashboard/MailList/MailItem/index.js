import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { delEmail, makrAsRead } from '../../../../action/mails'
import { connect } from 'react-redux'


class MailItem extends Component{

    state = {
        showLetterText: false
    }

    onToggleShowText = () => {
        this.setState({
            showLetterText : !this.state.showLetterText
        })
    }

    render(){
        let {mail} = this.props
        let isRead = mail.isRead ? 'read' : 'unread'
        const mailItem = 
                 <li onClick = {() => {this.props.openLetter(mail.id)}}>
                 <NavLink to={`/mail/${mail.id}`} className={isRead}>
                     {mail.from} - {mail.subject}
                     {this.props.activeLetter === mail.id ? <p>{mail.text}</p> : null}
                 </NavLink>
                    
                    <button onClick = {() => this.props.delEmail(mail.id, this.props.mailsFromStore)}>Delete</button>
                    <button onClick = {() => this.props.makrAsRead(mail.id)}>Read</button>
                </li>
                
        return(
            <>
               {this.props.isFetching ? <li> Идет удаление... </li> : mailItem}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
      mailsFromStore: state.mails.mailList,
      isFetching : state.mails.isFetching
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      delEmail: (delID, mailList) => {
         dispatch(delEmail(delID, mailList))
      },
      makrAsRead :(mailID) => {
          dispatch(makrAsRead(mailID))
      }
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(MailItem)