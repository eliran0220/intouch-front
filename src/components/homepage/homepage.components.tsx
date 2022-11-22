import  '../../css/homepage.css';
import Login from '../../components/homepage/login';
import BgVideo from '../homepage/background-video';
import CreateAccount from '../homepage/create-account';
import Signup from '../homepage/signup';
import React from "react";;
const Homepage = () => {
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