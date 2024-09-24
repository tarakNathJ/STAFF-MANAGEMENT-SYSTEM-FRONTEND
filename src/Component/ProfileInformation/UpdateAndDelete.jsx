import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleUser from './SingleUser';
import { HiX } from "react-icons/hi";

function UpdateAndDelete() {
  const [FullFillError, setFullFill] = useState({});
  const [UserId, SetUserId] = useState(null);
  const [loding, setLoding] = useState(false);
  const [Error, SetError] = useState(false);
  const [Responce, SetResponce] = useState([]);
  const [UpdatePage, SeUpdatePage] = useState(false);
  const [FromData, SetFromData] = useState({
    Name: '',
    email: '',
    Number: '',
    Address: '',
    AccountType: '',
    SALARY: ''
  })


  useEffect(() => {
    ; (async () => {

      const controller = new AbortController()

      try {
        setLoding(true);
        SetError(false);
        const Responce = await axios.get('/Base/API/V1/AllEmploy', {}, {
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


  // ***************************** Update User *****************
  // store given value
  const OnChangeHandler = (event) => {
    const { name, value } = event.target;
    SetFromData({
      ...FromData, [name]: value
    })

  }

  // chack full fill all requ
  const OnsubmitHandler = async (event) => {
    event.preventDefault();
    const ValiDation = {}
    if (!FromData.Name.trim()) {
      ValiDation.Name = "enter your Name";
    }
    if (!FromData.email.trim()) {
      ValiDation.email = "enter your email";
    }
    if (!FromData.Number) {
      ValiDation.Number = "enter your Number";
    }
    if (!FromData.Address.trim()) {
      ValiDation.Address = "enter your Address";
    }
    if (!FromData.AccountType) {
      ValiDation.AccountType = "enter your AccountType";
    }
    if (!FromData.SALARY) {
      ValiDation.SALARY = "enter your SALARY";
    }


    setFullFill(ValiDation);
    if (Object.keys(ValiDation).length === 0) {
      await UpdateApiCall();

    }
  }


  // update userDetails
  const UserUpdate = async (Data) => {
    SetUserId(Data);
    SeUpdatePage(true);
  }


  // update api  call 
  const UpdateApiCall = async () => {
    const controller = new AbortController();

    try {
      SetError(false);
      console.log("first")
      const Responce = await axios.post('/Base/API/V1/UpdateUser', {
        ID: UserId,
        Name: FromData.Name,
        PhoneNumber: FromData.Number,
        Email: FromData.email,
        Address: FromData.Address,
        AccountType: FromData.AccountType,
        Sallary: FromData.SALARY
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }, {
        signal: controller.signal
      })
      SetError(false)
      alert("update success fully");
      
      SeUpdatePage(false);
      window.location.reload();
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


  if (loding) {
    return <h1> loding ...</h1>
  }
  if (Error) {
    return <h1 className='text-5xl text-red-700'> 500 server Side error</h1>
  }

  return (
    <div className='w-[90%] h-full my-4  overflow-x-hidden '>
      <h1 className=' text-center text-4xl text-slate-600  bg-sky-300/10 font-bold font-mono italic shadow-md shadow-slate-600 '>UPDATE AND DELETE</h1>
      <div className={` flex gap-4 flex-col  mt-[5%]  `}>
        {
          Responce.map((data) => <SingleUser key={data._id} data={data} UserUpdate={UserUpdate} />)
        }
        <div className={` absolute w-[60%]  h-[600px] bg-purple-950/10 ${UpdatePage !== true ? 'hidden' : ''}`}>
          <form action="" onSubmit={OnsubmitHandler} className='mt-8 bg-[#f1fdfc] shadow-lg shadow-slate-500 rounded-md flex flex-col gap-1'>
            <h1 onClick={() => SeUpdatePage(false)} className=' text-3xl text-red-950 cursor-pointer'><HiX /></h1>
            <div className='flex flex-wrap gap-8 pl-[80px] mt-2 p-2'>
              <input required className=' h-12 text-2xl w-[300px] outline-none rounded-md bg-slate-300/30  text-left pl-3 ' name='Name' type="text" placeholder='Name' onChange={OnChangeHandler} />
              <input required className=' h-12 text-2xl w-[300px] outline-none rounded-md bg-slate-300/30   text-left pl-3' name='Number' type="number" placeholder='Phone Number' onChange={OnChangeHandler} />
            </div>
            <div className='flex flex-wrap gap-8 pl-[80px] mt-2 p-2'>
              <input required className=' h-12 text-2xl w-[300px] outline-none rounded-md bg-slate-300/30  text-left pl-3 ' name='email' type="email" placeholder='Email' onChange={OnChangeHandler} />
              <input required className=' h-12 text-2xl w-[300px] outline-none rounded-md bg-slate-300/30   text-left pl-3' name='Address' type="text" placeholder='Address' onChange={OnChangeHandler} />
            </div>


            <div className=' flex flex-wrap justify-evenly gap-5 mt-4  '>
              <select required className=' h-12 text-2xl w-[400px] text-gray-500 outline-none rounded-md bg-slate-300/30  text-left pl-3 ' name="AccountType" onChange={OnChangeHandler} id="">
                <option value="">YOUR CHOICE</option>
                <option value="DEVELOPER">DEVELOPER</option>
                <option value="HR">HR</option>
                <option value="PROJECT MANAGER">PROJECT MANAGER</option>
              </select>
              <input required className=' h-12 text-2xl w-[200px] outline-none rounded-md bg-slate-300/30   text-left pl-3' type="number" name='SALARY' placeholder='SALARY' onChange={OnChangeHandler} />
            </div>


            <div className='flex justify-end   h-full text-center mt-4 '>
              <button type="submit" className=' h-12 w-32 bg-blue-700/80 shadow-lg shadow-slate-600 text-xl text-gray-900 font-bold mb-10 mr-20 rounded-lg text-center hover:text-black hover:bg-blue-700 hover:shadow-md   hover:duration-700'>Update</button>
            </div>


          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateAndDelete



