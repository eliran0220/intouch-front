import  '../../css/homepage.css';
import { useState } from 'react';
import {apiLoginRequest} from '../../controllers/homepage';
import {useDispatch} from 'react-redux';
//import {login} from '../../redux/dispatchers';
//import {State} from '../../redux/utilitis';
import { useNavigate } from 'react-router-dom';
import { AxiosResponse } from '../../models/http-requests.models';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogin = async (event : any) =>{
        try {
            event.preventDefault();
            const result = await apiLoginRequest(email, password) as AxiosResponse;
            if(result.data.status === 200) {
                console.log(result);
                const full_name = result.data.data.full_name;
                const user_id = result.data.data.user_id;
                //dispatch<any>(login(email));
                localStorage.setItem('full_name',JSON.stringify(full_name));
                localStorage.setItem('user_id',JSON.stringify(user_id));
                localStorage.setItem('user_email',email);
                localStorage.setItem('is_logged_in','true');
                navigate('/profile')
            } else {
                console.log("error!")
            }
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