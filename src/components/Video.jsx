import React from 'react'
import ReactPlayer from 'react-player'
import video from "../assets/video.mp4";



const Video = () => {
  return (
    <ReactPlayer
     width="100%"
      height="100%"
       playing={true}
        controls={false}
          loop={true}
          muted={true}
          url={video}
          className="w-full h-full object-cover"
          />
  )
}

export default Video