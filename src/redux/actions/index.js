export const currentUser = user =>{
    return {
        type: 'CURRENT_USER',
        payload: user
    }
}

export const productId = id =>{
    return {
        type: 'PRODUCT_ID',
        payload: id
    }
}
export const logOut = ()=>{
    return {
        type: 'LOG_OUT'
    }
}

export const categoryId = id =>{
    return {
        type: 'CATEGORY_ID',
        payload: id
    }
}
export const categoryIdNull = () =>{
    return {
        type: 'NO_ID'
    }
}