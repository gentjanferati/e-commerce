import React, {useState} from 'react';
import './signin.styles.css';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { currentUser } from '../../redux/actions';


function SignIn(prop){
    const userInfo = useSelector(state => state.currentUser.user)

    console.log(userInfo)
    const [show_input, setShow_input] = useState(false);
    const [togleSignUp, setTogleSignUp] = useState(false);
    const getShow_input = (e)=>{
            const valueSelector = e.target.checked;
            setShow_input(valueSelector);
            console.log("showww" + show_input);
    }
const dispatch = useDispatch();

const submitHandlerLogIn = e =>{
    e.preventDefault()
    console.log(logInState)
    axios.post('https://spring-ecommerce-github.herokuapp.com/app/users/login', {email: logInState.email , password: logInState.password})
    .then(res => {
        dispatch(currentUser(res.headers));
    })

}

const [logInState, setlogInState] = useState({ email: "", password: "" });

const handleChangeLogIn = e => {
        const { name, value } = e.target;
        setlogInState(prevState => ({
                ...prevState,
                [name]: value
        }));
    };

 const submitHandlerSignUp = e =>{
        e.preventDefault()
        console.log(signUpState)
        axios.post('https://spring-ecommerce-github.herokuapp.com/app/users', {firstName: signUpState.firstName, lastName: signUpState.lastName, email: signUpState.email, password: signUpState.password, addresses: [{city: signUpState.city, country: signUpState.country, streetName: signUpState.streetName, postalCode: signUpState.postalCode}]})
        .then(res => {
            dispatch(currentUser(res.headers));
        })
    
    }
const [signUpState, setSignUpState] = useState({ firstName: "", lastName: "", email: "", password: "", city: "", country: "", streetName: "", postalCode:""});

const handleChangeSignUp = e => {
        const { name, value } = e.target;
        setSignUpState(prevState => ({
                ...prevState,
                [name]: value
        }));
    };

    return (
        <div className="signin ">
            <div className="login">
                <form onSubmit={submitHandlerLogIn}>
                <h1>Log In</h1>
            
                <h2>Email</h2>
                <input className="form" type="email" name="email" onChange={handleChangeLogIn}/>
            
                    <div>
                    <h2>Password</h2>
                    <input className="form" name="password" type={show_input?'text':'password'} onChange={handleChangeLogIn}/>
                    <input type="checkbox" onClick={getShow_input}/>
                    </div>
                    <div>

                    <input type="submit" value="submit"/>

                    <h2 onClick={() => {setTogleSignUp(!togleSignUp)}} >{togleSignUp ? "I just wanna login" : "Create account"}</h2>
                    </div>
                </form>
            </div>

            {togleSignUp ? 
            <div className="signup">
            <form onSubmit={submitHandlerSignUp}>
            <h1>Sign Up</h1>
            <h2>Emri</h2>
            <input className="form" type="text" name="firstName" onChange={handleChangeSignUp}/>
            <h2>Mbiermi</h2>
            <input className="form" type="text" name="lastName" onChange={handleChangeSignUp}/>
            
            <h2>Email</h2>
            <input className="form" type="email" name="email" onChange={handleChangeSignUp}/>
        
            <div>
                <h2>Password</h2>
                <input className="form" name="password" type={show_input?'text':'password'} onChange={handleChangeSignUp}/>
                <input type="checkbox" onClick={getShow_input}/>
                <h2>Confirm Password</h2>
                <input className="form" name="confirmpassword" type={show_input?'text':'password'} onChange={handleChangeSignUp}/>
                <input type="checkbox" onClick={getShow_input}/>
            </div>
            <h2>Qyteti</h2>
            <input className="form" name="city" type="text" onChange={handleChangeSignUp}/>
            <h2>Shteti</h2>
            <input className="form" name="country" type="text" onChange={handleChangeSignUp}/>
            <h2>Rruga</h2>
            <input className="form" name="streetName" type="text" onChange={handleChangeSignUp}/>
            <h2>Posta</h2>
            <input className="form" name="postalCode" type="text" onChange={handleChangeSignUp}/>
           
            <div>
                <input type="submit" value="submit"/>
            </div>
            </form>
            </div>
            : ""
            }
        

        </div>
    )
}

export default SignIn;