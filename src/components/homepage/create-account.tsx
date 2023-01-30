import  '../../css/homepage.css';
import {toggleCreateAccount} from '../../utilitis/components/homepage';
const CreateAccount = () => {
    const popupSignup = (event: any) => {
        toggleCreateAccount(event);

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