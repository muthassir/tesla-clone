import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/wp4318716-tesla-model-3-wallpapers.jpg'
import img2 from '../assets/wp4318719-tesla-model-3-wallpapers.jpg'
import img3 from '../assets/aerial-view-private-house-with-solar-panels-roof.jpg'
import Footer from './Footer'


const Img = ({shareData}) => {
  return (
       <div className=' h-screen'>
           <div>
              <img src={img1} className='h-screen w-full object-cover' />          
           <div className='absolute  text-black flex flex-col justify-center items-center w-full '>
                <h1 className='md:text-5xl text-2xl mt-32'>Model S</h1>
                <p className='md:text-3xl' >Lease starting at $329/mo*</p>
                   <div className='md:mt-60 mt-64'>
                       <div className='md:mt-44 flex md:flex-row flex-col justify-between  p-10 md:gap-16'>
                       <button className=' rounded bg-white text-black h-10 text-1xl px-16  mb-2' onClick={()=>shareData('Model S')}><Link to='/order'>Custom Order</Link> </button>
                       <button className=' rounded transparent-btn text-white h-10 text-1xl px-16 md:w-56 '>Demo Drive</button>
                       </div>
                   </div>
           </div>
        </div>
           <div>
              <img src={img1} className='h-screen w-full object-cover' />       
            <div className='absolute text-black flex flex-col justify-center items-center w-full '>
                <h1 className='md:text-5xl text-2xl mt-2'>Model X</h1>
                <p className='md:text-2xl' >From $68,590*</p>
                <span>After Federal Tax Credit & EST. Gas Savings</span>
                   <div className='mt-64'>
                       <div className='md:mt-60 flex md:flex-row flex-col justify-between md:p-0 p-10 '>
                       <button className=' rounded bg-white text-black h-10 text-1xl px-16  mb-2' onClick={()=>shareData('Model X')}><Link to='/order'>Custom Order</Link> </button>
                       <button className=' rounded transparent-btn text-white h-10 text-1xl px-16 md:w-56 '>Demo Drive</button>
                   </div>
                       <p className='mt-9 md:ml-1 ml-9 text-white'>*Excludes taxes and fees with price subject to change. Available in select states. See Details</p>
                  </div>
              </div>
            </div>
            <div>
                <img src={img2} className='h-screen w-full object-cover' />            
            <div className='absolute text-black flex flex-col justify-center items-center w-full '>
                        <h1 className='md:text-5xl text-2xl mt-2'>Solar Panels</h1>
                        <p className='md:text-2xl border-b' >Schedule a Virtual Consultation</p>
                          <div className='mt-64'>
                            <div className='md:mt-60 flex md:flex-row flex-col justify-between md:p-0 p-10'>
                              <button className=' rounded bg-white text-black h-10 text-1xl px-16  mb-2' onClick={()=>shareData('Solar Panel')}><Link to='/order'>Order Now</Link> </button>
                              <button className=' rounded transparent-btn text-white h-10 text-1xl px-16 md:w-56 '>Learn More</button>
                            </div>
                              <p className='mt-9 md:ml-1 ml-9 '>*Excludes taxes and fees with price subject to change. Available in select states. See Details</p>
                          </div>
            </div>
          </div>
        <img src={img3} className='h-screen w-full object-cover' />
        <Footer />
      </div>

  )
}

export default Img;