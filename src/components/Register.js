import React from 'react'
import { Link } from 'react-router-dom';

function Register() {


    return (
        <div className = "login">
            <Link to = "/reg">
                <img 
                className = "login__logo"
                src = "http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" 
                alt = "" 
                />
            </Link>
            <div className="login__container">
                <h1> Register </h1>
                <form >
                    <h5> Name </h5>
                    <input type = "text" 
                       
                    />
                    <h5>E-Mail</h5>
                    <input type = "email" 
                       
                    />
                    <h5>Password</h5>
                    <input type = "password" 
                       
                    />
                    <button className = "login__sign" type = "submit" > Submit</button>
                </form>
                    
                    {/* <button className = "login__reg" ></button> */}
            
            </div>
        </div>
    )
}

export default Register
