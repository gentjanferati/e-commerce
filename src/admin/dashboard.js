import React from 'react';
import {Link } from 'react-router-dom';
//import SignIn from '../components/signin/signin';
//import CardList from '../components/home/card-list/card-list'
function Dashboard(){
    //const [isLoged, setIsLoged] = useState(true);
    
        return (
            <div className="home">
            { //isLoged ? <CardList /> :  <SignIn isAdmin={true} /> 
            }
            <Link to="/admin/create-product" style={{ textDecoration: 'none', color: 'black'}}>
            <p>Create Product</p>
            </Link>
            <Link to="/admin/users" style={{ textDecoration: 'none', color: 'black'}}>
            <p>Users</p>
            </Link>
            </div>
    )

}
   

export default Dashboard; 