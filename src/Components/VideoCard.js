import React from 'react'
import './VideoCard.css';

function VideoCard({data}) {
  return (
    <div className='video-card'>
        <img src={`${data.imgUrl}`} className='movie-img' alt='poster' />
        <div className='title'>{data.title}</div>
        {/* <div>{data.overview}</div> */}
        {/* <div>{data.desc}</div> */}
    </div>
  )
}

export default VideoCard