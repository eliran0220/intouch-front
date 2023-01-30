import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import  '../css/homepage.css';
import Homepage from '../components/homepage/homepage.components';
import ProfilePage from '../components/profile/profile-page';
import Settings from '../components/settings/settings';
import Lead from '../components/lead/lead';
const App = () => {
  return (
      <Router>
        <Routes>
          <Route path = '/' element = {<Homepage/>}/>
          <Route path = '/profile' element = {<ProfilePage/>}/>
          <Route path = '/settings' element = {<Settings/>}/>
          <Route path = '/lead/:username' element = {<Lead/>}/>
        </Routes>
      </Router>
  );
};

export default App;
