import React from 'react'
import { Link } from 'react-router-dom'
import video from '../assets/video (1080p).mp4'


const varName = 'Model Y'
const Video = ({shareData}) => {
  return (
    <div>
        <div className=' flex items-center justify-center'>
            <video loop={true}  muted={true} autoPlay={true} className=' absolute top-0 left-0 min-w-full min-h-full object-cover '>
                <source src={video} type='video/mp4'/>
            </video>

            <div className='absolute top-16 text-white flex flex-col justify-center items-center w-full '>
                <h1 className='md:text-5xl text-2xl mt-2'>Model Y</h1>
                <p className='md:text-3xl' >Lease starting at $379/mo*</p>
            <div className='mt-64'>
                    <div className='md:mt-80 flex md:flex-row flex-col justify-between md:p-0 p-10'>
                        <button className=' rounded bg-white text-black h-10 text-1xl px-16  mb-2 z-10'  onClick={()=>shareData('Model Y')}><Link to='/order' state={varName}>Custom Order</Link> </button>
                        <button className=' rounded transparent-btn text-white h-10 text-1xl px-16 z-10 md:w-56 '>Demo Drive</button>
                    </div>
                            <p className='mt-9 md:ml-1 ml-9'>*Excludes taxes and fees with price subject to change. Available in select states. See Details</p>
            </div>
            </div>
        </div>      
    </div>
  )
}

export default Video;