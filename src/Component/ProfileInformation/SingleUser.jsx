import axios from 'axios'
import React, { useState } from 'react'
import { HiOutlineUserCircle, HiPencilAlt, HiTrash } from "react-icons/hi"


function SingleUser({ data,UserUpdate }) {

    const [loding, setLoding] = useState(false);
  
    const [Error, SetError] = useState(false);
    const [Responce, SetResponce] = useState([]);

    // User Delete Handler
    const DeleteHandler = async () => {
        const controller = new AbortController();

        try {
            SetError(false);
            const Responce = await axios.post('/BASE/API/V1/DeleteUser', { ID: data._id }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }, {
                signal: controller.signal
            })
            SetError(false)
            window.location.reload();
            alert("delete")

        } catch (error) {
            SetError(true);
            if (axios.isCancel(error)) {
                return
            }
            if (axios.isAxiosError(error)) {
                return
            }
        }
    }

    // update user : handler
   

    return (
        <div className='lg:w-[90%] h-[80px] text-2xl text-gray-700 font-semibold bg-slate-400/30  flex lg:gap-8 justify-between  md:gap-6 sm:gap-4 items-center rounded-md pl-8 shadow-md shadow-blue-400 hover:shadow-sm hover:duration-500'>
            <div className=' bg-black/50 h-10 w-10  rounded-full flex justify-center items-center text-3xl text-slate-200  ' ><HiOutlineUserCircle /></div>
            <div className='flex justify-center gap-4'>
                <h1 className='text-3xl text-black'>{data.Name}</h1>
                <h1 className='text-xl text-black'>{data.Email}</h1>
                <h1 className='text-2xl text-green-950'>{data.AccountType}</h1>
            </div>
            <div className=' flex  justify-center gap-4 items-center pr-10'>
                <h1 onClick={()=>UserUpdate(data._id)} className='text-blue-900 text-3xl cursor-pointer'><HiPencilAlt /></h1>
                <h1 onClick={DeleteHandler} className='text-red-800 text-3xl cursor-pointer ' ><HiTrash /></h1>
            </div>
        </div>
    )
}

export default SingleUser