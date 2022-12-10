import  '../../css/homepage.css';
import {handlePopupSignup} from '../../utilitis/components/homepage';
import React from "react";;
const CreateAccount = () => {
    const popupSignup = () => {
        handlePopupSignup();
    };

    return (
        <div className = "left-container">
            <div className = "create-account-container">
                <h1>Don't have an account yet?</h1>
                <p>Join many others and start connecting</p>
                <button onClick={popupSignup}>Create an account</button>
            </div>
        </div>
    );
};

export default CreateAccount;