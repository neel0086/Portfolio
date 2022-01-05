import React from 'react'
import './App.css';
import Profile from './Container/Home/Profile';
import NavBar from './Container/NavBar/NavBar';
import ContactInfo from './Container/ContactInfo';
import Projects from './Container/Projects';
import TalkMe from './TalkMe'
import {BrowserRouter as Router,Route,  Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Routes>
        
        <Route path="/Profile" element={<Profile/>}>
          
        </Route>
      </Routes>
      <Routes>
        <Route path="/Projects" element={<Projects/>}>
          
        </Route>
      </Routes>
      
      <Routes>
        <Route path="/ContactInfo" element={<ContactInfo/>}>
        </Route>
      </Routes>
      <TalkMe />
    </Router>
   
    </div>
  );
}

export default App;
