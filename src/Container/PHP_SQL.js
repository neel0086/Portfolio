import React from 'react'
import './Python.css'
import chatting from './chatting.mp4'
import ReactPlayer from 'react-player';
function PHP_SQL() {
  return (
    <div className="ProjectMain">
      <div className="py p1">
        <div className="videos">
        <ReactPlayer
            url={chatting}
            controls={true}
            width="95%"
            height="90%"
          />
        </div>
        <div className="describe">A Chatting Website with group chats and private chats both and other 
        features like last scene and profile view change status..
        Uploading link soon (As its in php sql so facing issues)
        </div>
      </div>
      <div className="py p2">
      <div className="videos">
          {/* <VideoPlayer
            src={videoSrc}
            poster=" "
            width="300px"
            height="200px"
            /> */}
        </div>
      </div>
      
    </div>
  )
}

export default PHP_SQL