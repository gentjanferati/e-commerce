import React from 'react';
import {Link } from 'react-router-dom';
import {useSelector , useDispatch} from 'react-redux';

import './nav.styles.css'; 
import { logOut  } from '../../redux/actions';

function Nav(){
    const resUser = useSelector(state => state.currentUser.user)
    console.log(resUser)
    let isAdmin;

    if(resUser != null){
        let res1 = resUser.isadmin;
        isAdmin = (res1 === "true")
    }
    else if(resUser != null){
        let res1 = resUser.isadmin;
        isAdmin = (res1 === "fasle")
    }
    else {
        isAdmin = null;
    }

    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(logOut())
    } 
    
    return (
        <div className="nav">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <p>Home</p>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
            <p>About</p>
            </Link>
            
            {resUser 
            ?
            <div className="nav">{ isAdmin ? 
            
            <Link to="/admin" style={{ textDecoration: 'none', color: 'black'}}>
            <p>Dashboard</p>
            </Link>
            
            
            
            : 
            
            <Link to={`/user-profile${resUser.userid}` } style={{ textDecoration: 'none', color: 'black'}}>
            <p>Profili</p>
            </Link>
            
            
            
            }
            <Link to={"/"} onClick={handleClick} style={{ textDecoration: 'none', color: 'black'}} >
                <p>Logout</p>
            </Link>
            
            </div> 
            
            : 
            
            <Link to="/signin" style={{ textDecoration: 'none', color: 'black'}}>
            <p>Sign in</p>
            </Link>
            }
            

            
           
            
        </div>
    )
}
 
export default Nav;