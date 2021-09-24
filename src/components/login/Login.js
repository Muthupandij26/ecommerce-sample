import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className = "login">
            <Link to = "/">
                <img 
                className = "login__logo"
                src = "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" 
                alt = "" 
                />
            </Link>
            <div className="login__container">
                <h1> Sign in </h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type = "email" />
                    <h5>Password</h5>
                    <input type = "password" />
                    <button className = "login__sign" type = "submit" > Sign in</button>
                </form>
                    {/* <Link to = "/reg"> */}
                    <button className = "login__reg" >Create an Account</button>
                    {/* </Link> */}
            
            </div>
        </div>
    )
}

export default Login
