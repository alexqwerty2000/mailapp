import React, { Component } from 'react'

class MailMenu extends Component{

    // state = {
    //     folders: [
    //       {
    //         name : 'Входящие',
    //         id: 'received'
    //       },
    //       {
    //         name : 'Исходящие',
    //         id: 'send'
    //       },
    //     ]
    // }

    render(){
        // let folderList = this.state.folders.map((item) => {
        // return (<li key={item.id}>{item.name}</li>)
        // })
        // return(
        //     <ul>
        //         {folderList}
        //     </ul>
        // )
       
        return(

            
            <>
            <ul>
                <li onClick={() => this.props.changeFolder('received')}>Received</li>
                <li onClick={() => this.props.changeFolder('send')}>Send</li>
            </ul>
            </>
        )
    }

}
export default MailMenu;