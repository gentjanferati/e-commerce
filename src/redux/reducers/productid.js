const initialstate = {
    id: ""
}

const productIdReducer = (state = initialstate , action) => {
    switch(action.type){
        case 'PRODUCT_ID':
            return{
                id: action.payload
            }
            default:
                return state;
    }
}

export default productIdReducer;