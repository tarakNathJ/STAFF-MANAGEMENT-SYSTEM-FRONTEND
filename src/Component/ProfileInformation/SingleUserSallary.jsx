import axios from 'axios'
import React, { useState } from 'react'
import { HiOutlineUserCircle } from "react-icons/hi"


function SingleUserSallary({ data }) {
    const [Token, setToken] = useState({});
    const [Admin, SetAdmin] = useState({});
    

// to give account related data
    const SendSalaryHandler = async () => {
        const controller = new AbortController();
        try {

            const Response = await axios.post(`/BASE/API/V1/AdminDetails`, { UserPersonalId: data.PersonalDetailsID },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }, {
                signal: controller.signal
            })
            
            console.log(Response.data.Payload.Salary);
            await SalaryProvide(Response.data.AdminData,Response.data.Payload);
            

        } catch (error) {
            if (axios.isCancel(error)) {
                return
            }
            if (axios.isAxiosError(error)) {
                return
            }
        }
    }


// razorpay payout gatway...
    // const RazorPay_PayOut = async (Token,Admin) => {
        

    //         const controller = new AbortController()
    //         try {

    //             const Reaponce = await axios.post('/RAZORPAY/v1/payouts',
    //                 {
    //                     account_number: `${Token.AccountNumber}`,
    //                     amount: Token.Salary * 100,
    //                     currency: "INR",
    //                     mode: "UPI",
    //                     purpose: "salary",
    //                     fund_account: {
    //                         account_type: "vpa",
    //                         vpa: {
    //                             address: Token.UPI_ID
    //                         },
    //                         contact: {
    //                             name: Token.Name,
    //                             email: Token.Email,
    //                             contact: `"${Token.Number}"`,
    //                             type: "employee",
    //                             reference_id: "Acme Contact ID 12345",
    //                             notes: {
    //                                 notes_key_1: "Tea, Earl Grey, Hot",
    //                                 notes_key_2: "Tea, Earl Grey… decaf."
    //                             }
    //                         }
    //                     },
    //                     queue_if_low_balance: true,
    //                     reference_id: "Acme Transaction ID 12345",
    //                     narration: "Acme Corp Fund Transfer",
    //                     notes: {
    //                         notes_key_1: "Beam me up Scotty",
    //                         notes_key_2: "Engage"
    //                     }
    //                 }, {
    //                 basicAuth: {
    //                     Username: Token.RazorPayId,
    //                     Password: Token.RazorPayPassword
    //                 }
    //             }, {
    //                 signal: controller.signal
    //             })
    //             if (Reaponce) {
                    
    //                 await SalaryProvide(Admin);
    //             }
    //             console.log("rezor :", Reaponce);
    //         } catch (error) {
    //             if (axios.isCancel(error)) {
    //                 return
    //             }
    //             if (axios.isAxiosError(error)) {
    //                 return
    //             }
    //         }
        

    // }

    // to update payment details....
    const SalaryProvide = async (Admin,Paylod) => {
        const controller = new AbortController();
        try {

            const Response = await axios.post(`/BASE/API/V1/Sallary`, {
                UserPersonalId: data.PersonalDetailsID,
                AdminPerSonalID: Admin._id,
                EmployName: Paylod.Name,
                ProviderName: "tom",
                Sallary: Paylod.Salary
            },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }, {
                signal: controller.signal
            })
            alert('payment success fully');

        } catch (error) {
            if (axios.isCancel(error)) {
                return
            }
            if (axios.isAxiosError(error)) {
                return
            }
        }
    }




    return (
        <div className='lg:w-[90%] h-[80px] text-2xl text-gray-700 font-semibold bg-slate-400/30  flex lg:gap-8 justify-between  md:gap-6 sm:gap-4 items-center rounded-md pl-8 shadow-md shadow-blue-400 hover:shadow-sm hover:duration-500'>
            <div className=' bg-black/50 h-10 w-10  rounded-full flex justify-center items-center text-3xl text-slate-200  ' ><HiOutlineUserCircle /></div>
            <div className='flex justify-center gap-4'>
                <h1 className='text-3xl text-black'>{data.Name}</h1>
                <h1 className='text-xl text-black'>{data.Email}</h1>
                <h1 className='text-2xl text-green-950'>{data.AccountType}</h1>
            </div>
            <div className=' h-12 w-28 bg-blue-800 rounded-md shadow-md flex justify-center items-center shadow-sky-800  hover:shadow-none hover:duration-500 mr-10'>
                <h1 onClick={SendSalaryHandler} className='text-white text-2xl cursor-pointer ' >Sallary</h1>
            </div>
        </div>
    )
}

export default SingleUserSallary

