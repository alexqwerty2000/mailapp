import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import './header.scss'

class Header extends Component {
  render() {
    return (
        <div className='container'>
          <div className='col-4'>
            <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png'/>
          </div>
          <div className='col-4'><SearchBar/></div>
          <div className='col-4'>
            <NavLink to='/' activeClassName='active'>Mail</NavLink>
            <NavLink to='/contacts' activeClassName='active'>Contacts</NavLink>
          </div>
        </div>
     );
  }
}

export default Header;
