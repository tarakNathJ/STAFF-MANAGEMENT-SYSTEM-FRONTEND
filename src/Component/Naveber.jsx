import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'



function Naveber() {
    const [SelectProfileAndLogin, SetSelectProfileAndLogin] = useState("")

    const data = useSelector((store) => store.profileInfo);

    useEffect(() => {
        if (data.userData.length === 0) {
            SetSelectProfileAndLogin('/LogIn');
        } else {
            SetSelectProfileAndLogin('/Profile');
        }

        return () => {
        };
    }, [data]);


    return (
        <div className=' lg:h-[64px] lg:w-full flex justify-between pl-[10%] pr-[10%]  bg-gradient-to-tr  from-[#e4f7ff] from-1%   via-stone-100 via-80%  to-sky-200 to-100%   fixed '>
            <div className='flex items-center gap-4'>
                <div className=' overflow-hidden h-12 w-12 rounded-full'>
                    <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSulG1Da7z2WdstbrftV2cadboi_pFaW2vHyg&s`} alt="" className=' object-contain   rounded-full  ' />
                </div>
                <div className='flex flex-col lg:text-2xl md:text-xl '>
                    <h2 className='  font-bold text-slate-600'>Group  <span className=' text-green-800 lg:text-3xl italic'>F</span> </h2>

                </div>

            </div>
            <div className='flex mt-2  items-center justify-between lg:gap-16 md:gap-12 bg-priceBer text-2xl font-bold   h-10   rounded-md'>
                <div className='flex justify-center items-center gap-2 hover:underline duration-500  text-green-900'>
                    <Link to={'/'} className='flex justify-center items-center gap-2 text-green-900'><FaHome />
                        <span className='text-slate-600'>HOME </span></Link>
                </div>
                <div className='flex justify-center items-center gap-2 duration-700  hover:underline'>
                    <Link to={SelectProfileAndLogin} className='flex gap-2 items-center' ><img src={`https://cdn-icons-png.freepik.com/256/12595/12595887.png`} className=' object-contain  h-10 w-10 rounded-full bg-white ' alt="" />
                        <span className='text-slate-600'>{SelectProfileAndLogin == "/Profile" ? "PROFILE" : "LOGIN"}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Naveber

