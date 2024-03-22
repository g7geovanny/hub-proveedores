import React from 'react'
import ReactPlayer from 'react-player'
import video from "../assets/nuevoVideo.mp4";



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
         style={{ 
          position: "absolute",
          top: "0",
          left:"0",
        
          objectFit: "cover",
             }}
          />
  )
}

export default Video