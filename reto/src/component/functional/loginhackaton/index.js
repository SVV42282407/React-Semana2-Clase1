import React, {useState, useEffect} from 'react';
import './index.css';

const LoginHackaton = () => {
    const loginSystem = (e) => {
        e.preventDefault();
        //console.log(e);
        console.log(document.getElementsByName('username')[0].value);
    }

    return(
        <div className="loginForm row">
            <p>Sign up for out beta list to learn more.</p>
            <form name="loginForm" action="." method="POST">
                <div className="row">
                    <input className="form-control" autoComplete="off" name="username" placeholder="Username" required/>
                    <button className="submit-button form-control" onClick={(e) => loginSystem(e)}>GET STARTED</button> 
                </div>
            </form>
        </div>
    )
}

export default LoginHackaton;