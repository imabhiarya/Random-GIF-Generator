import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
// import process from "process";

const API_KEY = import.meta.env.VITE_GIFY_API_KEY;

function Random() {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  
  async function fetchData() {
        setLoading(true);
        const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized_large.url;
        // console.log(imageSource);
        setGif(imageSource);
        setLoading(false)
    }
    useEffect( () => {
        fetchData();
    }, [])
    

  function clickHandler() {
        fetchData();
  }

  return (
    <div className="bg-[#534B62] w-1/2 h-[400px] rounded-lg flex flex-col border border-white items-center pt-5">
      <h1 className="uppercase underline font-bold mb-2 text-2xl">
        a random gif
      </h1>
      {
        loading ? (<Spinner />) : (<img src={gif} alt="" className="h-[280px] mb-1 rounded" />)
      }
      
      <button
        className="w-7/12 bg-white text text-black font-semibold p-2 rounded-md"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
