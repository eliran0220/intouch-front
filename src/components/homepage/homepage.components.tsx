import  '../../css/homepage.css';
import Login from '../../components/homepage/login';
import BgVideo from '../homepage/background-video';
import CreateAccount from '../homepage/create-account';
import Signup from '../homepage/signup';
import {isAuthenticated} from '../../utilitis/general-utilitis';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const is_authenticated = await isAuthenticated();
            console.log(is_authenticated)
            if (is_authenticated) {
                navigate('profile');
            }
        })();
    }, []);
    return (
        <div className = "homepage-container">
            <Signup></Signup>
            <CreateAccount></CreateAccount>
            <Login></Login>
            <BgVideo></BgVideo>
        </div>

    );
};

export default Homepage;