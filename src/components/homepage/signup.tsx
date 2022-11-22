import  '../../css/homepage.css';
import React, { useState } from "react";;
const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (event : any) =>{
        event.preventDefault();
    }
    return (
        <div className = "popup-container">
                <form className = "form-container">
                    <h1>Create an account</h1>
                    <div className= "login-input">
                        <span>Username</span>
                        <input type="email" id = "Email" onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className= "login-input">
                        <span>First name</span>
                        <input type="email" id = "Email" onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className= "login-input">
                        <span>Last name</span>
                        <input type="email" id = "Email" onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className= "login-input">
                        <span>Password</span>
                        <input type="password" onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <button className="form-button" onClick={handleSignup}>Signup</button>
                </form>
        </div>

    );
};

export default Signup;