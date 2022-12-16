import  '../../css/homepage.css';
import { useState } from 'react';
import {apiLoginRequest} from '../../controllers/homepage';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../redux/dispatchers';
import {State} from '../../redux/utilitis';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const selector = useSelector((state: State) => state.user.email);
    const handleLogin = async (event : any) =>{
        try {
            event.preventDefault();
            console.log("going in")
            const result = await apiLoginRequest(email, password);
            console.log(result)
            dispatch<any>(login(email));
            console.log(selector)
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