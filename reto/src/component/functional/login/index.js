import React, {useState, useEffect} from 'react'
import './index.css'

const LoginForm = () => {
    const [name, setName] = useState('');
    const [isMessage, setMessage] = useState(false);

    const handleChange = (event) => {
        setName(event.target.value);
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          if (name){
            console.log(name);
            setMessage(true);
            // Send Axios request here 
          }
        }, 3000)
    
        return () => clearTimeout(delayDebounceFn)
      }, [name])

    return (
        <div className="loginform-container">

            { isMessage &&  
                <div className="messageBar">
                    <span>Welcome home, {name}</span>
                </div>
            }

            <div className="loginForm">
                <form>
                    <input name="username" className="username" placeholder="Username" required onChange={event => handleChange(event)}/>
                    <input name="password" className="password" placeholder="Password" required/>
                    <button type="button" className="submitButton">SIGN IN</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;