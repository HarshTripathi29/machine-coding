import React from 'react'
import './Shimmer.css'

const ShimmerUI = () => {
    console.log('shimmer component')
  return Array(10).fill(0).map((meme, i)=>(
    <div key={i} className='card-container'>
        <div className='shimmer-card-img'></div>
    </div>
  )
  )
}

export default ShimmerUI
