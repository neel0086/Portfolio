import React from 'react'
import './Python.css'
import Codechef from './Codechef.mp4'
import ReactPlayer from 'react-player';
function Python() {
  var videoSrc=Codechef;
  const poster=" "
  return (
    <div className="ProjectMain">
      <div className="py p1">
        <div className="videos">
        <ReactPlayer
          className="react-player"
            url={Codechef}
            controls={true}
            width="95%"
            height="90%"
          />
        </div>
        <div className="describe"><p>A voice Assistant with features of sending mails one one command(else automating GMAIL),
            And absolutely normal things like voice command to open particular youtube video or search on google
            And some personal works like opening files on laptop on command
            </p>
        </div>
      </div>
      <div className="py p2">
      <div className="videos">
          {/* <VideoP    */}
        </div>
      </div>
    </div>
  )
}

export default Python
