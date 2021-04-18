import React from 'react';
import {useDispatch} from 'react-redux';
import {categoryId} from '../../../redux/actions'
function Category(prop){
    console.log(prop)
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(categoryId(prop.id))}>{prop.name}</button>
        </div>
    )
}

export default Category;