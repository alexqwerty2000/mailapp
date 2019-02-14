import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form'
import { feedbackValidate } from '../../../validation'
import {myInput} from './myInput'


class FeedbackForm extends Component{
    
render() {
    const {handleSubmit} = this.props
    return (
        <form onSubmit={handleSubmit}>
                <Field name='email' type='text' component={myInput} placeholder='Your email...'/>
                <Field name='msg' type='textarea'  component='msg'/>
                <button  type='submit' label='submit'>Send</button>
        </form>
    );
  }
}
export default reduxForm({form:'feedback', validate: feedbackValidate })(FeedbackForm)
