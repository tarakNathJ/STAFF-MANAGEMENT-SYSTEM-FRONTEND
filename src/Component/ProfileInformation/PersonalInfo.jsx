import axios from 'axios';
import React, { useState } from 'react'

function PersonalInfo() {
  const [FullFillError, setFullFill] = useState({});
  const [loding, SetLoding] = useState(false);
  const [Error, SetError] = useState(false);
// to store image data 

  const [ProfileImage ,SetCatalogImage] = useState('');
  // declear state to from data store
  const [FromData, SetFromData] = useState({
    GooglePayNumber: "",
    PhoneNumber: "",
    Address: ''
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
    if (!FromData.GooglePayNumber.trim()) {
      Validation.GooglePayNumber = "enter your GooglePayNumber";
    }
    if (!FromData.PhoneNumber.trim()) {
      Validation.PhoneNumber = "enter yourPhoneNumber ";
    }
    if (!FromData.Address.trim()) {
      Validation.Address = "enter Address ";
    }
    setFullFill(Validation);
    if (Object.keys(Validation).length === 0) {
      await APIcall()
    }
  }


  // api call for 
  const APIcall = async () => {
    const controller = new AbortController();
    const ProfileData = new FormData();
    ProfileData.append("PhoneNumber",FromData.PhoneNumber);
    ProfileData.append("Address",FromData.Address);
    ProfileData.append('googlePayId',FromData.GooglePayNumber);
    ProfileData.append("image",ProfileImage);
    try {
      SetLoding(false);
      SetError(false);
      const Responce = await axios.post(`/BASE/API/V1/UpdateUserDetails`, ProfileData, {
        headers: {
          'Content-Type':"multipart/form-data"
        }
      }, {
        signal: controller.signal
      })


      SetLoding(true);
      alert("Update Success fully")

    } catch (Error) {
      SetLoding(true)
      SetError(true);
      alert(" image upload failed ")
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
    <div className='w-[90%] h-full my-4  '>
      <h1 className=' text-center text-4xl text-slate-600  bg-sky-300/10 font-bold font-mono italic shadow-md shadow-slate-600 '>Personal Information</h1>
      <form action="" onSubmit={OnsubmitHandeler} className='mt-8 bg-[#f1fdfc] shadow-lg shadow-slate-500 rounded-md'>
        <div className=' flex justify-evenly gap-5 p-6  '>
          <input  autoCorrect='off' onChange={OnchangeHandeler} className=' h-12 text-2xl w-[300px] outline-none rounded-md bg-slate-300/30  text-left pl-3 ' type="text" name='GooglePayNumber' placeholder='Google Pay Number' />
          <input  autoCorrect='off' onChange={OnchangeHandeler} className=' h-12 text-2xl w-[300px] outline-none rounded-md bg-slate-300/30   text-left pl-3' type="number" name='PhoneNumber' placeholder='Phone Number' />
        </div>
        <div className='flex flex-col gap-8 pl-[80px] mt-4'>
          <div>
            <textarea type="text"  autoCorrect='off'   rows='8' onChange={OnchangeHandeler} placeholder='Address' className=' w-[500px] text-2xl outline-none rounded-md bg-slate-300/30  text-left pl-3   ' name="Address" id=""></textarea>
          </div>
        </div>
        <div className='flex flex-col gap-2  ml-[80px] mt-4 bg-slate-400/30 w-[35%] rounded-md  '>
          <h1 className='pl-4 text-xl font-bold text-slate-600/55 '>Profile Image</h1>
            <input   type='file' onChange={(e)=>SetCatalogImage(e.target.files[0])} className='pb-4 px-6' />
        </div>


        <div className='flex justify-end   h-full text-center mt-4 '>
          <button type="submit" className=' h-12 w-32 bg-blue-700/80 shadow-lg shadow-slate-600 text-xl text-gray-900 font-bold mb-10 mr-20 rounded-lg text-center hover:text-black hover:bg-blue-700 hover:shadow-md   hover:duration-700'>Update</button>
        </div>


      </form>


    </div>
  )
}

export default PersonalInfo



//   const responce = await axios.post(`/Base/api/v1/productManager/Product`,BrandLogoImage,{
            //     headers: {
            //         // 'content-type': 'application/json',
            //         Authorisation:`Bearer ${datas.data.token}`,
            //         "Content-Type": "multipart/form-data",
            //         "x-rapidapi-host": "file-upload8.p.rapidapi.com",
            //         "x-rapidapi-key": "your-rapidapi-key-here",
                  
            //     }
            // },
