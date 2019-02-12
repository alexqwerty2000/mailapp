import React, {Component} from 'react';
import Header from './Header';
import Menu from './Menu';
import MailList from './MailList';
import NewMail from './NewMail'
import { Route, Switch } from 'react-router-dom'
import MailPage from '../../pages/MailPage';

class Dashboard extends Component{

    state = {
        newLetter: false,
        activeFolder: 'received',
        sendMail: false
    }

   onCreateLetter = () => {
        this.setState({
            newLetter: !this.state.newLetter
        })
    }

    onChangeFolder = (folder) => {
        this.setState ({
            activeFolder: folder
        })
    }

    onSendLetter = () => {
        this.setState({
            sendMail: !this.state.sendMail
        })
    }
 
    render(){
         return (
             <>
                <Header />
                <div className = 'container'>
                    <Menu changeFolder = {this.onChangeFolder} createLetter = {this.onCreateLetter} />
                    <Switch>
                        <Route path = '/mail/:id' component = {MailPage}/>
                        <Route path='/' render = {(props) => (
                            <MailList {...props} activeFolder = {this.state.activeFolder} newLetter={this.state.newLetter} />
                        )}/>
                    </Switch>
                </div>
             </>
         )
    }
}
export default Dashboard;