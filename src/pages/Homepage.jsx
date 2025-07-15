import React,{useEffect,useState} from "react";
import MemeCard from "../component/card";
import {getAllMeme} from "../api/index"

const HomePage=()=>{
    const [meme,setMeme]=useState([]);
          useEffect(()=>{
            getAllMeme()
            .then(meme=>setMeme(meme.data.memes));
        },[])
        console.log(meme);
    return (
        <div className="row">
            {
                meme.map(el=><MemeCard img={el.url} title={el.name}/>)
            }
        </div>
  
   
    )
    

}

export default HomePage;