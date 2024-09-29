import React,{useEffect,useState} from 'react'
import {AiOutlinePoweroff} from "react-icons/ai"
import PersonalInfo from './ProfileInformation/PersonalInfo'
import Addemploy from './ProfileInformation/Addemploy'
import {useDispatch,useSelector} from 'react-redux'
import UpdateAndDelete from './ProfileInformation/UpdateAndDelete'
import SallaryProvide from './ProfileInformation/SallaryProvide'
import EmployAllDetails from './ProfileInformation/EmployAllDetails'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import {RemoveDetails} from '../Redux/UserDetails'
import {UserSelectedDetails,RemoveSelectedDetails} from '../Redux/UserAccountType'


function Profile() {
	const Navigate = useNavigate();
	const Dispatch = useDispatch();
	const Type = useSelector((store) => store.SelectBy);


	const [AccountType,SetAccountType] = useState('ProfileInformetion');
	const ProfileData = useSelector((Store) => Store.profileInfo);
	const [UserProfile,SetUserProfiel] = useState({});

	useEffect(() => {
		SetUserProfiel(ProfileData.userData);
		SetAccountType(Type.userData);



		return () => {}
	},[])
	// api call for api call 
	const OnClickHandeler = (UserType) => {

		Dispatch(UserSelectedDetails(UserType))
		SetAccountType(UserType);
	}

	
	// log out handler..
	const LogoutHandler = async () => {
		const controller = new AbortController();
		try {
			const Responce = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/API/V1/logout`,{},{
				headers: {
					'Content-Type': 'application/json',
					Authorisation: `Bearer ${ProfileData.UserToken}`,
				}
			},{
				signal: controller.signal
			})
			Dispatch(RemoveDetails());
			Navigate('/')

		} catch(error) {
			if(axios.isCancel(Error)) {

				return
			}
			if(axios.isAxiosError(Error)) {
				console.log(Error)
				return
			}
		}
	}


	return (
		<div className=' bg-sky-300/10 flex gap-6  ' >
			<div className='  h-full  w-[23%] m-2 py-4  font-semibold bg-slate-300/10  text-gray-700 shadow-md shadow-slate-600 rounded-br-md rounded-tr-md'>
				{/* first part releted ot name /image /orders boton releted */}
				<div className='  text-left  ' >

					{/* profile icon ber */}
					<div className=' flex gap-6  h-full w-[90%]  items-center ml-4   bg-white rounded-md '>
						{/* profile image */}
						<div className=' w-16 h-16 bg-slate-700 rounded-full '>
							<img src="#" alt="" />
						</div>
						{/* name and surname */}
						<div >
							<h5>hello</h5>
							<h3 className=' text-xl '>Tarak Jana</h3>
						</div>

					</div>


				</div>

				{/* second part ,related to account setting  */}
				<div className=' flex flex-col text-left pl-2  my-6'>
					<div className=' flex gap-2  items-center '>
						<div className=' h-4 w-4 bg-black rounded-full '></div>
						<h3 className=' text-2xl font-medium m-1 '>Account Setting</h3>
					</div>
					<ul className='flex flex-col gap-1 ml-16 text-[18px] '>
						<li onClick={() => OnClickHandeler("ProfileInformetion")} className=' cursor-pointer hover:underline'>Personal Information</li>
						<li onClick={() => OnClickHandeler("AllDetails")} className=' cursor-pointer hover:underline'>All Details</li>


					</ul>
				</div>
				<hr className=' border border-black ' />
				{/* third part related for payment */}
				<div className={` flex flex-col text-left pl-2  my-2  ${UserProfile.AccountType !== "ADMIN" ? "hidden" : ''} `}>

					<div className=' flex gap-2  items-center '>
						<div className=' h-4 w-4 bg-black rounded-full '></div>
						<h3 className=' text-2xl font-medium m-1 '>ADMIN SETTING</h3>
					</div>
					<ul className='flex flex-col gap-1 ml-16 text-[18px] '>
						<li onClick={() => OnClickHandeler('AddEmploy')} className=' cursor-pointer hover:underline'>Add Employ</li>
						<li onClick={() => OnClickHandeler('DeleteAndUpdate')} className=' cursor-pointer hover:underline'>Update/Delete Employ </li>
						<li onClick={() => OnClickHandeler('SalaryProvide')} className=' cursor-pointer hover:underline'>Salary Provide</li>
					</ul>

				</div>
				<hr className=' border border-black ' />
				{/* forth part related My Stuff */}

				<hr className=' border border-black ' />
				<div className='text-xl font-semibold mt-4  flex flex-col gap-3 items-center'>
					<div onClick={LogoutHandler} className='text-black flex flex-wrap items-center gap-3  text-2xl cursor-pointer'>
						<AiOutlinePoweroff />
						<h4>LOG OUT</h4>
					</div>

				</div>
			</div>
			<div className='h-full w-[70%] shrink '>
				{AccountType === "ProfileInformetion" ? <PersonalInfo /> : null}
				{AccountType === "AddEmploy" ? <Addemploy /> : null}
				{AccountType === "DeleteAndUpdate" ? <UpdateAndDelete /> : null}
				{AccountType === "SalaryProvide" ? <SallaryProvide /> : null}
				{AccountType === "AllDetails" ? <EmployAllDetails /> : null}

			</div>

		</div>
	)
}

export default Profile
