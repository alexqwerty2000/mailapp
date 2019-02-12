export const DEL_EMAIL = 'DEL_EMAIL'
export const READ_EMAIL = 'READ_EMAIL'
export const SEND_EMAIL = 'SEND_EMAIL'
export const DEL_MAIL_REQUEST = 'DEL_MAIL_REQUEST'
export const DEL_MAIL_SUCCESS = 'DEL_MAIL_SUCCESS'
export const START_UPDATE_MAIL_LIST = 'START_UPDATE_MAIL_LIST'
export const SUCCESS_UPDATE_MAIL_LIST = 'SUCCESS_UPDATE_MAIL_LIST'
export const START_MARK_IS_READ = 'START_MARK_IS_READ'
export const SUCCESS_MARK_IS_READ = 'START_MARK_IS_READ'


export function delEmail(delID, mailList){
    return (dispatch) => {
        dispatch({
             type: DEL_MAIL_REQUEST,
        })
        setTimeout(() => {
            let newMailList = {...mailList}
            for(let key in newMailList){
                newMailList[key] = newMailList[key].filter((item) => {
                    return item.id != delID ? item : null
                })
            }
            dispatch({type: DEL_MAIL_SUCCESS, payload: {mailList: newMailList}})
        }, 1000)
    }
}

export function updateEmail(){
    return (dispatch) => {
        dispatch({
            type: START_UPDATE_MAIL_LIST
        })
        setTimeout(() => {
            dispatch({
            type: SUCCESS_UPDATE_MAIL_LIST
            })
        }, 3000)
    }
}

export function makrAsRead(mailID){
    return (dispatch, state) =>{
        dispatch({
            type: START_MARK_IS_READ,
        });
        setTimeout(() => {
            let store = state();
            let newStore = state.mails.mailList.received.map((mail) =>{
                if (mail.id == mailID) {
                    mail.isRead = true;
                }
                dispatch({
                type: SUCCESS_MARK_IS_READ, payload: {received: newStore}
                })
             })
         }, 3000)
    }
}