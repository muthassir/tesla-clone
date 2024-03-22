import React from 'react'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Discover() {
  return (
          <div className='absolute top-20 w-full flex  justify-center items-center flex-col'>
            <Link to='/'><button className='flex ml-100 items-end border'><FaX /></button></Link>
            <div className=' bg-white md:flex justify-center gap-28 md:mt-28 mt-16'>
      {/* 1st */}
                <div>
                  <ul>
                    <li className='text-2xl'>Resources</li>
                    <li className='mt-4'>Demo Drive</li>
                    <li>Insurance</li>
                    <li>Video Guides</li>
                    <li>Customer Stories</li>
                    <li>Events</li>
                  </ul>
                </div>
      {/* 2nd */}
                <div>
                  <ul>
                    <li className='text-2xl md:mt-0 mt-5'>Location Services</li>
                    <li className='mt-4'>Demo Drive</li>
                    <li>Insurance</li>
                    <li>Video Guides</li>
                    <li>Customer Stories</li>
                  </ul>
                </div>
      {/* 3rd */}
                <div>
                  <ul>
                    <li className='text-2xl md:mt-0 mt-5'>Company</li>
                    <li className='mt-4'>Demo Drive</li>
                    <li>Insurance</li>
                    <li className='md:mb-0 mb-5'>Video Guides</li>
                  </ul>
                </div>
            </div>
          </div>
          
   
  )
}

export default Discover;