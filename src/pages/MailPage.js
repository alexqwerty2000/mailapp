import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { DEL_EMAIL } from '../action/mails'
// import { mailList } from '../dummy'
import { connect } from 'react-redux'

class MailPage extends Component{

    static defaultProps = {
        mail: {
            from: '',
            subject: '',
            text: ''
        }
    }

    static propTypes = {
        mail: PropTypes.shape(
            {
                from: PropTypes.string.isRequired,
                subject: PropTypes.string.isRequired,
                text: PropTypes.string.isRequired
            }
        ) 
    }

    // componentDidMount(){
    //     let mailShow = mailList['received'].find((mail) => {
    //         return mail.id == this.props.match.params.id
    //     })
    //     this.setState({
    //         ...mailShow
    //     })
    // }

    render(){
        console.log(this.props)
        return(
            <>
                <h1> {this.props.mail.from}</h1>
                <h1> {this.props.mail.subject}</h1>
                <h1> {this.props.mail.text}</h1>
            </>
        )
    }
}

const mapStateToProps = (state, props) => {
    let mails = {...state.mails.mailList}
    let resMail = []
    for (let key in mails){
        resMail = mails[key].filter((mail) => {
            return mail.id == props.match.params.id ? mail : null
        })
    }
    return{
        mailsFromState : state.mails.mailList,
    }
}

const mapDisplayToProps = (dispatch) => {
    return {
        delEmail: (delID, mailList) => {

        }
    }
}
export default connect(mapStateToProps, mapDisplayToProps)(MailPage)