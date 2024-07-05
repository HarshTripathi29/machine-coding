import React, {useEffect, useState} from 'react'
import axios from 'axios'
import MemeCard from './MemeCard';
import './Shimmer.css'

const Shimmer = () => {

    const[memes, setMemes] = useState(null);

    // when the page loads, useEffect calls the API for the first and only time  
    useEffect(()=>{
        fetchMemes();
    },[]);

    const fetchMemes =async()=>{
        const response = await axios.get('https://meme-api.com/gimme/20');
        // getting the memes in response
        console.log(response);
        console.log(response.data);
        setMemes(response.data.memes);
        // just after setting the state it will be an empty array since it is an async method. 
        console.log(memes);
    }

  return (
    <div>
      <div className='outer-container'>
        {!memes? 
        (<ShimmerUI/>):
        (memes.map((meme, index)=> <MemeCard key={index} data={meme}/>))
        }
      </div>
    </div>
  )
}

export default Shimmer
