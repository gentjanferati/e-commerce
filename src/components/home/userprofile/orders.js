import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux'

const Orders = () =>{
    const user = useSelector(state => state.currentUser.user.userid)
    console.log(user)
    const headers = useSelector(state => state.currentUser.user.authorization)
    console.log(headers)
    const [orders, setOrdes] = useState([]);
    const url = `https://spring-ecommerce-github.herokuapp.com/app/users/${user}/order`
    console.log(url)
    useEffect(() =>{
        async function fetchData(){ 
        const response = await fetch(url, {headers});
        console.log(response);
        const result = await response.json();
        setOrdes(result);
        console.log(orders)
        }
        fetchData();

    },[url,headers, orders])

    return(
        <div>
            Orders
        </div>
    )
}
export default Orders;