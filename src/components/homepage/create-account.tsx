import  '../../css/homepage.css';
import React from "react";;
const CreateAccount = () => {
    const popupSignup = () => {
        const popup_container = document.getElementsByClassName("popup-container")[0];
        const left_container = document.getElementsByClassName("left-container")[0];
        const right_container = document.getElementsByClassName("right-container")[0];
        const bg_vid = document.getElementsByClassName("video-container")[0];
        popup_container.className = "active-popup-container";
        left_container.classList.add("blured");
        right_container.classList.add("blured")
        bg_vid.classList.add("blured")


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