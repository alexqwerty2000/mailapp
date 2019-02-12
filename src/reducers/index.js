import { combineReducers } from 'redux'
import mails from './mails'
import contacts from './contacts'

const rootReducers = combineReducers({
    mails,
    contacts
})
export default rootReducers