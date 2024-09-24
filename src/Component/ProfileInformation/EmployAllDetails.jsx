import axios from 'axios';
import React,{useEffect,useState} from 'react'



function EmployAllDetails() {
	const [loding,setLoding] = useState(false);
	const [Error,SetError] = useState(false);
	const [Responce1,SetResponce1] = useState({});

	const [Sallary,SetSellary] = useState([]);

	useEffect(() => {
		; (async () => {

			const controller = new AbortController();

			try {
				setLoding(true);
				SetError(false);
				const Responce = await axios.post(`/Base/API/V1/EmployDetails`,{},{
					headers: {
						'Content-Type': 'application/json'
					}
				},{
					signal: controller.signal
				})
				SetResponce1(Responce.data.SallaryDetails);

				SetSellary(Responce.data.SallaryDetails.PaymentDetailsID)
				SetError(false);
				setLoding(false)
			} catch(error) {
				SetError(true);
				if(axios.isCancel(error)){
						return
					}

				if(axios.isAxiosError(error)) {
					console.log(error);
					return
				}
			}

		})()


		return () => {
		}
	},[])

	if(loding) {
		return <h1>loading...</h1>
	}
	if(Error) {
		return <h1 className='text-5xl text-red-700'> 500 server Side error</h1>
	}



	return (
		<div className='w-[100%] h-full mt-4  '>
			<h1 className=' text-center text-4xl text-slate-600  bg-sky-300/10 font-bold font-mono italic shadow-md shadow-slate-600 '>ALL EMPLOY DETAILS</h1>

			<div className=' mt-6 flex flex-wrap justify-evenly w-[90%] h-[100%]  gap-4 mb-8 rounded-md'>
				<div className='w-[60%] h-[100%] bg-gradient-to-b from-[#d7f6d7] to-[#dedef3] font-semibold font-serif flex  gap-4 items-center flex-col text-2xl rounded-md '>
					<div className='h-40 w-40 bg-purple-900/20 rounded-full overflow-hidden flex justify-center items-center mt-4'>
						<img src={Responce1.ImageUrl} className=' object-contain  h-full w-full' alt="" />
					</div>
					<div className=' flex justify-between gap-12'>
						<h1>{Responce1.Name}</h1>
						<h1>{Responce1.PhoneNumber}</h1>
					</div>
					<div>
						<h1 className='text-blue-950'>{Responce1.Email}</h1>
					</div>
					<div>
						<h1>Salary : <span className=' text-green-600'>{Responce1.Sallary}</span></h1>
					</div>
				</div>
				<div className='w-[35%] h-[100%] bg-slate-500/10 flex flex-col items-center gap-4'>
					<h1 className='text-3xl font-semibold underline '>Sallary Details</h1>
					<div className=' mb-4' >
						{
							Sallary.map((data) => <h1 className='text-3xl text-green-600 ' key={data._id}><span className='text-black'>Sallary </span>: {data.Salary}</h1>)
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default EmployAllDetails


/**const Responce = await axios.post(`/Base/API/V1/SignUp`, {
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

'/Base/API/V1/EmployDetails'
*/