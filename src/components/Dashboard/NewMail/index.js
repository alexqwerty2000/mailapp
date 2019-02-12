import React,{ Component } from 'react'

class NewMail extends Component{
    render(){
        return(
           <button onClick = {this.props.createLetter}>New Mail</button>
        )
    }
}
export default NewMail