import { useState } from 'react'
import './App.css'
import Random from './components/Random'
import Tags from './components/Tags'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='background w-full h-full text-white p-5 flex flex-col items-center'>
      <h1 className='w-10/12 py-3 text-center bg-gray-400 font-bold text-3xl rounded-md uppercase font-sans'>Random Gifs</h1>
      <div className='w-full flex flex-col items-center mt-8'>
        <Random />
        <Tags />
      </div>
    </div>
  )
}

export default App
