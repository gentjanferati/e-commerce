import axios from 'axios';
import React, {useState} from 'react';
import './create-product.styles.css';
import {useSelector} from 'react-redux';

function CreateProduct(){
    const auth = useSelector(state => state.currentUser.user.authorization)
    console.log(auth)
    const [productState, setProductState] = useState({name: "",description: "", price: "", categoryId: "" })
    const handleChange = e => {
        const {name , value } = e.target;
        setProductState(prevState => ({
            ...prevState,
            [name]: value
        }));
    } 
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(productState);
        axios.post('https://spring-ecommerce-github.herokuapp.com/app/product', {name: productState.name , description: productState.description, price: productState.price, categoryId: productState.categoryId} , {Authorization: `${auth}`})
        .then(res => {
            console.log(res);
        })

    }

    
    return (
            <div className="product-form">
            <form  onSubmit={handleSubmit}>
                
                <h2>Emri</h2>
                <input placeholder="Emri" type="text" name="name" onChange={handleChange}/>
                
                <h2>Pershkrimi:</h2>
                
                <input type="text" name="description" onChange={handleChange}/>
                
                <h2>Cmimi:</h2>
                
                <input type="number" name="price" onChange={handleChange}/>
                
                <h2>Kategoria:</h2>
                
                <input type="text" name="categoryId" onChange={handleChange}/>
                <div>
                
                <input type="submit" name="submit" value="krijo" />
                </div>
            </form>
            </div>
    )

}
   

export default CreateProduct; 