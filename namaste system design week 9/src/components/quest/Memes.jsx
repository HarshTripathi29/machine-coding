import React, {useEffect, useState} from 'react'
import axios from 'axios'
import MemeCard from './MemeCard';
import './Shimmer.css'
import ShimmerUI from './ShimmerUI';

const Memes = () => {

  // shimmer ui not working if the memes is set to an empty array []. set it to null
    const[memes, setMemes] = useState([]);
    const[showShimmer, setShowShimmer]=useState(false);

    // when the page loads, useEffect calls the API for the first and only time  
    useEffect(()=>{
        fetchMemes();

        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    },[]);

    const handleScroll=()=>{
      if(window.scrollY+window.innerHeight>=document.body.scrollHeight){
        console.log("reached the end => fetch more data");
        // call the fetchMemes when we reach the end of the page
        fetchMemes();
      }
    }

    const fetchMemes =async()=>{
      setShowShimmer(true);
        const response = await axios.get('https://meme-api.com/gimme/20');
        // getting the memes in response
        console.log(response);
        console.log(response.data);
        
        setShowShimmer(false);

        setMemes((memes)=>[...memes, ...response.data.memes]);
        // just after setting the state it will be an empty array since it is an async method. 
        console.log(memes);
    }

  return (
   
      <div className='outer-container'>
        {
        memes.map((meme, index)=> <MemeCard key={index} data={meme}/>
        )}
        {showShimmer && <ShimmerUI/>}
      </div>
  )
}

export default Memes
