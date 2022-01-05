import React, { useState } from 'react'
import './NavBar.css'
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [openNav, setOpenNav] = useState(true);
  console.log(openNav)
  // location.pathname.includes('Profile') ? console.log('true'): console.log(9)
  return (
    <div className="trans">
    <div className="web">
      <div className="Nav">
        <div className="logo"><h1>Nothing </h1></div>
        
        <div className='menu-trans'>
          <nav>
            <ul>
              <li>
                <a className={location.pathname.includes('Profile') ? "active": ""} onClick={() => navigate('/Profile')}>Profile</a>
              </li>
              <li>
                <a className={location.pathname.includes('Projects') ? "active": ""} onClick={() => navigate('/Projects')}>Projects</a>
              </li>
              
              
              <li>            
                <a className={location.pathname.includes('ContactInfo') ? "active": ""} onClick={() => navigate('/ContactInfo')}>Contacts</a>
                </li>
                
            </ul>
            
            
          </nav>
        </div>
        </div>
    </div>
    <div className="mobile">
      <div className="Nav">
        <div className="logo"><h1>Nothing </h1></div>
        <div className="toggle" onClick={()=>setOpenNav(!openNav)}><i class="fas fa-grip-lines grip"></i></div>
        <div className='menu-grip' style={{display:`${openNav?'none':'block'}`}}>
          <nav>
            <ul>
              <li>
                <a className={location.pathname.includes('Profile') ? "active": ""} onClick={() => navigate('/Profile')}>Profile</a>
              </li>
              <li>
                <a className={location.pathname.includes('Projects') ? "active": ""} onClick={() => navigate('/Projects')}>Projects</a>
              </li>
              
              
              <li>            
                <a className={location.pathname.includes('ContactInfo') ? "active": ""} onClick={() => navigate('/ContactInfo')}>Contacts</a>
                </li>
                
            </ul>
            
            
          </nav>
        </div>
        </div>
      </div>

    </div>
  )
}

export default NavBar
