import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserPersonalDetails, RemoveDetails } from '../Redux/UserDetails';
import sudip from '../assets/animash.jpg'
import Suman from '../assets/suman e.jpg'
import profile from '../assets/profile.jpg'
import Animash from '../assets/sudip m.jpg'

function Home() {
	const data = useSelector((store)=>store.profileInfo);
	console.log(data);

  return (
    <section className='lg:w-full lg:h-full sm:w-full sm:h-full bg-gradient-to-tr  from-[#eff6f8] from-1%   via-stone-50 via-80%  to-sky-500 to-100%   '>
      <div className='lg:w-full lg:h-[500px] flex md:flex-wrap sm:flex-wrap lg:flex-1 justify-between px-14 pt-20   '>
        <div className='w-[50%] h-full text-gray-600 flex flex-col justify-center gap-2'>
          <h1 className='lg:text-4xl md:text-3xl sm:text-2xl font-bold font-serif text-black '>Staff Management System</h1>
          <div className='lg:text-2xl md:text-2xl sm:text-xl '>
            <h2>
              ADMIN EMAIL ID :lavofa6172@nastyx.com</h2>

              <h2> PASSWORD :  tomtom</h2>
              <h2> PASSWORD :  tomtom ,</h2>

    <h2>and all employ Password is :tomtom</h2>
          
          </div>
        </div>
        <div className='lg:w-[50%]  lg:h-full   flex justify-center items-center' >
          <img className='lg:w-[50%]  lg:h-[300px] md:[250px] sm:[180px] shadow-2xl   border-t-4 border-r-4 border-sky-500     shadow-sky-50 rounded-full overflow-hidden bg-white object-cover  ' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSulG1Da7z2WdstbrftV2cadboi_pFaW2vHyg&s`} alt="" />
        </div>
      </div>
      {/* second Page */}
      <h1 className=' lg:text-6xl text-gray-500 font-bold font-mono flex justify-center lg:my-10 md:my-6 sm:my-2 md:text-3xl sm:text-xl ' >PROJECT MEMBERS</h1>
      <div className=' w-full h-[50%] bg-[#07C4EE/8] flex flex-wrap justify-evenly py-2 '>
        <div className='w-[230px] h-72  relative'>
          <div className='  h-full w-full bg-gradient-to-b from-[#A9E198] from-20% via-[#432195]   to-[#666666] to-1%  -rotate-6 shadow-lg shadow-stone-500'></div>
          <div className=' absolute flex flex-col   justify-evenly  items-center  z-30 top-0 left-0   h-full w-full bg-gradient-to-b from-white from-40%  to-sky-600 to-1% '>
            <div className=' w-[40%] h-[33%] bg-slate-400 rounded-full mt-3 flex justify-center items-center overflow-hidden '><img src={profile} alt="" /></div>
            <h1 className='text-2xl font-bold italic text-gray-700'>Tarak Nath Jana</h1>
            <h1 className='text-sm font-bold italic text-center text-gray-600 ml-2'>Global Institute of Science and Technology </h1>
          </div>

        </div>
        <div className='w-[230px] h-72  relative'>

          <div className='  h-full w-full bg-gradient-to-b from-[#A9E198] from-20% via-[#432195]   to-[#666666] to-1%  -rotate-6 shadow-lg shadow-stone-500'></div>
          <div className=' absolute flex flex-col   justify-evenly  items-center  z-30 top-0 left-0   h-full w-full bg-gradient-to-b from-white from-40%  to-sky-600 to-1% '>
            <div className=' w-[40%] h-[33%] bg-slate-400 rounded-full mt-3 flex justify-center items-center overflow-hidden '><img src={Animash} alt="" /></div>
            <h1 className='text-2xl font-bold italic text-gray-700'>Sudip Manna</h1>
            <h1 className='text-sm font-bold italic text-center text-gray-600 ml-2'>Global Institute of Science and Technology </h1>
          </div>


        </div>
        <div className='w-[230px] h-72  relative'>

          <div className='  h-full w-full bg-gradient-to-b from-[#A9E198] from-20% via-[#432195]   to-[#666666] to-1%  -rotate-6 shadow-lg shadow-stone-500'></div>
          <div className=' absolute flex flex-col   justify-evenly  items-center  z-30 top-0 left-0   h-full w-full bg-gradient-to-b from-white from-40%  to-sky-600 to-1% '>
            <div className=' w-[40%] h-[33%] bg-slate-400 rounded-full mt-3 flex justify-center items-center overflow-hidden '><img src={sudip} alt="" /></div>
            <h1 className='text-2xl font-bold italic text-gray-700'>Animesh Das</h1>
            <h1 className='text-sm font-bold italic text-center text-gray-600 ml-2'>Greater kolkata college of engineering and management</h1>
          </div>


        </div>
        <div className='w-[230px] h-72  relative'>

          <div className='  h-full w-full bg-gradient-to-b from-[#A9E198] from-20% via-[#432195]   to-[#666666] to-1%  -rotate-6 shadow-lg shadow-stone-500'></div>
          <div className=' absolute flex flex-col   justify-evenly  items-center  z-30 top-0 left-0   h-full w-full bg-gradient-to-b from-white from-40%  to-sky-600 to-1% '>
            <div className=' w-[40%] h-[33%] bg-slate-400 rounded-full mt-3 flex justify-center items-center overflow-hidden '><img src={Suman} alt="" /></div>
            <h1 className='text-2xl font-bold italic text-gray-700'>Suman Pramanik</h1>
            <h1 className='text-sm font-bold italic text-center text-gray-600 ml-2'>Greater kolkata college of engineering and management</h1>
          </div>


        </div>
      </div>

      <div className=' lg:w-full md:w-full sm:w-full lg:h-[400px] md:h-[270px] sm:[150px] flex flex-wrap justify-center lg:mt-14 md:mt-8 sm:mt-4 overflow-hidden'>
        <div className=' w-[80%] h-[200px] flex flex-col gap-2 text-center'>
          <h1 className=' lg:text-6xl text-gray-500 font-bold font-mono flex justify-center lg:my-10 md:my-6 sm:my-2 md:text-3xl sm:text-xl '>PROJECT DETAILS</h1>
          <p className='lg:text-xl md:text-sm text-slate-700 '>
            The Staff Management System is a digital platform developed to enhance the efficiency of managing staff-related tasks within an organization. This project includes essential features such as secure user login, salary payment processing, and attendance tracking. Designed to automate and simplify administrative functions, the system ensures that staff data is accurately maintained and easily accessible. By integrating these core functionalities, the Staff Management System supports both administrators and staff members in managing their roles and responsibilities more effectively.
</p>
        </div>
      </div>


    </section>
  )
}

export default Home

