import React from 'react';
import {Link} from 'react-router-dom';

import {productId} from '../../../redux/actions';

import "./card.styles.css"
import {useSelector , useDispatch} from  'react-redux';

function Card( props ){
    const resUser = useSelector(state => state.currentUser.user)
    let isAdmin = false;
    if(resUser != null){
        let res1 = resUser.isadmin;
        isAdmin = (res1 === "true")
    }
    
    
    const dispatch = useDispatch()
    

    return (
        <div  className="col-sm-12 col-md-4 col-lg-3 mt-5 mx-3 ">
            <div onClick={() => dispatch(productId(props.id))}>
            <Link to={`/product${props.name}}`} >
            <div className="card-container">
            <div className="img-cont">
                <img width="360" height="360" alt="#" src={props.pictureUrl}/>
            </div>
            <div className="oferte">

            </div>
            <div className="details">
                <h1>{props.name}</h1>
                <h2>Cmimi: {props.price}</h2>
                <p>{props.description}</p>
                <div className="shto">
                    Shto në shporte
                </div>
                {isAdmin ? 
                <div className="edit">
                <i className="bi bi-pencil-fill" ></i>
            </div>
            : ""}
                
            </div>
            </div>
            </Link>
            </div>
        </div>
    )
}

export default Card;