export default HIDE_MAIN_MENU = 'HIDE_MAIN_MENU'

const initialState = {
    isShowMenu: true,
}

function menu(state = initialState, action){
    switch(action.type){
        case HIDE_MAIN_MENU: {
            return {...state, isShowMenu: false}
        }
        default: return {...state}
    }
}