import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'
import Naveber from './Component/Naveber'

function App() {


  return (
     <div className=' overflow-x-hidden lg:w-full lg:h-full md:w-full md:h-full sm:w-full sm:h-full  mt-0 mx-0 left-0 right-0 flex flex-col  '>
        <div className=' z-10 '>
        <Naveber/>
        </div>
      <div className='lg:w-full sm:w-full md:w-full md:h-full lg:h-full sm:h-full mt-[64px] z-0'>
        <Outlet />
      </div>
      <div className='lg:w-full sm:w-full md:w-full md:h-full lg:h-full sm:h-full mt-0 mb-0 z-0'>
        <Footer />
      </div>

    </div>
  )
}

export default App
