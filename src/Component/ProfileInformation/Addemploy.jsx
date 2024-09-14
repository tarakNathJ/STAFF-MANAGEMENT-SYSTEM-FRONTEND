import axios from 'axios';
import React, { useState } from 'react'

function Addemploy() {

  const [FullFillError, setFullFill] = useState({});
  const [Error,SetError] =useState(false);
  const [Loading,SetLoding] = useState(false);
  const [FromData, SetFromData] = useState({
    Name: '',
    email: '',
    password: '',
    ConformPassword: '',
    AccountType: '',
    SALARY: ''
  })

  const OnChangeHandler = (event) => {
    const { name, value } = event.target;
    SetFromData({
      ...FromData, [name]: value
    })

  }

  const OnsubmitHandler =async (event) => {
    event.preventDefault();
    const ValiDation = {}
    if (!FromData.Name.trim()) {
      ValiDation.Name = "enter your Name";
    }
    if (!FromData.email.trim()) {
      ValiDation.email = "enter your email";
    }
    if (!FromData.password.trim()) {
      ValiDation.password = "enter your Password";
    }
    if (!FromData.ConformPassword.trim()) {
      ValiDation.ConformPassword = "enter your ConformPassword";
    }
    if (!FromData.AccountType) {
      ValiDation.AccountType = "enter your AccountType";
    }
    if (!FromData.SALARY) {
      ValiDation.SALARY = "enter your SALARY";
    }


     setFullFill(ValiDation);
      if (Object.keys(ValiDation).length === 0) {
            await APIcall()
      }
  }


   // api call for 
    const APIcall = async () => {
        const controller = new AbortController();

        try {
            SetLoding(true);
            SetError(false);
            const Responce = await axios.post(`/BASE/API/V1/SignUp`, {
                Name:FromData.Name,
                Email: FromData.email,
                Password: FromData.password,
                ReEnterPassword:FromData.ConformPassword,
                AccountType:FromData.AccountType,
                Sallary:FromData.SALARY

            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }, {
                signal: controller.signal
            })

            alert("employ add success fully")

            SetLoding(false);
            

        } catch (Error) {
            SetLoding(false)
            SetError(true);
            alert("ADD EMPLOY FAILED  .")
            if (axios.isCancel(Error)) {

                return
            }
            if (axios.isAxiosError(Error)) {
                
                return
            }

        }
    }


  return (
    <div className='w-[90%] h-full my-4  '>
      <h1 className=' text-center text-4xl text-slate-600  bg-sky-300/10 font-bold font-mono italic shadow-md shadow-slate-600 '>ADD EMPLOY DETAILS</h1>
      <form action="" onSubmit={OnsubmitHandler} className='mt-8 bg-[#f1fdfc] shadow-lg shadow-slate-500 rounded-md flex flex-col gap-4'>

        <div className='flex flex-wrap gap-8 pl-[80px] mt-4 p-6'>
          <div>
            <input required autoCorrect='off' className=' h-12 text-2xl w-[300px] outline-none rounded-md bg-slate-300/30   text-left pl-3 ' name='Name' type="Name" placeholder='Name' onChange={OnChangeHandler} />
          </div>
          <div>
            <input required autoCorrect='off' className=' h-12 text-2xl w-[300px] outline-none rounded-md bg-slate-300/30   text-left pl-3 ' name='email' type="email" placeholder='Email' onChange={OnChangeHandler} />
          </div>
        </div>

        <div className=' flex justify-evenly gap-5  '>
          <input required autoCorrect='off' className='  h-12 text-2xl w-[300px] outline-none rounded-md bg-slate-300/30  text-left pl-3 ' name='password' type="password" placeholder='PassWord' onChange={OnChangeHandler} />
          <input required autoCorrect='off' className=' h-12 text-2xl w-[300px] outline-none rounded-md bg-slate-300/30   text-left pl-3' name='ConformPassword' type="password" placeholder='Conform Password' onChange={OnChangeHandler} />
        </div>
        <div className=' flex justify-evenly gap-5 mt-4  '>
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
  )
}

export default Addemploy