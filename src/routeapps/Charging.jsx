import React from 'react'
import img1 from '../assets/electric-vehicle-car-battery-charger-nissan-leaf-charging-station-car-ce189a4abed68273c53accf1ce7cf06c.png'
import img2 from '../assets/IMG_20240212_113302.png'
import img3 from '../assets/tesla-motors-electric-vehicle-car-tesla-model-s-tesla-roadster-car-95b585d8cb687d0e2d246b67c06f3cbc.png'
import img4 from '../assets/tesla-model-s-tesla-motors-battery-charger-electric-vehicle-car-tesla-charging-0dbe2dbee84c881cdccbd919d3e3e080.png'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const Charging = () => {
  return (
    <div className='absolute top-16 flex flex-col justify-center items-center w-full bg-white'>
        <Link to='/'><button className='flex ml-100 items-end border mt-6' ><FaX /></button></Link> 
          <div className='grid justify-center md:grid-cols-2 item-center mt-8'>
                <div className='flex flex-col justify-center items-center'>
                     <img src={img1} className='h-40 w-40' />
                     <h2>Charging</h2>
                     <p className='bottom-border'>Learn</p>
                </div>
               <div className='flex flex-col justify-center items-center'>
                     <img src={img2} className='h-40 w-40 ml-7'  />
                     <h2>Charging</h2>
                     <p className='bottom-border'>Learn</p>
               </div>
               <div className='flex flex-col justify-center items-center'>
                     <img src={img3} className='h-40 w-40' />
                     <h2>Charging</h2>
                     <p className='bottom-border'>Learn</p>
               </div>
               <div className='flex flex-col justify-center items-center'>
                     <img src={img4}  className='h-40 w-40' />
                     <h2>Charging</h2>
                     <p className='bottom-border'>Learn</p>
               </div>
          </div>
    </div>
  )
}

export default Charging;