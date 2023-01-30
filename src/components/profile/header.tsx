
import { useState } from 'react';
import {} from '@fortawesome/free-regular-svg-icons';
import {faMagnifyingGlass,faBell} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../css/profile.css';
import user_logo from '../../assets/profile/user.png';
import '../../css/profile-header.css';
import { getSearchedUsers} from '../../controllers/profile';
import {User} from '../../models/general-models';
const Header = () => {

    const [filtered, setFiltered] = useState<User[]>([])
    const [hasSearched, setHasSearched] = useState<boolean>(false);
    const handleSearch = (e: any) => {
        const getQuery = e.target.value;
        if (getQuery.length <= 0) {
            setFiltered([])
            const element = document.getElementsByClassName('active-search-suggetions')[0];
            element.className = "search-suggetions";
            setHasSearched(false);
        } else {
            const result = getSearchedUsers(getQuery);
            if (!hasSearched) {
                const element = document.getElementsByClassName('search-suggetions')[0];
                element.className = "active-search-suggetions";
                setHasSearched(true)
            }
            result.then((data: User[]) => {
                setFiltered(data)
            })
        }
    }

    const handleProfileOptions = (e: any) => {
        document.getElementById('myDropdown')?.classList.toggle("show");
    }
    return (
        <header className = "header">
            <div className="left-panel">
                <div className="intouch-text">
                    <h1>inTouch</h1>
                </div>
                <div className="search-container">
                    <div className="search">
                        <input className = "input" type = "text" placeholder='Search' autoComplete='chrome-off' id="options" onChange = {handleSearch}></input>
                        <div className="search-suggetions">
                            {filtered.length > 0 &&filtered.map((user: User,index: number) => (
                                <div className="suggestion">
                                    <img className = "profile-pic" src={user_logo} alt=""/>
                                    <button>{user.full_name}</button> 
                                 </div>
                            ))}
                        </div>
                    </div>
                    <FontAwesomeIcon className = "search-icon" icon = {faMagnifyingGlass}/>

                </div>
            </div>
            <div className="right-panel">
                <div className="right-profile-container">
                    <div className="notifications">
                        <FontAwesomeIcon icon = {faBell} style ={{color:'#0082c8'}}/>
                    </div>
                    <div className="profile">
                        <img className = "profile-pic" src={user_logo} onClick = {handleProfileOptions}/>
                    </div>
                    <div id="myDropdown" className="dropdown-content">
                            <button>hi</button>
                            <button>hi</button>

                        </div>
                </div>



            </div>
        </header>
    );
};

export default Header;