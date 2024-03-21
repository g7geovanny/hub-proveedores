import React from 'react'
import ReactPlayer from 'react-player'
import video from "../assets/video.mp4";



const Video = () => {
  return (
    <ReactPlayer
    height="100%"
    width="100%"
       playing={true}
        controls={false}
          loop={true}
          muted={true}
          url={video}
         style={{objectFit: "contain", width:"100%", height: "100%", display: "flex"}}
          />
  )
}

export default Video