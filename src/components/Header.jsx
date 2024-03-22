import React, { useState } from 'react'
import teslaLogo from '../assets/tesla-logo-png-2244.png'
import { GoQuestion } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-router-dom';

const Header = () => {
   const[state, setState] = useState(false);

  return (
    <div className='header' >
      <div className='absolute top-0 w-full text-white  hover:bg-white hover:text-black z-10'>
         <div className='flex p-5 justify-between ' >
            <img src={teslaLogo} alt='logo' className='h-4 ml-1 mt-3' />
            <ul className='md:flex hidden gap-7'>
                  <Link to="/vehicles"><li>Vehicles</li></Link> 
                  <Link to="/energy"><li>Energy</li></Link>
                  <Link to="/charging"><li>Charging</li></Link>
                  <Link to="/discover"><li>Discover</li></Link>
                  <Link to="shop"><li>Shop</li></Link>
            </ul>    
            <div className='md:flex hidden  gap-3 '>
                  <button > <GoQuestion size={25}/></button>
                  <button><TbWorld size={25}/></button>
                  <button ><Link to="/account"><IoMdContact size={25}/></Link></button>
            </div>

        {/* mobile view */}
    {state && 
        <div className='md:hidden flex flex-col mt-12 '>
            <ul className='flex flex-col  gap-7 rounded'  onClick={()=>setState(!state)}>
                  <Link to="/vehicles"><li>Vehicles</li></Link>
                  <Link to="/energy"> <li>Energy</li></Link>
                  <Link to="/charging"><li>Charging</li></Link>
                  <Link to="/discover"><li>Discover</li></Link>
                  <Link to="shop"><li>Shop</li></Link>
            </ul>
            <div className='flex flex-col gap-3 py-3' onClick={()=>setState(!state)}>
                 <button className='flex flex-row'><TbWorld size={25}/>United States</button>
                 <Link to='/account'><button className='flex flex-row'><IoMdContact size={25}/>Account</button></Link>
            </div> 
        </div>}
             <button onClick={()=>setState(!state)} className='flex md:hidden transparent-btn h-7'>Menu</button>
          </div>
      </div>
    </div>
  )
}

export default Header;