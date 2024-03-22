import React from 'react'
import img1 from '../assets/Daco_4304509.png'
import img2 from '../assets/pngwing.com (3).png'
import img3 from '../assets/pngwing.com (2).png'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const Energy = () => {
  return (
    <div className='absolute top-16 flex flex-col items-center w-full bg-white'>
       <Link to='/'><button className='  border mt-6' ><FaX /></button></Link> 
         <div className='grid  md:grid-cols-4  mt-8 md:ml-36 gap-5 '>
            <div className='flex flex-col justify-center items-center'>
               <img src={img1} className='h-40 w-40 ' />
               <h2>Solar Roof</h2>
               <p className='bottom-border'>Order</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
               <img src={img2}  className='h-40 w-40'/>
               <h2>PowerWall</h2>
               <p className='bottom-border'>Order</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
               <img src={img3} className='h-40 w-40'/>
               <h2>PowerWall</h2>
               <p className='bottom-border'>Order</p>
            </div>
         </div>
    </div>
  )
}

export default Energy;