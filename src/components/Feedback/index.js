import React, { Component } from 'react';
import {SubmissionError} from 'redux-form'
import {FeedbackForm} from './FeedbackForm'

class Feedback extends Component {
    getInitialValue = () => {
        return{
            email: 'test@email.com',
            msg:'test message'
        }
    }

    submit = values =>{
        if(['test@test.com', 'some@test.ua'].includes(values.email)){
            throw new SubmissionError ({
              email: "Недавно с этого email'a уже была осуществлена отправка заявки",
            });
          }else{
            console.log(JSON.stringify (values));
          }
        
    }

    render(){
        return(
            <div>
                <h1>Feedback</h1>
                <FeedbackForm
                    onSubmit={this.submit}
                    initialValues = {this.getInitialValue()}/>
            </div>
        )
    }
}

export default Feedback;