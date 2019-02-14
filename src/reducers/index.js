import { combineReducers } from 'redux'
import mails from './mails'
import contacts from './contacts'
import menu from './menu'
import {reducer as formReducer} from 'redux-form'

const rootReducers = combineReducers({
    mails,
    // contacts,
    // menu,
    form: formReducer
})
export default rootReducers