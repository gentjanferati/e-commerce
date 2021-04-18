import React, { useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import Card from "../card/card";


function CardList(){

    const categoryId = useSelector(state => state.categoryId.id);
    console.log(categoryId);

    const useFetch = (url) =>{
        const [isLoaded, setIsLoaded] = useState(false);
        const [items, setItems] = useState([]);
        // eslint-disable-next-line
        useEffect( async () => {
            const headers = { 'accept': 'application/json'}
        
            const response = await fetch( url, { headers });
            const result = await response.json()
                setIsLoaded(true);
                setItems(result);
                  
                setIsLoaded(true);
            
          },[url])
          return {items, isLoaded};
          
    }
    let path = categoryId ?`category/${categoryId}/products` : `products` 
    console.log(path);

    const {items, isLoaded} = useFetch(`https://spring-ecommerce-github.herokuapp.com/app/${path}`)  
    console.log(items)
    if(!isLoaded) {
        return (
            <h1>Loading...</h1>
        )
    }
    else {
        return (
        <div className="row">
            
            {items.map(({...otherProps}) =>(
                <Card key={Math.round(Math.random() * 50000)} {...otherProps}/>
            ))}


        </div>
    )
}
}

export default CardList;