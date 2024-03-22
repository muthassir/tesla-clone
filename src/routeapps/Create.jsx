// import axios from 'axios';
import React, { useState } from 'react'
import { TbWorld } from "react-icons/tb";
import { Link,  useNavigate } from 'react-router-dom';

const Create = () => {
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [fullname, setFullname] = useState('')
    const navigate = useNavigate()


    const login = async (e)=>{
        e.preventDefault()
            if(!email || !password || !fullname ){
                alert("Enter Fields")
            }else{
                setEmail('')
                setFullname('')
                setPassword('')
                navigate('/');
            }
    }

  return (
    <div >
        <div className='absolute top-0 left-0 z-30 white  w-full p-5  flex justify-end'>
            <button className='flex bg-white'><TbWorld size={25}/><span>en- US</span></button>
        </div>
        <div className='mt-20 flex justify-center tex'>
            <form>
                <h1 className='font-bold text-4xl mt-5'>Sign Up</h1>
                    <div className='flex mt-8 text-1xl'>
                        <label >Full Name</label>
                    </div>
                    <input type='text' className='flex bg-slate-100 h-10 w-64 mt-3 pl-1' value={fullname} onChange={(e)=>setFullname(e.target.value)} />
                    <div className='flex mt-8 text-1xl'>
                        <label >Email</label>
                    </div>
                    <input type='email' className='flex bg-slate-100 h-10 w-64 mt-3 pl-1' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <div className='mt-3'>
                        <label>Password</label>
                    </div>
                    <input type='password' className='flex bg-slate-100 h-10 w-64 mt-3 pl-1' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                     <button className='mt-7 text-center bg-blue-300 h-10 rounded w-64 ' onClick={login}>Create</button>
                     <p className='mt-6 text-center'>or</p>
                     <p className='text-center mt-4 '>Already Have an Account </p>
                     <Link to='/account'><button className='bg-slate-200 h-10 rounded w-64 items-center mt-7 '>Log In</button></Link> 
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

export default Create;