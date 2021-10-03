import React, {useState, useEffect} from 'react';
import './index.css';

const LoginHackaton = () => {
    const loginSystem = (e) => {
        e.preventDefault();
        //console.log(e);
        let username = document.getElementsByName('username')[0].value;
        if (username){
          alert(username);  
        }
    }

    return(
        <div className="loginForm col">
            <div className="row">
                <p>Sign up for out beta list to learn more.</p>
            </div>
            <div className="row">
                <form name="loginForm" action="." method="POST" className="col">
                    <div className="row">
                        <input className="form-control col-flex-8" autoComplete="off" name="username" placeholder="Enter your email" required/>
                        <button className="submit-button form-control last col-flex-4" onClick={(e) => loginSystem(e)}>GET STARTED</button> 
                    </div>
                </form>    
            </div>
        </div>
    )
}

export default LoginHackaton;