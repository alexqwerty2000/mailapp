import React, { Component } from 'react';
import MailMenu from './MailMenu'
import NewMail from '../NewMail'

class Menu extends Component {

    render() {

    return (
      <div className='col-4'>
        <NewMail createLetter = {this.props.createLetter}/>
        <MailMenu changeFolder = {this.props.changeFolder}/>
      </div>
    );
  }
}

export default Menu;