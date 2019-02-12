import { 
    DEL_EMAIL, 
    READ_EMAIL,
    DEL_MAIL_REQUEST,
    DEL_MAIL_SUCCESS,
    START_MARK_IS_READ,
    SUCCESS_MARK_IS_READ,
    START_UPDATE_MAIL_LIST,
    SUCCESS_UPDATE_MAIL_LIST
} from '../../action/mails'


const initialState = {

    isFetching: false,
    isUpdating: false,
    mailList : {
        received : [
        {
            id: 1,
            from: 'bender@futurama.com',
            isRead : false,
            subject: 'Kill all humans',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum architecto nisi et, quidem, odit a, velit vero id quae quam! Eligendi, in at sequi libero consequuntur architecto pariatur quo.'
        },
        {
            id: 2,
            from: 'fray@futurama.com',
            isRead : false,
            subject: 'Shut up, and take my money!',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum architecto nisi et, quidem, odit a, velit vero id quae quam! Eligendi, in at sequi libero consequuntur architecto pariatur quo.'
        }
        ],
        send : [
            {
                id: 21,
                from: 'fray@futurama.com',
                subject: 'I hate you!!!!!!!',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum architecto nisi et, quidem, odit a, velit vero id quae quam! Eligendi, in at sequi libero consequuntur architecto pariatur quo.'
            },
            {
                id: 22,
                from: 'fray-lover@futurama.com',
                subject: 'I love you!!!!!!',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum architecto nisi et, quidem, odit a, velit vero id quae quam! Eligendi, in at sequi libero consequuntur architecto pariatur quo.'
            },
            {
                id: 23,
                from: 'fray-not-fray@futurama.com',
                subject: 'Here is your money!',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum architecto nisi et, quidem, odit a, velit vero id quae quam! Eligendi, in at sequi libero consequuntur architecto pariatur quo.'
            }
        ]
    }
 };

function mails(state = initialState, action){

    switch(action.type){
        case 'SEND-EMAIL':
            let updatedSendMailList = [...this.state.mailList.send];
            updatedSendMailList.push(action.payload)
            return {...state, mailList:{...this.state.mailList, send: [...updatedSendMailList]}}
        case DEL_MAIL_REQUEST: 
            return {...state, isFetching: true}    
        case DEL_MAIL_SUCCESS: 
            return {...state, isFetching: false}
        case READ_EMAIL:{
            let newMail = state.mailList.received.map((mail) => {
                if(mail.id === action.payload.id){
                    mail.isRead = true
                }
                return mail
            })
            return {...state, mailList: {...this.state.mailList, received: newMail}}
        }
        case START_UPDATE_MAIL_LIST: {
            return {...state, isUpdating: true}
        }
        case SUCCESS_UPDATE_MAIL_LIST: {
            return {...state, isUpdating: false}
        }
        case START_MARK_IS_READ: {
            return {...state, isUpdating : true}
        }
        case SUCCESS_MARK_IS_READ: {
            return {...state, mailList:{received: [...action.payload.received]}, isUpdating : false}
        }
        default: 
            return {...state}    
    }
}
export default mails