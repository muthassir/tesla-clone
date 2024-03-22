import React from 'react'
import img1 from '../assets/pngimg.com - tesla_car_PNG14.png'
import img2 from '../assets/pngimg.com - tesla_car_PNG30.png'
import img3 from '../assets/pngimg.com - tesla_car_PNG47.png'
import img4 from '../assets/pngimg.com - tesla_car_PNG14.png'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const Vehicles = () => {
  return (
    <div className='absolute top-16 flex flex-col justify-center items-center w-full bg-white'>
         <Link to='/'><button className='flex ml-100 items-end border mt-6' ><FaX /></button></Link> 
         <div className='grid justify-center md:grid-cols-2 items-center mt-8'>
                {/* 1 */}
                <div className='flex flex-col justify-center items-center'>
                        <img src={img1} className='h-40'/>
                        <h2>Model S</h2>
                        <p className='bottom-border'>Learn</p>
                </div>
                {/* 2 */}
                <div className='flex flex-col justify-center items-center'>
                        <img src={img2}  className='h-40'/>
                        <h2>Model Y</h2>
                         <p className='bottom-border'>Learn</p>
                </div>
                {/* 3 */}
                <div className='flex flex-col justify-center items-center'>
                        <img src={img3} className='h-40'/>
                        <h2>Model X</h2>
                        <p  className='bottom-border'>Learn</p>
                </div>
                {/* 4 */}
                <div className='flex flex-col justify-center items-center'>
                        <img src={img4} className='h-40' />
                        <h2>Model 3</h2>
                        <p  className='bottom-border'>Learn</p>
                </div>
         </div>
  </div>
  )
}

export default Vehicles;