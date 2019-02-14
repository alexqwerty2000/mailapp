import React, { Component} from 'react'
import './burgermenu.scss'

export default class HeaderMenu extends Component{
    render(){
        return(
            <div>
                <div className='burger-menu'>
                    <div className='burger'></div>
                    <div className='burger'></div>
                    <div className='burger'></div>
                </div>
            </div>
        )
    }
}