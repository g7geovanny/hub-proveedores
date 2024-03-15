import React from 'react'
import ReactPlayer from 'react-player'
import video from "../assets/miVideo.mp4";



const Video = () => {
  return (
    <ReactPlayer
     width="100%"
      height="100%"
       playing={true}
        controls={true}
        loop={true}
        muted={true}
          url={video} />
  )
}

export default Video