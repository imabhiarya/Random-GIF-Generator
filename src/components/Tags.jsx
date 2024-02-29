import React, { useState ,useEffect } from "react";
import Spinner from "./Spinner";
import axios from "axios";



const API_KEY = import.meta.env.VITE_GIFY_API_KEY;

function Tags() {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);
  const [tag, setTag] = useState("");

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    // console.log(imageSource);
    setGif(imageSource);
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  function changeHandler(ev) {
      setTag(ev.target.value);
  }
  return (
    <div className="bg-gray-500 w-1/2 h-[450px] rounded-lg flex flex-col border border-white items-center pt-5 my-8">
      <h1 className="uppercase underline font-bold mb-2 text-2xl">
        random {tag} gif
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="" className="h-[280px] mb-1 rounded" />
      )}
      <input
        // type="text"
        onChange={changeHandler}
        value={tag}
        className="w-7/12 bg-white text text-black font-semibold p-2 rounded-md mb-2 text-center"
        placeholder="Search For GIF using tag"
      />
      <button
        className="w-7/12 bg-white text text-black font-semibold p-2 rounded-md"
        onClick={clickHandler}
      >
        Generate
      </button>
    </div>
  );
}

export default Tags;
