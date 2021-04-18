import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';


function UserList(){
    const [users, setUsers] = useState();
    const authorization = useSelector(state => state.currentUser.user.authorization);
    const url = "https://spring-ecommerce-github.herokuapp.com/app/users"
    console.log(authorization)
    useEffect( ()=>{ 
        async function fetchData(){
        const headers = authorization
        const response = await fetch(url,  {Authorization: `${headers}`});
        const result = await response.json();
        console.log(result)
        setUsers(result);
        console.log(users);
    } 
    fetchData();
}, [url]);
    
    return(
        <div>
            
        </div>
    )
}

export default UserList;