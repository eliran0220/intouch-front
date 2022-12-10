import  '../../css/homepage.css';
//import { FaUser,FaLock } from "react-icons/fa";
import React,{ useState } from 'react';
import {apiLoginRequest} from '../../controllers/homepage';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (event : any) =>{
        try {
            event.preventDefault();
            await apiLoginRequest(email, password);
        } catch (error) {
            throw error;
        }
    }
    return (
        <div className = "right-container">
            <div className = "login-container">
                <form className = "form-container">
                    <h1>Login</h1>
                    <div className= "login-input">
                        <span>Username</span>
                        <input type="email" id = "Email" onChange={e => setEmail(e.target.value)}></input></div>
                    <div className= "login-input">
                        <span>Password</span>
                        <input type="password" onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <button className="form-button" onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;