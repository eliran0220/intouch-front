import  '../../css/homepage.css';
import {handleExitSignup} from '../../utilitis//components/homepage';
import {apiSignupRequest} from '../../controllers/homepage';
import React, { useState } from "react";;
const Signup = () => {
    const [email, setEmail] = useState("");
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (event : any) =>{
        try {
            event.preventDefault();
            await apiSignupRequest(email,first_name,last_name,password);
        } catch (err: any) {
            console.log(err)
            if (err.response.data.code === 1) {
                console.log("user exists")
            } else {
                console.log('db error')
            }
        }
    }
    const handleExit = (event : any) => {
        event.preventDefault();
        handleExitSignup();
    }
    return (
        <div className = "popup-container">
                <form className = "form-container">
                    <h1>Create an account</h1>
                    <div className= "login-input">
                        <span>Email</span>
                        <input type="email" id = "Email" onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className= "login-input">
                        <span>First name</span>
                        <input type="text" id = "Email" onChange={e => setFirstname(e.target.value)}></input>
                    </div>
                    <div className= "login-input">
                        <span>Last name</span>
                        <input type="text" id = "Email" onChange={e => setLastname(e.target.value)}></input>
                    </div>
                    <div className= "login-input">
                        <span>Password</span>
                        <input type="password" onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                    <button className="form-button" onClick={handleSignup}>Signup</button>
                    <button className="form-button" onClick={handleExit}>Exist</button>
                    </div>

                </form>
        </div>

    );
};

export default Signup;