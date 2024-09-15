import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { UserPersonalDetails } from '../Redux/UserDetails';




function LogIn() {
    const Dispatch = useDispatch();
    const Navigate = useNavigate();
    const [FullFillError, setFullFill] = useState({});
    const [loding, SetLoding] = useState(false);
    const [Error, SetError] = useState(false);

    // declear state to from data store
    const [FromData, SetFromData] = useState({
        email: "",
        password: ""
    })

    // to store login from data
    const OnchangeHandeler = (event) => {
        const { name, value } = event.target
        SetFromData({
            ...FromData, [name]: value
        })

    }


    // to chack data are full fill or not  then API call request 
    const OnsubmitHandeler = async (event) => {
        event.preventDefault();
        const Validation = {}
        if (!FromData.email.trim()) {
            Validation.email = "enter your email";
        }
        if (!FromData.password.trim()) {
            Validation.password = "enter your Password";
        }
        setFullFill(Validation);
        if (Object.keys(Validation).length === 0) {
            await APIcall()
        }
    }



    // api call for 
    const APIcall = async () => {
        const controller = new AbortController();

        try {
            SetLoding(false);
            SetError(false);
            const Responce = await axios.post(`localhost://4000/API/V1/logIn`, {
                Email: FromData.email,
                Password: FromData.password

            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }, {
                signal: controller.signal
            })


            SetLoding(true);
            Dispatch(UserPersonalDetails(Responce.data.UserDetails));
            Navigate('/');

        } catch (Error) {
            SetLoding(true)
            SetError(true);
            alert("wrong user try again .")
            if (axios.isCancel(Error)) {

                return
            }
            if (axios.isAxiosError(Error)) {
                console.log(Error)
                return
            }

        }
    }




    return (
        <div className=' h-[600px] w-full overflow-x-hidden  bg-sky-300/10 flex justify-center pt-8 cursor-pointer shadow-inherit '>
            <div className='h-[400px] w-[300px] bg-white/90 rounded-tl-3xl rounded-bl-3xl shadow-lg shadow-slate-500 '>
                <h2 className='text-2xl mt-2 text-center  italic font-bold'>LOG IN </h2>
                <div className=' mt-16'>
                    <form onSubmit={OnsubmitHandeler} action="">
                        <div className=' flex justify-between items-center px-6 '>
                            <div className=' flex flex-col  gap-10 '>
                                <div className=' text-left flex flex-col  relative'>

                                    <input type="text" required onChange={OnchangeHandeler} name='email' autoComplete='off' autoCorrect='on' className=' w-[220px] h-8 text-gray-600   border-2 border-b-blue-500 border-x-transparent border-t-transparent   text-xl  text-right  focus:outline-none peer bg-inherit ' />
                                    <span className='text-xl absolute font-medium pl-2 peer-focus:-translate-y-6 duration-200 peer-valid:-translate-y-6 '>Email</span >
                                    {FullFillError.email && <span className='text-red-500 '>{FullFillError.email}</span>}
                                </div>
                                <div className='-mt-4 text-left flex flex-col gap-2'>

                                    <input required type="password" onChange={OnchangeHandeler} name='password' autoComplete='off' autoCorrect='off' className=' w-[220px] h-8 text-gray-600   border-2 border-b-blue-500 border-x-transparent border-t-transparent   text-xl text-right  focus:outline-none peer ' />
                                    <span className='text-xl absolute font-medium pl-2 peer-focus:-translate-y-6 duration-200 peer-valid:-translate-y-6  '>Password</span>
                                    {FullFillError.password && <span className='text-red-500 '>{FullFillError.password}</span>}
                                </div>
                            </div>
                        </div>

                        <div className='mt-8 flex flex-col justify-center items-center'>
                            <button type="submit" className=' w-[100px] h-10 rounded-lg  font-medium  text-xl bg-yellow-400/70'>Log In</button>
                        
                        </div>

                    </form>
                </div>
            </div>
            <div className=' h-[400px] w-[300px]  bg-blue-100  rounded-br-3xl overflow-hidden shadow-2xl shadow-slate-50  '>
                <img src='https://media.licdn.com/dms/image/D4D12AQHlfvYcjpS3Cg/article-cover_image-shrink_720_1280/0/1679560879140?e=2147483647&v=beta&t=oLU-YqBjd2azt6yVNjjqpRyTlU-M8ATNlB29ImWG26Y' className=' object-cover h-full w-full overflow-hidden' alt="" />
            </div>
        </div>
    )
}

export default LogIn
