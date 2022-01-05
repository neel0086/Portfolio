import React from 'react'

import './Profile.css';
function Profile() {
  return (
     <div>
    <div className="container">
    <div className="profile_main">
            <div className="profile_details wid">
                <div className="social">
                    <a href="https://www.instagram.com/neelmehta08/"><span><i class="fab fa-instagram" /></span></a>
                    <a href="https://www.linkedin.com/in/neel-mehta-71857b1bb/"><span><i class="fab fa-linkedin" /></span></a>
                    <a href="https://github.com/neel0086"><span><i class="fab fa-github" /></span></a>
                </div>
                <div className="name">
                    <i><span style={{fontFamily:"Estonia"}}>HOLA, I'am <i><b style={{color:"#000"}}>NEEL</b></i></span></i>
                </div>
                <div className="skill">
                    <div className="skill-wraper">
                        <div className="skill_detail">Web Devloper</div>
                        <div className="skill_detail">Python Programmer</div>
                        
                    </div>
                </div>
                <span style={{fontFamily:"Audiowide",fontSize:"20px"}}>Be irreplaceable,Be Different</span>
            </div>
            <div className="profile_image wid">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFPXzlRLTWgQA/profile-displayphoto-shrink_800_800/0/1627638501440?e=1643241600&v=beta&t=5sK0UsyZqVdxxdrXHmTt-xEaMFcJc2gq_W_7dFCsc1Y" ></img>
            </div>
            
        </div>
        
    </div>
    </div> 
  )
}

export default Profile
