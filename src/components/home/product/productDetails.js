import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

function ProductDetails(){
    const id = useSelector(state => state.productId.id)
    const resUser = useSelector(state => state.currentUser.user);
    let auth = null;

    let isAdmin = false;
    if(resUser != null){
        let res1 = resUser.isadmin;
        isAdmin = (res1 === "true")
        auth = resUser.authorization;
    }
    
    console.log(isAdmin);
    const [item , setItem] = useState({});
    const [editItem, setEditItem] = useState();

    const haldeEdit = e =>{
        const {name , value} = e.target;
        console.log(editItem)
        setEditItem(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const submitHandlerEdit = e =>{
        e.preventdefault();
        console.log(editItem);
        async function putData() {
            await   axios.put(`https://spring-ecommerce-github.herokuapp.com/app/product/${id}`, {name: editItem.name, description: editItem.description, price: editItem.price} , {authorization: `${auth}`})
        }

        putData();
        
    }
    useEffect(()=>{
        fetchItem();
        // eslint-disable-next-line
    }, [])
    
    const fetchItem = async () => {
        const fetchItem = await fetch(`https://spring-ecommerce-github.herokuapp.com/app/product/${id}`);
        const item = await fetchItem.json();
        setItem(item);
        console.log(item)
    }
    return (
    <div>
        {isAdmin ?  <div className="product-edit">
            <form onSubmit={submitHandlerEdit}>
                <h1>Emri</h1>
            <input onChange={haldeEdit} type="text" name="name" defaultValue={item.name}/>
            <h1> Description</h1>
            <input onChange={haldeEdit} type="text" name="description" defaultValue={item.description}/>
            <h1>Cmimi</h1>
            <input onChange={haldeEdit} type="text" name="price" defaultValue={item.price}/>
            <input type="submit" value="Edito"/>
            </form>
        </div>
        :
        <div className="product-show">
            <h1>{item.name}</h1>
            <h2>{item.price}</h2>
            <h2>{item.description}</h2>
            {item.available ? <h2>Ka stock te ketij pordukti</h2> : <h2>Nuk ka stock te ketij produkti</h2>}
            <div className="shto">
                    Shto në shporte
                </div>
        </div>
        }
        
       
        </div>
    )
}

export default ProductDetails;