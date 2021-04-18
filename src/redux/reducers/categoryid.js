const initialstate = {
    id: null
}

const categoryIdReducer = (state = initialstate , action) => {
    switch(action.type){
        case 'CATEGORY_ID':
            return{
                id: action.payload
            }
        case 'NO_ID':
            return{
                id: null
            }
        default:
                return state;
    }
}

export default categoryIdReducer;