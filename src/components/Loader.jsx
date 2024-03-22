import React from 'react'
import load from '../assets/tesla-loading-wheel-3.gif'

const Loader = () => {
  return (
    <div className='w-full h-screen text-6xl bg-white flex justify-center items-center absolute top-0 z-30'>
         <img src={load} className='h-36 w-36'/>
    </div>
  )
}

export default Loader;