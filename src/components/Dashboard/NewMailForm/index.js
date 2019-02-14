import React,{ Component } from 'react'
import PropTypes from 'prop-types'
import './newmailform.scss'

class NewMailForm extends Component{
 
    state = {
        email:'',
        subject:'',
        text:''
    }

    onInputChange = (event) => {

        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name] : value
        })
    }

    onSendMail = () => {


        this.setState({
            email:'',
            subject:'',
            text:''
        })
    }

    onCloseMail = () => {
        this.setState({
            email:'',
            subject:'',
            text:''
        })
        this.props.newLetter(false)
    }

    render(){
        const email = this.props.email
        return(
         
           <div className='new-letter'>
                <div>
                    <input 
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.onInputChange} 
                        placeholder='Получатели'>
                    </input>
                </div>
                
                <div>
                    <input 
                        type='text' 
                        name='subject' 
                        value={this.state.subject}
                        onChange={this.onInputChange}  
                        placeholder='Тема'>
                    </input>
                </div>
                <div>
                    <textarea 
                        type='text' 
                        name='text'  
                        value={this.state.text} 
                        onChange={this.onInputChange} 
                        placeholder = ''>
                    </textarea>
                </div>
                
                <button onClick={this.onSendMail} type='Submit'>Send</button>
                <button onClick={this.onCancelMail} type='Submit'>Cancel</button>
           </div>
        )
    }
} 

NewMailForm.propTypes = {
    email: PropTypes.element.isRequired
}

export default NewMailForm