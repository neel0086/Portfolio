import React from 'react'
import './Python.css'
import VideoPlayer from 'react-video-js-player'
import ReactPlayer from 'react-player'
import Music_play from './Music_play.mp4'
function Javascript() {
  const videoSrc="Music_play.mp4";
  const poster=" "
  return (
    <div className="ProjectMain">
      <div className="py p1">
        <div className="videos">
          {/* <VideoPlayer
            src={videoSrc}
            poster=" "
            width="300px"
            height="200px"
            /> */}
          <ReactPlayer 
            url={Music_play}
            controls={true}
            width="95%"
            height="90%"
          />
        </div>
        <div className="describe"><p>The Music Player just simply works as a music player should with repeat 
            shuffle and song selecting the options.</p>
            <br></br>
            <p>Click here visit my <a href="https://neel0086.github.io/musicplayer/main.html"><i>Music Player</i></a></p>
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

export default Javascript