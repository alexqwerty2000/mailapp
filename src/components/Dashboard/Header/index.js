import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'
import HeaderMenu from './HeaderMenu'
import './header.scss'

class Header extends Component {
  render() {
    return (
      <div className = 'header'>
        <div>
          <HeaderMenu/>
        </div>
        <div className='container'>
          <div className='logo'>
            <img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png'/>
          </div>
          <div className='search-bar'><SearchBar/></div>
          <div className='folders'>
            <NavLink to='/' activeClassName='active'>Mail</NavLink>
            <NavLink to='/contacts' activeClassName='active'>Contacts</NavLink>
          </div>
        </div>
      </div>
     );
  }
}

export default Header;
