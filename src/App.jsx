import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Vehicles from './routeapps/Vehicles'
import Energy from './routeapps/Energy'
import Charging from './routeapps/Charging'
import Discover from './routeapps/Discover'
import Shop from './routeapps/Shop'
import Account from './routeapps/Account'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'
import Create from './routeapps/Create'
import Order from './routeapps/Order'
import { createContext } from "react";

export const Appcontext = createContext (null);



function App() {
  const [loading, setloading] = useState(true);
  const [details, setDetails] = useState('')
    const shareData = (buttonId)=>{
         setDetails(buttonId)
    }  

  useEffect(()=>{
    setTimeout(()=>{
      setloading(false)
    }, 3000)
  }, [])

  return (
    <>

    <BrowserRouter>
    <Appcontext.Provider value={{details, shareData}}>

     <Header/>

  {loading ? (<Loader />):
  (
     <Routes>
      <Route path='/'         element={<Home shareData={shareData}/>} />
      <Route path='/vehicles' element={<Vehicles />}/>
      <Route path='/energy'   element={<Energy />} />
      <Route path='/charging' element={<Charging />} />
      <Route path='/discover' element={<Discover />} />
      <Route path='/shop'     element={<Shop />} />
      <Route path='/account'  element={<Account />} />
      <Route path='/create'   element={<Create />} />
      <Route path='/order'    element={<Order details={details} />} />
     </Routes>
)}
     </Appcontext.Provider>
     </BrowserRouter>
    </>
  )
}

export default App;
