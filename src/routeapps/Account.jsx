import React from 'react'
import { useState } from 'react';
import { TbWorld } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';

const Account = () => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const navigate = useNavigate()

    const login = async (e)=>{
        e.preventDefault()
        if(!email || !password){
            alert("enter fields")
        }else{
            setEmail('');
            setPassword('');
            navigate('/');
        }        
    }

  return (
    <div>
        <div className='absolute top-0 left-0 z-20 white w-full p-5  flex justify-end'>
           <button className='flex bg-white'><TbWorld size={25}/><span>en- US</span></button>
        </div>
    <div className='mt-20 flex justify-center '>
        <form>
           <h1 className='font-bold text-4xl mt-5'>Sign In</h1>
           <div className='flex mt-8 text-1xl'>
                <label >Email</label>
            </div>
                <input type='email' className='flex bg-slate-100 h-10 w-64 mt-3 pl-1' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <div className='mt-3'>
                <label>Password</label>
            </div>
                <input type='password' className='flex bg-slate-100 h-10 w-64 mt-3 pl-1' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button className='mt-7 text-center bg-blue-300 h-10 rounded w-64 ' onClick={login}>Log In</button>
                <p className='text-center mt-4 '>Trouble Signing In? </p>
                <p className='mt-6 text-center'>or</p>
                <Link to='/create' ><button className='bg-slate-100 h-10 rounded w-64 items-center mt-7 '>Create Account</button></Link>
       </form>
            </div>
        <div className='flex justify-center mt-44'>
            <ul className='flex justify-center gap-5 mt-14 font-light'>
                <li>Tesla &#169; 2024</li>
                <li>Privacy & Legal</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Account;