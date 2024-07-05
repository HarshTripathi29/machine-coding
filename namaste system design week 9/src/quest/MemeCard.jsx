import React from 'react'
import './Shimmer.css'

const MemeCard = ({data}) => {
  return (
    <div>
      <div className='card-container'>
        <img src={data.url} className='card-img'/>
        <p>{data.title}</p>
        <p>{data.author}</p>
      </div>
    </div>
  )
}

export default MemeCard
