import React from 'react'
import img1 from '../assets/tesla-motors-electric-vehicle-car-tesla-model-s-tesla-roadster-car-95b585d8cb687d0e2d246b67c06f3cbc.png'
import img2 from '../assets/tire (1).png'
import img3 from '../assets/cap.png'
import img4 from '../assets/bag.jpg'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


const Shop = () => {
  return (
    <div className='absolute top-16 flex flex-col justify-center items-center w-full bg-white mt-8'>
      <Link to='/'><button className='flex ml-100 items-end border' ><FaX /></button></Link> 
         <div className='grid justify-center md:grid-cols-4 item-center mt-8'>
           {/* img1 */}
              <div className='flex flex-col text-center'>
                  <img src={img1} className='h-40 w-40' />
                      <h2>Charging</h2>
              </div >
           {/* 1mg2 */}
              <div className='flex flex-col text-center md:mt-0 mt-5'>
                  <img src={img2} className='h-40 w-46'  />
                      <h2>Accessories</h2>
              </div>
            {/* img3 */}
              <div className='flex flex-col text-center md:mt-0 mt-5' >
              <img src={img3} className='h-40 w-40' />
                      <h2>Apparel</h2>
              </div>
            {/* img4 */}
              <div className='flex flex-col text-center md:mt-0 mt-5'>
              <img src={img4}  className='h-40 w-40' />
                      <h2>Lifestyle</h2>
              </div>
          </div>
    </div>
  )
}

export default Shop;