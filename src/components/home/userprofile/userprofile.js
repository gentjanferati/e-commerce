import React from 'react';
 import {Link} from 'react-router-dom';


const UserProfile = ()=>{
    return(
        <div className="user-profile">
            <div>
                <Link to={`/orders`}> Orders</Link>
            </div>
        </div>
    )
}
export default UserProfile;