import React, { Component } from 'react';
import MailMenu from './MailMenu'
import NewMail from '../NewMail'
import './menu.scss'

class Menu extends Component {

    render() {

    return (
      <div className='menu'>
        <NewMail createLetter = {this.props.createLetter}/>
        <MailMenu changeFolder = {this.props.changeFolder}/>
      </div>
    );
  }
}

export default Menu;