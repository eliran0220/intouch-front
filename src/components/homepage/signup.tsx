import  '../../css/homepage.css';
import {toggleCreateAccount,handleSignupMessage,parseErrosSignup} from '../../utilitis//components/homepage';
import {apiSignupRequest} from '../../controllers/homepage';
import {useDispatch, } from 'react-redux';
import  { useState } from "react";
import { AxiosResponse } from '../../models/http-requests.models';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [first_name, setFirstname] = useState("");
    const [last_name, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [response_message, setResponseMessage] = useState("");
    const navigate = useNavigate();
    const handleSignup = async (event : any) =>{
        try {
            event.preventDefault();
            const result = await apiSignupRequest(email,first_name,last_name,password) as AxiosResponse;
            setResponseMessage(result.data.message);
            handleSignupMessage();
        } catch (err) {
            const axios_err = err as AxiosResponse;
            setResponseMessage(parseErrosSignup(axios_err.response.data.message));
            handleSignupMessage();
            throw err;  
        }
    }
    const handleExit = (event : any) => {
        event.preventDefault();
        toggleCreateAccount(event);
    }
    return (
        <div className = "popup-container" id = "popup-container">
                <form className = "form-container">
                    <h1>Create an account</h1>
                    <div className= "login-input">
                        <span>Email</span>
                        <input type="email" id = "Email" onChange={e => setEmail(e.target.value)}></input>
                    </div>
                    <div className= "login-input">
                        <span>First name</span>
                        <input type="text" id = "FirstName" onChange={e => setFirstname(e.target.value)}></input>
                    </div>
                    <div className= "login-input">
                        <span>Last name</span>
                        <input type="text" id = "LastName" onChange={e => setLastname(e.target.value)}></input>
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
                <div className = "creation-status-container">
                        <p>{response_message}</p>
                </div>
        </div>

    );
};

export default Signup;