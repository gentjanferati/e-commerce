import React, {useState, useEffect} from 'react';
import CardList from "./card-list/card-list.js";
import Category from './category/category';
import {useDispatch} from 'react-redux';
import {categoryIdNull} from '../../redux/actions'
import './home.styles.css';
function Home(){
    const [categories, setCategories] = useState();
    useEffect(() =>{
        async function fetchData(){ 
        const headers = { 'accept': 'application/json'}
        
            const response = await fetch( `https://spring-ecommerce-github.herokuapp.com/app/category`, { headers });
            const result = await response.json()
                console.log(result);
                setCategories(result);
                console.log(categories)
            }
        fetchData();
    // eslint-disable-next-line
    },[])

    

    const dispatch = useDispatch();

    return (
        <div className="home">
            <div className="promotions text-center">
                <div>
                    aaaaaaaaaaaaaaaaa
                </div>
            </div>
            <div className="categories">

                {categories ?
                categories.map(({...otherProps}) =>( 
                    <Category key={Math.round(Math.random() * 500)} {...otherProps}/>
                )) 
            :
            ""
            }
            <button onClick={()=> dispatch(categoryIdNull()) }>Remove Filter</button>

            </div>
            <div className="container">
                <CardList  />

            </div>
        </div>
    )
}

export default Home;