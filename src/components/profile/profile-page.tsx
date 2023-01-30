import { useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../../utilitis/general-utilitis';
import { useEffect } from 'react';
import {} from '@fortawesome/free-regular-svg-icons';
import '../../css/profile.css';
import Header from './header';
import Section from './section';
import Navigator from './navigator';
const ProfilePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const is_authenticated = await isAuthenticated();
            console.log(is_authenticated)
            if (!is_authenticated) {
                navigate('/');
            }
        })()
    }, []);
    return (
        <div className = "profile-container">
            <Header/>
            <Navigator/>
            <Section/>
            
        </div>
    );
};

export default ProfilePage;