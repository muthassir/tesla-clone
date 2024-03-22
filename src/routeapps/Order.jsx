import {useState } from "react"
import {useNavigate} from 'react-router-dom'

const Order = ({details}) => {
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);

  const navigate = useNavigate()
  return (
    <div className='absolute top-16 flex flex-col justify-center items-center w-full bg-white'>
        <div className='text-center mt-8'>
            <h1 className='text-3xl'>{details}</h1>
            <p>Est. Delivery: Feb - Mar 2024</p>
            <p>Enter delivery ZIP Code</p>
               <div className='flex justify-center gap-8 m-4 mt-6'>
                   <div>
                     <h3>272mi</h3>
                     <p>range(EPA est.)</p>
                   </div>
               <div>
                    <h3>125mph</h3>
                    <p>Top Speed</p>
                  </div>
               <div>
                    <h3>5.8sec</h3>
                    <p>0-60 mph</p>
                  </div>
              </div>
                 
                 <h1 className='mt-10 text-2xl'>Enhanced Autopilot</h1>
                 <p className='mt-4'>$6,000</p>
                 <ul >
                    <li>Navigate On Autopilot</li>
                    <li>Auto Lane Change</li>
                    <li>Autopark</li>
                    <li>Summon</li>
                    <li>Smart Summon</li>
                 </ul>
                 <div className='flex md:flex-row flex-col md:gap-5  justify-center items-center'>
                    {state1 &&
                     <button className='rounded bg-slate-300 h-10 w-64 mt-10'  onClick={()=>setState1(false)}>Remove</button>                  
                    }
                    {!state1 &&
                     <button className='rounded bg-blue-400 h-10 w-64 mt-10' onClick={()=>setState1(true)}>Add</button>
                    }
                 <button className='rounded bg-slate-300 h-10 w-64 mt-10'>Feature details</button>
                 </div>

                 <div className="mt-6 ">
                    <h3 className="text-2xl">Full Self-driving Capability</h3>
                    <p>$12000</p>
                    <p>Your car will be able to drive itself almost anywhere with minimal driver intervention and will continuously improve</p>
                    <ul className="mt-2">
                      <li>All functionally of Basic autopilot and Enhanced Autopilot</li>
                      <li>Autosteer on city streets</li>
                      <li>Traffic Light and Stop Sign Control</li>
                    </ul>
                 </div>

                 <div className='flex md:flex-row flex-col md:gap-5  justify-center items-center'>
                    {state2 &&
                     <button className='rounded bg-slate-300 h-10 w-64 mt-10'  onClick={()=>setState2(false)}>Remove</button>                  
                    }
                    {!state2 &&
                     <button className='rounded bg-blue-400 h-10 w-64 mt-10' onClick={()=>setState2(true)}>Add</button>
                    }
                     <button className='rounded bg-slate-300 h-10 w-64 mt-10'>Feature details</button>
                 </div>
                     <button className='rounded bg-blue-400 h-10 w-64 mt-10 m-7' onClick={()=>navigate(-1)} >Order</button>
        </div>
    </div>
  )
}

export default Order;