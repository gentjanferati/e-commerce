const initialstate = {
    user: null
}

const currentUserReducer = (state = initialstate , action) => {
    switch(action.type){
        case 'CURRENT_USER':
            return{
                user: action.payload
            }
        case 'LOG_OUT':
            return{
                user: null
            }
            default:
                return state;
    }
}

export default currentUserReducer;