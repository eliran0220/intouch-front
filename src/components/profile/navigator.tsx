import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../utilitis/general-utilitis';
import { useEffect } from 'react';
import {faHashtag,faUserGroup} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import user_logo from '../../assets/profile/user.png';
import '../../css/profile-navigator.css';
import { apiLogoutRequest } from '../../controllers/homepage';
import '../../css/profile-navigator.css';
const Navigator = () => {
    const navigate = useNavigate();
    const handleLogout = async (event: any) => {
        event.preventDefault();
        await apiLogoutRequest();
        navigate('/');
    }
    return (
        <div className = "navigator">
            <div className="sidebar-item">
                <img className = "profile-pic" src={user_logo} alt=""/>
            </div>
            <div className="sidebar-item">
                <FontAwesomeIcon icon = {faHashtag} style ={{color:'#0082c8'}}/>
                <p>Feed</p>
            </div>
            <div className="sidebar-item">
                <FontAwesomeIcon icon = {faUserGroup}  style ={{color:'#0082c8'}}/>
                <p>Friends</p>
            </div>

            <hr style={{width:'25%'}}/>
            <div className="sidebar-item">
                    <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Navigator;