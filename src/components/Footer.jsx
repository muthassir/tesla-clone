import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
return (
    <div className='bg-black text-white flex justify-center'>
          <ul className='md:flex py-6 gap-5 text-center'>
              <li>Tesla &#169; {year}</li>
              <li>Privacy & Legal</li>
              <li>Vehicle Recalls</li>
              <li>Contact</li>
              <li>News</li>
              <li>Get Updates</li>
              <li>Locations</li>
          </ul>
    </div>
)
}

export default Footer;