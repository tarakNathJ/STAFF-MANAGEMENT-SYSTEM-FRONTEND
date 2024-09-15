import axios from 'axios'
import React, { useState, useEffect } from 'react'
import SingleUserSallary from './SingleUserSallary';

function SallaryProvide() {
    const [Loding, setLoding] = useState(false);
    const [Error, SetError] = useState(false);
    const [Responce, SetResponce] = useState([])

    useEffect(() => {
        ; (async () => {

            const controller = new AbortController()

            try {
                setLoding(true);
                SetError(false);
                const Responce = await axios.get('https://staff-management-system-backend.onrender.com/API/V1/AllEmploy', {}, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }, {
                    signal: controller.signal
                })

                SetResponce(Responce.data.AllEmploy);
                SetError(false);
                setLoding(false)
            } catch (error) {
                SetError(true);
                if (axios.isCancel(error)) {
                    return
                }
                if (axios.isAxiosError(error)) {
                    return
                }
            }

        })()


        return () => {
        }
    }, [])


  
    return (
        <div className='w-[90%] h-full my-4  overflow-x-hidden  '>
            <h1 className=' text-center text-4xl text-slate-600  bg-sky-300/10 font-bold font-mono italic shadow-md shadow-slate-600 '>Salary Provide</h1>
            <div className={` flex gap-4 flex-col  mt-[5%]  `}>
                {
                    Responce.map((data) => <SingleUserSallary key={data._id} data={data} />)
                }
            </div>
        </div>
    )
}

export default SallaryProvide